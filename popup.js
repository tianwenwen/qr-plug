
/**
 * Created by Lanxumit on 2017/7/25.
 */

(function(){

    var qr ={
        init:function(){
            var me = this,href;
            chrome.tabs.query({active: true, currentWindow: true},function(tabs){
                href = tabs[0].url;
                $('.createVal').val(href);
                me.createQr(href);
            });
            me.initBtns();
        },
        createQr:function(url){
             $('.qr-img').html('').qrcode({
                render:'canvas',
                text:url,
                width:300,
                height:300
            });
        },
        initBtns:function(){
            var $wrap = $('.container'),me = this;
            $wrap.find('button').click(function(){
                var url = $('.createVal').val().trim();
                me.createQr(url);
            });
            $wrap.delegate('#export','click',function(){
                var $self = $(this),url;
                url = $('.qr-img canvas')[0];
                $self[0].download ='export_qr_image';
                $self[0].href = url.toDataURL();
            })
        }
    };
    qr.init();
})();
