webpackJsonp([74],{603:function(t,e,i){function s(t){i(890)}var a=i(66)(i(697),i(977),s,null,null);t.exports=a.exports},697:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(229);e.default={data:function(){return{fileState:!0,dialogVisible:!1,loading:!0,count:0,state:!1,imgPath:"",rootId:0,upobj:{type:"image",sessionKey:localStorage.getItem("sessionKey"),appId:this.$store.state.appId},giftInfo:{},friendLinkCtgList:[],rules:{name:[{required:!0,message:"请填写一个礼物名字",trigger:"blur"}],priority:[{required:!0,type:"number",message:"请填写一个数字排序",trigger:"blur"}],price:[{required:!0,type:"number",message:"请填写一个价格",trigger:"blur"}]}}},methods:{showBig:function(){this.dialogVisible=!0},getGiftInfo:function(t){var e=this;s.E({id:t}).then(function(t){"100"==t.code?(e.loading=!1,e.giftInfo=t.body,""==e.giftInfo.picPath?e.state=!0:(e.imgPath=t.body.picPath,e.state=!1)):(e.loading=!1,e.$message.error(t.message))}).catch(function(t){e.loading=!1,e.$message.error("网络异常")})},setChange:function(t){},updateGiftInfo:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var i=e.giftInfo;i.ctgId=e.giftInfo.categoryId,s.F(i).then(function(t){"100"==t.code?(e.$message.success("修改成功"),setTimeout(function(){e.$router.push({path:"/giftlist"})},1e3)):e.$message.error(t.message)}).catch(function(t){e.$message.error("修改失败")})})},addGiftInfo:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var i=e.giftInfo;s.G(i).then(function(t){"100"==t.code?(e.$message.success("添加成功"),setTimeout(function(){e.$router.push({path:"/giftlist"})},1e3)):e.$message.error(t.message)}).catch(function(t){e.$message.error("添加异常")})})},back:function(){this.$router.push({path:"/giftlist",query:{noceStr:Math.round(10*Math.random())}})},beforeAvatarUpload:function(t){this.fileState=!0;var e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type,i=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),i||this.$message.error("上传头像图片大小不能超过2MB!"),e&&i},getImgpic:function(t,e,i){this.imgPath=t.body.url,this.state=!1,this.fileState=!1,this.giftInfo.picPath=t.body.url},resetForm:function(t){this.$route.query.id;this.$refs[t].resetFields()}},created:function(){var t=this.$route.query.type,e=this.$route.query.id;"add"==t?this.getGiftInfo(e):"edit"==t&&this.getGiftInfo(e)},watch:{$route:function(t,e){var i=this.$route.query.id;this.loading=!0,this.getFriendLinkCtgList(),this.getGiftInfo(i)}}}},804:function(t,e,i){e=t.exports=i(571)(!1),e.push([t.i,"",""])},890:function(t,e,i){var s=i(804);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(572)("fbe03f38",s,!0)},977:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"forum-module"},[i("div",{staticClass:"forum-header"},[i("span",{staticClass:"forum-name"},[t._v(t._s(t.$route.name))])]),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-body table-responsive"},[i("el-form",{ref:"topicInfo",attrs:{rules:t.rules,model:t.giftInfo}},[i("el-form-item",{staticClass:"form-group",attrs:{label:"礼物名称",prop:"name"}},[i("el-col",{attrs:{span:6}},[i("el-input",{model:{value:t.giftInfo.name,callback:function(e){t.$set(t.giftInfo,"name",e)},expression:"giftInfo.name"}})],1),t._v(" "),i("el-col",{staticClass:"required",attrs:{span:1}},[t._v("* ")])],1),t._v(" "),i("el-form-item",{staticClass:"form-group",attrs:{label:"礼物图片"}},[i("el-col",{attrs:{span:6}},[i("el-input",{model:{value:t.giftInfo.picPath,callback:function(e){t.$set(t.giftInfo,"picPath",e)},expression:"giftInfo.picPath"}}),t._v(" "),i("div",{class:t.state?"pic-box":"pic-box-no"},[t.state?t._e():i("img",{attrs:{src:t.$store.state.baseUrl+t.imgPath,alt:""},on:{click:t.showBig}})])],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-upload",{staticClass:"upload-demo",attrs:{action:t.$store.state.upLoadUrl,name:"uploadFile",data:t.upobj,"before-upload":t.beforeAvatarUpload,"on-success":t.getImgpic,"show-file-list":t.fileState}},[i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[t._v("点击上传")])],1),t._v(" "),i("el-dialog",{staticClass:"pic-dialog",attrs:{title:"按下esc退出全屏",size:"full"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[i("img",{staticClass:"big-img",attrs:{src:t.$store.state.baseUrl+t.imgPath,alt:""}})])],1)],1),t._v(" "),i("el-form-item",{staticClass:"form-group",attrs:{label:"礼物价格",prop:"price"}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{type:"number"},model:{value:t.giftInfo.price,callback:function(e){t.$set(t.giftInfo,"price",t._n(e))},expression:"giftInfo.price"}})],1),t._v(" "),i("el-col",{staticClass:"required",attrs:{span:1}},[t._v("* ")])],1),t._v(" "),i("el-form-item",{staticClass:"form-group",attrs:{label:"排序",prop:"priority"}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{type:"number"},model:{value:t.giftInfo.priority,callback:function(e){t.$set(t.giftInfo,"priority",t._n(e))},expression:"giftInfo.priority"}})],1),t._v(" "),i("el-col",{staticClass:"required",attrs:{span:1}},[t._v("* ")])],1),t._v(" "),i("el-form-item",{staticClass:"form-group",attrs:{label:"是否禁用"}},[i("el-col",{attrs:{span:1}},[i("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.giftInfo.disabled,callback:function(e){t.$set(t.giftInfo,"disabled",e)},expression:"giftInfo.disabled"}})],1)],1),t._v(" "),i("el-form-item",{staticClass:"form-group",attrs:{label:"礼物类型"}},[i("el-col",{attrs:{span:6}},[i("el-radio-group",{model:{value:t.giftInfo.giftType,callback:function(e){t.$set(t.giftInfo,"giftType",e)},expression:"giftInfo.giftType"}},[i("el-radio",{attrs:{label:0}},[t._v("个人礼物")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("群礼物")])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"margin-md"},["edit"==t.$route.query.type?i("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(e){t.updateGiftInfo("topicInfo")}}}):t._e(),t._v(" "),"add"==t.$route.query.type?i("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(e){t.addGiftInfo("topicInfo")}}}):t._e(),t._v(" "),i("input",{staticClass:"bbs-reset",attrs:{type:"reset",value:"重置"}})])],1)])},staticRenderFns:[]}}});