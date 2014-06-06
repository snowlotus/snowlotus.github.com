---
layout: post
title: "img onload event in IE"
description: ""
category: memo
tags: []
---
{% include JB/setup %}

今天被测试提了一个bug，问题表现是在IE下图片的懒加载不执行，即图片加载不出来。这部分的逻辑非常简单，就是遍历页面上的img，将图片的src替换成标签上的某个伪属性对应的字符串即可。

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

对着代码分析半天，始终觉得代码没有哪里有问题。清除浏览器缓存，图片又能正常加载，只是刷新之后又不能执行，第二次，第二次……慢着，难道是IE下图片加载在第二次没执行，加个alert，果然印证了我的想法

```javascript
var img = new Image;
img.onload = function(){
    alert (1);
};
```

原来第2次加载的图片不是从服务器去加载，而是直接从缓冲区加载，这样当src被赋值时onload事件就会立即执行，而如果src赋值的位置不对那就会让onload事件无法触发，难过此时查看img标签时src没有被替换程`data-original`的值，但是img标签上已经有了`complete`属性，因此此处只需将`o.src=src`位置提取出来即可。

实在是一个不值一提的小bug，但在没发现问题本质之前苦苦思索不得其解，再加上之前一直用的同一段代码来实现webapp上懒加载，有点过于经验之谈，殊不知真是被webkit的惯坏了。

不管怎样，记录下来，当做小知识点也好当做解决问题时的思路方向也好，加深印象，以后就不会犯这种低级错误了！！！