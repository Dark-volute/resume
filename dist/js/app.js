webpackJsonp([0],[,,,function(n,t,e){"use strict";e(4),e(5)},function(n,t){},function(n,t,e){"use strict";(function(n){function t(){var t=0;setInterval(function(){t>80||(t>50&&(n(".circle").addClass("clip-auto"),n(".right").removeClass("wth0")),n(".c .circle .left").css("transform","rotate("+3.6*t+"deg)"),n(".c .num>span").text(t),t++)});e=!1}var e=!0;n("#fullpage").fullpage({anchors:["about","skills","item","contact"],loopHorizontal:!1,fixedElements:"#arrow",menu:"#myMenu",scrollingSpeed:500,css3:!0,paddingTop:"4em",slidesNavigation:!0,controlArrows:!1,continuousVertical:!0,afterLoad:function(n,a){e&&2===a&&t()},onLeave:function(n,t){}}),function(){var t=n("#myMenu li");t.on("mouseenter",function(){n(this).children().eq(0).fadeIn("fast","linear")}),t.on("mouseleave",function(){n(this).children().eq(0).fadeOut()})}();var a=n(".about .line"),o=n(".about .intro p");a.animate({width:"60%"},800,function(){n(".about .name").addClass("nameAnimate"),o.animate({opacity:1,top:"-30px"},600)}),document.onreadystatechange=function(){"complete"===document.readyState&&n("#loading").fadeOut()}}).call(t,e(0))}],[3]);