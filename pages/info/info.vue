<template>
	<view>
        <!-- 标题 -->
        <view :class="['grace-article-title', graceSkeleton == 'ing' ? 'grace-skeleton' : '']">{{article.art_title}}</view>
        <!-- 作者信息 -->
        <view class="grace-article-author-line">
            <view :class="['grace-article-author', graceSkeleton == 'ing' ? 'grace-skeleton' : '']">
                <image :src="article.u_face" mode="widthFix"></image>
                <view class="author-name">{{article.u_name}}</view>
            </view>
            <view>{{article.art_createtime}}</view>
        </view>
        <!-- 文章内容 -->
        <view class="grace-article-contents">
            <block v-for="(item, index) in artContents" :key="index">
            <view :class="['img-item', graceSkeleton == 'ing' ? 'grace-skeleton' : '']" v-if="item.type == 'image'">
                <image :src="item.content" mode="widthFix" @click="showImgs"></image>
            </view>
            <view :class="['text-item', graceSkeleton == 'ing' ? 'grace-skeleton' : '']" v-if="item.type == 'text'">{{item.content}}</view>
            </block>
        </view>
    </view>
</template>

<script>
	var _self ;
	export default {
		data() {
			return {
				article : [], //文章基础信息
				artContents : [], // 文章项目
				graceSkeleton : 'ing'
			};
		},
		onLoad:function(options){
			_self = this;
			var artid = options.artid;
			// 加载文章详情
			uni.showLoading({title:""});
			uni.request({
				url: this.apiServer + 'art&m=infoWithUser&artid='+artid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					var art = res.data.data;
					// 将文章内容转换成数组
					var artContentItems = JSON.parse(art.art_content);
					console.log(artContentItems);
					// 首先规划骨架
					this.artContents = []; 
					for(var i = 0; i < artContentItems.length; i++){
						this.artContents.push({'type': artContentItems[i].type});
					}
					// 延迟添加数据
					setTimeout(function(){
						_self.article       = art;
						_self.artContents   = artContentItems;
						_self.graceSkeleton = 'end';
						uni.hideLoading();
					}, 500);
				}
			});
		},
		methods: {
			// 点击文章图片显示.
			showImgs : function(e){
				var currentUrl = e.currentTarget.dataset.url;
				// 找出图片
				var imgsNeedShow = [];
				for(var i = 0; i < this.artContents.length; i++){
					if(this.artContents[i].type == 'image'){
						imgsNeedShow.push(this.artContents[i].content);
					}
				}
				uni.previewImage({
					urls    :imgsNeedShow,
					current :currentUrl
				});
			}
		}
	}
</script>

<style>

</style>
