// @ts-nocheck
// 每次调用ajax或get或post都会调用此函数
$.ajaxPrefilter(function(options) {
    // options.url = 'http://ajax.frontend.itheima.net' + options.url
    options.url = ' http://api-breakingnews-web.itheima.net' + options.url
})