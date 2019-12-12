(function(){
    var u = navigator.userAgent;
    var _environment = 'http://172.16.11.40:7010/nwpp/app';     //公司环境
    // var _environment = 'http://172.16.13.121:8080/nwpp/app';  //正式环境
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;  //安卓端
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isAndroid){
        $('#dowanload_a').attr('href',`${ _environment}/user/download/install?type=0`)
        $('.warm-img').hide()
        // console.log(u.match(/MicroMessenger/i) != 'MicroMessenger');
        // console.log(u.indexOf(' QQ')<0 && u.indexOf('MQQBrowser') <0);
        if((u.match(/MicroMessenger/i) != 'MicroMessenger') && (u.indexOf(' QQ')<0 && u.indexOf('MQQBrowser') <0)){
            // alert('我是微信客户端')
            // $('.show-for-ios').show()
            window.location = `${ _environment}/user/download/install?type=0`
        }
    }
    if(isIos){
        $('#dowanload_a').attr('href',`itms-services://?action=download-manifest&url=https://app.csg.cn:6066/nwpp/attachments/ios/manifest.plist`)
        $('.warm-img').show()
        // console.log('我是ios');
        if((u.match(/MicroMessenger/i) != 'MicroMessenger') && (u.indexOf(' QQ')<0 && u.indexOf('MQQBrowser') <0)){
            // alert('我是微信客户端')
            // $('.show-for-ios').show()
            window.location ='itms-services://?action=download-manifest&url=https://app.csg.cn:6066/nwpp/attachments/ios/manifest.plist'
        }
        // if(u.match(/MicroMessenger/i) == 'MicroMessenger'){
        //     window.location ='itms-services://?action=download-manifest&url=https://app.csg.cn:6066/nwpp/attachments/ios/manifest.plist'
        //     // console.log('我是微信客户端');
        // }else{
        //      window.location ='itms-services://?action=download-manifest&url=https://app.csg.cn:6066/nwpp/attachments/ios/manifest.plist'
        // }
    }
})()