<template>
	<view class="wrap">
        <view class="write_title">
            <input type="text" v-model="title" placeholder="请输入标题" />
        </view>
        <!-- 内容展示区 -->
        <view class="artList">
            <block v-for="(item, index) in artList" :key="index">
                <view class="item" v-if="item.type == 'image'"><image :src="item.content" :data-index="index" mode="widthFix" @tap="removeImg" /></view>
                <view class="item" v-if="item.type == 'text'">
                    <textarea :value="item.content" placeholder="" v-model="artList[index].content" />
                    <view :data-index="index" class="deleteText" @tap="deleteText">删除</view>
                </view>
            </block>
        </view>
        <!-- 输入区 -->
        <form @submit="submit">
            <view class="inputArea">
                <view class="addImg" @tap="addImg">+图片</view>
                <view class="addText">
                    <textarea name="artText" maxlength="-1" v-model="inputContent" placeholder="请输入文本" />
                    <button type="primary" form-type="submit">添加</button>
                </view>
            </view>
        </form>
        <!-- 选择分类 -->
        <view class="art-cate">
            <view>文章分类</view>
            <view class="">
                <picker mode="selector" :range="caties" @change="cateChange">
                    <view>{{caties[currentCateIndex]}}</view>
                </picker>
            </view>
        </view>
        <!-- 提交按钮 -->
        <view class="submitNow" v-if="artList.length > 0" @tap="submitNow">编辑文章</view>
    </view>
</template>

<script>
	var artId, loginRes, _self;
	var signModel = require('../../commons/sign.js');
	export default {
		data() {
			return {
				title : '',
				artList : [],
				inputContent : "",
				needUploadImg : [],
				uploadIndex : 0,
				//分类
				caties : ['点击选择'],
				currentCateIndex : 0,
				catiesFromApi : [],
				// 记录真实选择的api接口数据的分类id
				sedCateIndex  : 0
			};
		},
		onLoad :function(options){
			artId = options.artId;
			_self = this;
			signModel.sign(this.apiServer);
			loginRes = this.checkLogin('../my/my', '2');
			if(!loginRes){return false;}
			// 加载文章默认值
			uni.request({
				url: this.apiServer+'art&m=info&artid='+artId,
				method: 'GET',
				data: {},
				success: res => {
					var art = res.data.data;
					// 文章内容转换并展示
					var artContent = art.art_content;
					artContent = JSON.parse(artContent);
					_self.artList = artContent;
					
					// 默认值赋值
					this.title = art.art_title;
					// 加载文章分类并设置默认值
					uni.request({
						url: _self.apiServer+'category&m=index',
						method: 'GET',
						success: res => {
							if(res.data.status == 'ok'){
								// 把数据格式整理为 picker 支持的格式 ['分类名', ...]
								var categories = res.data.data;
								for(var k in categories){
									_self.caties.push(categories[k]);
								}
								// 记录分类信息
								_self.catiesFromApi = categories;
								// 获取当前分类的默认值
								_self.sedCateIndex = art.art_cate;
								// 对应的查找picker的默认值
								var cateName = categories[art.art_cate];
								for(var i = 0; i < _self.caties.length; i++){
									if(cateName == _self.caties[i]){
										_self.currentCateIndex = i;
										break;
									}
								}
								console.log(_self.currentCateIndex);
							}
						}
					});
				}
			});
		},
		methods:{
			submitNow : function(){
				// 数据验证
				if(this.title.length < 2){uni.showToast({title:'请输入标题', icon:"none"}); return ;}
				if(this.artList.length < 1){uni.showToast({title:'请填写文章内容', icon:"none"}); return ;}
				if(this.sedCateIndex < 1){uni.showToast({title:'请选择分类', icon:"none"}); return ;}
				// 上传图片 一次一个多次上传 [ 递归函数 ]
				// 上传完成后整体提交数据
				// 首先整理一下需要上传的图片
				// this.needUploadImg = [{tmpurl : 临时地址, index : 数据索引}]
				this.needUploadImg = [];
				for(var i = 0; i < this.artList.length; i++){
					if(this.artList[i].type == 'image'){
						// debugger
						console.log(JSON.stringify(this.artList));
						if(this.artList[i].content.indexOf('http:') == -1){
							this.needUploadImg.push({"tmpurl" : this.artList[i].content , "indexID" : i});
						}
					}
				}
				this.uploadImg();
			},
			uploadImg : function(){
				// 如果没有图片 或者已经上传完成 则执行提交
				if(this.needUploadImg.length < 1 || this.uploadIndex >=  this.needUploadImg.length){
					uni.showLoading({title:"正在提交"});
					// 将信息整合后提交到服务器
					var sign = uni.getStorageSync('sign');
					uni.request({
						url: this.apiServer + 'art&m=edit&artid='+artId,
						method: 'POST',
						header: {'content-type' : "application/x-www-form-urlencoded"},
						data: {
							title   : _self.title,
							content : JSON.stringify(_self.artList),
							uid     : loginRes[0],
							random  : loginRes[1],
							cate    : _self.sedCateIndex,
							sign    : sign
						},
						success: res => {
							if(res.data.status == 'ok'){
								uni.showToast({title:"提交成功", icon:"none"});
								setTimeout(function(){
									uni.switchTab({
										url:'../my/my'
									})
								}, 1000);
							}else{
								uni.showToast({title:res.data.data, icon:"none"});
							}
						}
					});
					return ;
				}
				// 上传图片
				uni.showLoading({title:"上传图片"});
				var uploader = uni.uploadFile({
					url      : _self.apiServer+'uploadImg&m=index',
					filePath : _self.needUploadImg[_self.uploadIndex].tmpurl,
					name     : 'file',
					success: (uploadFileRes) => {
						uploadFileRes = JSON.parse(uploadFileRes.data);
						if(uploadFileRes.status != 'ok'){
							console.log(uploadFileRes);
							uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
							return false;
						}
						// 将已经上传的文件地址赋值给文章数据
						var index = _self.needUploadImg[_self.uploadIndex].indexID;
						_self.artList[index].content = _self.staticServer + uploadFileRes.data;
						console.log(_self.artList); 
						_self.uploadIndex ++;
						// 递归上传
						setTimeout(function(){_self.uploadImg();}, 1000);
					},
					fail: () => {
						uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
					}
				})
			},
			cateChange : function(e){
				var sedIndex          = e.detail.value;
				this.currentCateIndex = sedIndex;
				// 获取选择的分类名称
				if(sedIndex < 1){return ;}
				var cateName = this.caties[sedIndex];
				for(var i = 0; i < this.catiesFromApi.length; i++){
					if(cateName == this.catiesFromApi[i].cate_name){
						this.sedCateIndex = this.catiesFromApi[i].cate_id;
						break;
					}
				}
				this.currentCateIndex = sedIndex;
				console.log(this.sedCateIndex);
			},
			removeImg : function(e){
				console.log(e);
				var index = e.currentTarget.dataset.index;
				uni.showModal({
					content:"确定要删除此图片吗",
					title:'提示',
					success(e) {
						if (e.confirm) {
							_self.artList.splice(index, 1);
						}
					}
				});
			},
			deleteText : function(e){
				var index = e.currentTarget.dataset.index;
				uni.showModal({
					content:"确定要删除吗",
					title:'提示',
					success(e) {
						if (e.confirm) {
							_self.artList.splice(index, 1);
						}
					}
				});
			},
			submit : function(res){
				var content = res.detail.value.artText;
				if(content.length < 1){uni.showToast({title:"请输入内容",icon:'none'}); return ;}
				this.artList.push({"type":"text", "content" : content});
				this.inputContent = '';
			},
			addImg : function(){
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: function(res) {
						_self.artList.push({"type":"image", "content" : res.tempFilePaths[0]})
					}
				});
			}
		}
	}
</script>

<style>

</style>
