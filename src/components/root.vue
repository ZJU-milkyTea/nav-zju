<template>
   
    <div>
		<header-com></header-com>
		<search-root></search-root>
		<nav-root></nav-root>
    </div>
</template>

<script type="text/javascript">
import header from './header.vue';
import searchRoot from './search.vue'
import navRoot from './navRoot.vue';

// import xxx from someSrc     es6中得到模块的方法。


export default {
    //注册组件
    components: {
        'header-com': header,
		'search-root':searchRoot,
		'nav-root': navRoot
    },
    data: function() {
        return {
        
        }
    },
    methods: {
        // &event是实参，表示event对象
        // handleScreen(){
		// 	const m = this.detectZoom();
		// 	// document.body.style.zoom = 100/Number(m);
        //     // document.body.style.webkitTransform   = 100/Number(m);
        //     // document.write ('${<body style="zoom: ' + 100/Number(m) + '">');
        //     console.log(m)
		// },
        // detectZoom() {
        //     let ratio = 0;
        //     let screen = window.screen;
        //     let ua = navigator.userAgent.toLowerCase();
        //     if (window.devicePixelRatio !== undefined) {
        //         ratio = window.devicePixelRatio;
        //     } else if (~ua.indexOf('msie')) {
        //     if (screen.deviceXDPI && screen.logicalXDPI) {
        //         ratio = screen.deviceXDPI / screen.logicalXDPI;
        //     }
        //     } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        //         ratio = window.outerWidth / window.innerWidth;
        //     }
        //     if (ratio) {
        //         ratio = Math.round(ratio * 100);
        //     }
        //     return ratio;
		// }
    },
    created() {
		// window.onresize = this.handleScreen();
        // window.onload = function() {
        //     document.body.style.zoom = "normal"; //避免zoom尺寸叠加
        //     let scale = document.body.clientWidth / 1904;
        //     console.log(scale)
        //     document.body.style.zoom = scale;
        // };
        // //防抖，避免resize占用过多资源
        // (function() {
        //     var throttle = function(type, name, obj) {
        //     obj = obj || window;
        //     var running = false;
        //     var func = function() {
        //         if (running) {
        //         return;
        //         }
        //         running = true;
        //         requestAnimationFrame(function() {
        //         obj.dispatchEvent(new CustomEvent(name));
        //         running = false;
        //         });
        //     };
        //     obj.addEventListener(type, func);
        //     };

        //     throttle("resize", "optimizedResize");
        // })();

        // window.addEventListener("optimizedResize", function() {
        //     document.body.style.zoom = "normal";
        //     let scale = document.body.clientWidth / 1904;
        //     document.body.style.zoom = scale;
        // });

    }
}
</script>

<style type="text/css">

.body{
	background-color: crimson;
}




</style>
