(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Qvid:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return i}));var r=n("R5Yi");function i(e,t,n,i,a,o){var u=e.ownerDocument.defaultView;return Object(r.createGesture)({el:e,queue:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&n()},onStart:i,onMove:function(e){a(e.deltaX/u.innerWidth)},onEnd:function(e){var t=u.innerWidth,n=e.deltaX/t,r=e.velocityX,i=r>=0&&(r>.2||e.deltaX>t/2),a=(i?1-n:n)*t,c=0;if(a>5){var s=a/Math.abs(r);c=Math.min(s,300)}o(i,n,c)}})}}}]);