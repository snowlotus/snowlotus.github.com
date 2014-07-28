---
layout: post
title: "img onload event in IE"
description: ""
category: memo
tags: []
---
{% include JB/setup %}


I got a bug from our tester today. She told me that the img lazyload function doesn't work in ie 8 and below,which means that all the img elements can't be load and only shows the default imgs.It's really weird,cause the logic of lazyloda is really simple:replace the img's src with the value of the img's pseudo-attribute data-original, just as the code below:

```javascript
    var imgCache={};
    var imgs = $('img[data-original]'),
        _fn = function(o){
            var src = o.getAttribute('data-original');
            if(!src) return;
             if(!imgCache[src]){
              var oImg = new Image(); oImg.src = src;
              oImg.onload = function(){
                  o.src=src;
                  imgCache[src] = true;
                  oImg = null;
              };
             } else {
              o.src=src;
             }
            o.removeAttribute("data-original");
        };
    imgs.each(function(i,v){
        t ? setTimeout(function(){ _fn(v); }, i*t) : _fn(v);
    });
```

I analysed the code,tyr to find out something wrong ,but nothing. Just as the moment i clear the browser data cache and refresh the browser by pressing F5,the img show again,and i refresh it the second time,this time the bug show again.Wait,the second time? Is it means the event of img onload doesn't be fired? so i add an alert in the code ,there is nothing show in it ,it improved my thought .


```javascript
var img = new Image;
img.onload = function(){
    alert (1);
};
```


If the image is in the browser cache, the load event will be fired immediately when the .src value is set. If your load handler is not already in place, you will miss that event.So that's the point the src didn't be replaced but there is an attribute of `complete` on the img element.



How small a bug it is !But before you found the reason,how can you konw what it is and how can you get it solved,all you do is just debuging and debuging.Good judgement comes with experience, but experience comes from bad judgement.Yes,that's right,i got confused by bad judgement,cause i alaways used this block of code the complement the lazyload function in web app,and no errors or bugs really happen ,so i mistook it was ok.I was spoiled by  'webkit'.


Anyway, i write it down,may be it's for a knowledge tip,may be it's for a solution to a problem or a way of thinking.who cares! I just wirte it down and keep it in mind and let  myself get rid of a stupid mistake like this .