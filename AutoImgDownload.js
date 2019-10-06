// ==UserScript==
// @name         imgDownload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动下载网页中的指定图片
// @author       You
// @include      https://intra-mart-training.platon.jpn.com/sites/intra-mart/contents/*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        console.log($("#slideBG img").attr("src"));
        download();
    },3000)


    function download() {

			var imageUrl =$("#slideBG img").attr("src").split("?")[0];
            var currentPage=1;
            var lastPage=$("#indexInfo").text().split("/")[1];
            var fileName=$("#contentTitle").text();
            for(var i=0;i<lastPage;i++){
                imageUrl=imageUrl.replace((currentPage-1)+"_0",currentPage+"_0");
                console.log(imageUrl);
				$("#slideBG").html("<b>点击下载图片.</b><br><a id='target' download='" + fileName+'('+currentPage+')' + "' href='" + imageUrl + "'><img src='" + imageUrl + "'/></a>");
                $("#target").css('visibility', 'hidden');
				document.querySelector("#target").click();
                sleep(1000)
                currentPage++;
            }
            console.log(lastPage);
			};
    function sleep(d){
        for(var t = Date.now();Date.now() - t <= d;);
    }
})();
