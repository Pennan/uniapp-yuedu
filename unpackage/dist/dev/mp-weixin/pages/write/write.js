(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/write/write"],{

/***/ "../../../../svnSpace/uniappSpace/yuedu/main.js?{\"page\":\"pages%2Fwrite%2Fwrite\"}":
/*!******************************************************************************!*\
  !*** F:/svnSpace/uniappSpace/yuedu/main.js?{"page":"pages%2Fwrite%2Fwrite"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../svnSpace/uniappSpace/yuedu/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _write = _interopRequireDefault(__webpack_require__(/*! ./pages/write/write.vue */ "../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_write.default));

/***/ }),

/***/ "../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue":
/*!***********************************************************!*\
  !*** F:/svnSpace/uniappSpace/yuedu/pages/write/write.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _write_vue_vue_type_template_id_2d8677cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write.vue?vue&type=template&id=2d8677cf& */ "../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=template&id=2d8677cf&");
/* harmony import */ var _write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write.vue?vue&type=script&lang=js& */ "../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _write_vue_vue_type_template_id_2d8677cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _write_vue_vue_type_template_id_2d8677cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "svnSpace/uniappSpace/yuedu/pages/write/write.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** F:/svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./write.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=template&id=2d8677cf&":
/*!******************************************************************************************!*\
  !*** F:/svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=template&id=2d8677cf& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_template_id_2d8677cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./write.vue?vue&type=template&id=2d8677cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=template&id=2d8677cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_template_id_2d8677cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_write_vue_vue_type_template_id_2d8677cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































var _self, loginRes;
var signModel = __webpack_require__(/*! ../../commons/sign.js */ "../../../../svnSpace/uniappSpace/yuedu/commons/sign.js");var _default =
{
  data: function data() {
    return {
      title: '',
      artList: [],
      inputContent: "",
      needUploadImg: [],
      uploadIndex: 0,
      //分类
      caties: ['点击选择'],
      currentCateIndex: 0,
      catiesFromApi: [],
      // 记录真实选择的api接口数据的分类id
      sedCateIndex: 0 };

  },
  onLoad: function onLoad() {
    _self = this;
    loginRes = this.checkLogin('../write/write', 2);
    if (!loginRes) return;
    // 签名
    signModel.sign(_self.apiServer);
    // 加载文章分类
    uni.request({
      url: _self.apiServer + 'category&m=index',
      method: 'GET',
      success: function success(res) {
        if (res.data.status == 'ok') {
          // 把数据格式整理为 picker 支持的格式 ['分类名', ...]
          var categories = res.data.data;
          for (var k in categories) {
            _self.caties.push(categories[k]);
          }
          // 记录分类信息
          _self.catiesFromApi = categories;
        }
      } });

  },
  onShow: function onShow() {
    loginRes = this.checkLogin('../write/write', '2');
    if (!loginRes) {return false;}
    // 重新请签名
    signModel.sign(_self.apiServer);
  },
  methods: {
    cateChange: function cateChange(e) {
      var sedIndex = e.detail.value;
      this.currentCateIndex = sedIndex;
      // 获取选择的分类名称
      if (sedIndex < 1) {return;}
      var cateName = this.caties[sedIndex];
      for (var k in this.catiesFromApi) {
        if (cateName == this.catiesFromApi[k]) {
          this.sedCateIndex = k;
          break;
        }
      }
      this.currentCateIndex = sedIndex;
    },
    removeImg: function removeImg(e) {
      var index = e.currentTarget.dataset.index;
      uni.showModal({
        content: "确定要删除此图片吗",
        title: '提示',
        success: function success(e) {
          if (e.confirm) {
            _self.artList.splice(index, 1);
          }
        } });

    },
    deleteText: function deleteText(e) {
      var index = e.currentTarget.dataset.index;
      uni.showModal({
        content: "确定要删除吗",
        title: '提示',
        success: function success(e) {
          if (e.confirm) {
            _self.artList.splice(index, 1);
          }
        } });

    },
    submitNow: function submitNow() {
      // 数据验证
      if (this.title.length < 2) {uni.showToast({ title: '请输入标题', icon: "none" });return;}
      if (this.artList.length < 1) {uni.showToast({ title: '请填写文章内容', icon: "none" });return;}
      if (this.sedCateIndex < 1) {uni.showToast({ title: '请选择分类', icon: "none" });return;}
      // 上传图片 一次一个多次上传 [ 递归函数 ]
      // 上传完成后整体提交数据
      // 首先整理一下需要上传的图片
      // this.needUploadImg = [{tmpurl : 临时地址, index : 数据索引}]
      this.needUploadImg = [];
      for (var i = 0; i < this.artList.length; i++) {
        if (this.artList[i].type == 'image') {
          this.needUploadImg.push({ "tmpurl": this.artList[i].content, "indexID": i });
        }
      }
      this.uploadImg();
    },
    uploadImg: function uploadImg() {
      // 如果没有图片 或者已经上传完成 则执行提交
      if (this.needUploadImg.length < 1 || this.uploadIndex >= this.needUploadImg.length) {
        uni.showLoading({ title: "正在提交" });
        // 将信息整合后提交到服务器
        var sign = uni.getStorageSync('sign');
        uni.request({
          url: this.apiServer + 'art&m=add',
          method: 'POST',
          header: { 'content-type': "application/x-www-form-urlencoded" },
          data: {
            title: _self.title,
            content: JSON.stringify(_self.artList),
            uid: loginRes[0],
            random: loginRes[1],
            cate: _self.sedCateIndex,
            sign: sign },

          success: function success(res) {
            console.log(res);
            if (res.data.status == 'ok') {
              uni.showToast({ title: "提交成功", icon: "none" });
              _self.artList = [];
              // 清空数据
              signModel.sign(_self.apiServer);
              // 防止数据缓存
              _self.currentCateIndex = 0;
              _self.sedCateIndex = 0;
              _self.needUploadImg = [];
              _self.title = '';
              setTimeout(function () {
                uni.switchTab({
                  url: '../my/my' });

              }, 1000);
            } else {
              uni.showToast({ title: res.data.data, icon: "none" });
            }
          },
          fail: function fail(res) {

          },
          complete: function complete() {

          } });

        return;
      }
      // 上传图片
      uni.showLoading({ title: "上传图片" });
      var uploader = uni.uploadFile({
        url: _self.apiServer + 'uploadImg&m=index',
        filePath: _self.needUploadImg[_self.uploadIndex].tmpurl,
        name: 'file',
        success: function success(uploadFileRes) {
          uploadFileRes = JSON.parse(uploadFileRes.data);
          if (uploadFileRes.status != 'ok') {
            console.log(uploadFileRes);
            uni.showToast({ title: "上传图片失败,请重试!", icon: "none" });
            return false;
          }
          // 将已经上传的文件地址赋值给文章数据
          var index = _self.needUploadImg[_self.uploadIndex].indexID;
          _self.artList[index].content = _self.staticServer + uploadFileRes.data;
          console.log(_self.artList);
          _self.uploadIndex++;
          // 递归上传
          setTimeout(function () {_self.uploadImg();}, 1000);
        },
        fail: function fail() {
          uni.showToast({ title: "上传图片失败,请重试!", icon: "none" });
        } });

    },
    submit: function submit(res) {
      var content = res.detail.value.artText;
      if (content.length < 1) {uni.showToast({ title: "请输入内容", icon: 'none' });return;}
      this.artList.push({ "type": "text", "content": content });
      this.inputContent = '';
    },
    addImg: function addImg() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        success: function success(res) {
          _self.artList.push({ "type": "image", "content": res.tempFilePaths[0] });
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=template&id=2d8677cf&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/svnSpace/uniappSpace/yuedu/pages/write/write.vue?vue&type=template&id=2d8677cf& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "wrap" },
    [
      _c("view", { staticClass: "write_title" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.title,
              expression: "title"
            }
          ],
          attrs: {
            type: "text",
            placeholder: "请输入标题",
            eventid: "6a175a46-0"
          },
          domProps: { value: _vm.title },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.title = $event.target.value
            }
          }
        })
      ]),
      _c(
        "view",
        { staticClass: "artList" },
        _vm._l(_vm.artList, function(item, index) {
          return _c("block", { key: index }, [
            item.type == "image"
              ? _c("view", { staticClass: "item" }, [
                  _c("image", {
                    attrs: {
                      src: item.content,
                      "data-index": index,
                      mode: "widthFix",
                      eventid: "6a175a46-1-" + index
                    },
                    on: { tap: _vm.removeImg }
                  })
                ])
              : _vm._e(),
            item.type == "text"
              ? _c("view", { staticClass: "item" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.artList[index].content,
                        expression: "artList[index].content"
                      }
                    ],
                    attrs: {
                      value: item.content,
                      placeholder: "",
                      eventid: "6a175a46-2-" + index
                    },
                    domProps: { value: _vm.artList[index].content },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.artList[index].content = $event.target.value
                      }
                    }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: "deleteText",
                      attrs: {
                        "data-index": index,
                        eventid: "6a175a46-3-" + index
                      },
                      on: { tap: _vm.deleteText }
                    },
                    [_vm._v("删除")]
                  )
                ])
              : _vm._e()
          ])
        })
      ),
      _c(
        "form",
        { attrs: { eventid: "6a175a46-6" }, on: { submit: _vm.submit } },
        [
          _c("view", { staticClass: "inputArea" }, [
            _c(
              "view",
              {
                staticClass: "addImg",
                attrs: { eventid: "6a175a46-4" },
                on: { tap: _vm.addImg }
              },
              [_vm._v("+图片")]
            ),
            _c(
              "view",
              { staticClass: "addText" },
              [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputContent,
                      expression: "inputContent"
                    }
                  ],
                  attrs: {
                    name: "artText",
                    maxlength: "-1",
                    placeholder: "请输入文本",
                    eventid: "6a175a46-5"
                  },
                  domProps: { value: _vm.inputContent },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.inputContent = $event.target.value
                    }
                  }
                }),
                _c(
                  "button",
                  { attrs: { type: "primary", "form-type": "submit" } },
                  [_vm._v("添加")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _c("view", { staticClass: "art-cate" }, [
        _c("view", [_vm._v("文章分类")]),
        _c(
          "view",
          {},
          [
            _c(
              "picker",
              {
                attrs: {
                  mode: "selector",
                  range: _vm.caties,
                  eventid: "6a175a46-7"
                },
                on: { change: _vm.cateChange }
              },
              [_c("view", [_vm._v(_vm._s(_vm.caties[_vm.currentCateIndex]))])]
            )
          ],
          1
        )
      ]),
      _vm.artList.length > 0
        ? _c(
            "view",
            {
              staticClass: "submitNow",
              attrs: { eventid: "6a175a46-8" },
              on: { tap: _vm.submitNow }
            },
            [_vm._v("发布文章")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../svnSpace/uniappSpace/yuedu/main.js?{\"page\":\"pages%2Fwrite%2Fwrite\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/write/write.js.map