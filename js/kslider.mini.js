/*
* Author: Ganesh Kandu
* Mailto: kanduganesh@gmail.com
* Rotating Image Slider
*/
var width;var height;var distance;var speed;var a = 0;function slide(child,x){x=x%360;m = Math.sin(x * Math.PI / 180);w = Math.sin((x/2) * Math.PI / 180);if(m < 0){q= -m;}else{q= m;}q=1-q;$('#slide ul li:nth-child('+child+')').css( "opacity", w).css( "zIndex",Math.round(w*100)).css( "left",(width*(1-w)+m*height)+"px" ).css( "width", w*width*2+"px" ).css( "height",w*height*2+"px" ).css( "margin-top",height*(1-w)).css( "margin-left",m*distance);}function rotate(){a++;c = 360/count;for(i=1;i<=count;i++){b = a+i*c;slide(i,b);}/*document.getElementById("dbg").innerHTML = n;*/}function time(){clearTimeout(1);if(action == 0){rotate();}timer = setTimeout(time,speed);}$(window).resize(function(){swidth = $('#slider').width();left = ((swidth/2) - width);$('#slider #cont').css( "left",left);});function init_kslide(){a= 0;if(typeof speed == 'undefined'){alert("please define speed");return 0;}if(typeof width == 'undefined'){alert("please define width");return 0;}if(typeof height == 'undefined'){alert("please define height");return 0;}if(typeof distance == 'undefined'){alert("please define distance");return 0;}count = $("#Slide ul li").length;swidth = $('#slider').width();left = ((swidth/2) - width);$('#slider #cont').css( "left",left);action = 0;time();$("#slide ul li").mousedown(function(){action = 1;});$("#slide ul li").mouseup(function(){if(action == 1){action = 0;}});$("#slide ul li").mouseout(function(){if(action == 1){action = 0;}});$('#slide ul li img').on('click',function(){action = 1;$( "#zoomimg img" ).fadeIn( "slow" );$('#slide').css( "zIndex",'101');$('#zoomimg img').attr('src',$(this).attr('src'));});$('#zoomimg img').on('click',function(){$( "#zoomimg img" ).fadeOut( "slow" );});}