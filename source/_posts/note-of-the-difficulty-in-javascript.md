---
title: 学习笔记-js中难点梳理
date: 2019-06-18 09:44:30
tags: [学习笔记,js,知识梳理]
---

`js`的语言特性导致有很多知识点在日常开发中容易混淆或者难理解的，在此通过代码示例和文字总结加深理解，同时也方便后续复习查阅

# this
与其它语言相比，函数的`this`关键字在`javascript`中表现略不同。此外，在严格模式、非严格模式及`es2015`的箭头函数中也各有不同。

** 一般情况下（箭头函数除外）,`this`的指向与声明位置无关，与调用位置有关 **

```js
var name="window";
var obj={
  name:'obj',
  showName:function(){
    console.log(this.name);
  }
}
var otherObj={
  name:'otherObj',
  showName:obj.showName
}
obj.showName(); //obj
otherObj.showName();//otherObj
```

<p class="tip">
  此时调用`showName`方法的是`obj`，故`this`指向`obj`
</p>

```js

var anotherObj={
  name:'anotherObj',
  showName:function(){
    //tempFunc =function(){console.log(this.name)}
    var tempFunc=obj.showName;
    tempFunc();
  }
}
var anonymousObj={
  name:'anonymousObj',
  foo:function(){
    console.log(this.name)
  },
  showName:function(){
    //this.foo=function(){
    //   console.log(this.name)
    // }
    // cb=this.foo,cb是一个匿名函数，
    // 匿名函数在执行时，this也是指向window
    (function(cb){
      cb();
    })(this.foo)
  }
}

anotherObj.showName() ;//undefined
anonymousObj.showName();//undefined
```
<p class="tip">
  1. 在`anotherObj`的作用域中调用的`tempFunc`，`tempFunc`中的`this`无明确指向，故指向`window`
  2. 在`anonymousObj`的作用域中执行匿名函数，this也是指向window
</p>

```js
var obj={
  name:'obj',
  showName:function(){
    console.log(this.name);
  }
}
var anotherObj={
  name:'anotherObj',
  showName:function(){
    var tempFunc=obj.showName;
    tempFunc();
  }
}
obj.showName.apply();//undefined 此时虽然时obj调用showName方法
obj.showName.apply(anotherObj); //anotherObj 
```
<p class="tip">
  `apply`可以改变`this`的指向为第一个参数
  故在`obj.showName.apply()`中this指向空，即window
  在`obj.showName.apply(anotherObj)`中this指向空anotherObj
</p>

```js
var arrowObj={
  name:'arrowObj',
  showName:()=>{
    //this 指向undefined（即全局对象window），具体可查看babel转义后的结果
    console.log(this.name); 
  }
}
var arrowObj1={
  name:'arrowObj1',
  showName:function(){
    setTimeout(()=>{
      console.log(this.name);
    },0)
  }
}
arrowObj.showName();//undefined
arrowObj1.showName(); //'arrowObj1'

```
<p class="tip">
  在es6中，箭头函数（又称lamdba表达式），是在声明的时候绑定this的而非调用时
</p>

```js
(function(){
  "use strict";
  var name='snowdrop'
  console.log(this.name); //Uncaught TypeError: Cannot read property 'name' of undefined  
  function fun() { return this; }
  console.assert(fun() === undefined);
  console.assert(fun.apply(null) === null);
  console.assert(fun.call(undefined) === undefined);
})()
```
<p class="tip">
  在严格模式和非严格模式下，this的指向还略有不同
  从上述结果可知，严格模式下，this没有明确指向时,指向undefinde而非window
</p>

**从上述代码片段及运行结果可得知，`this`有以下特性（坑）**

* this 的指向和调用位置有关，与声明位置无关
* 没有明确指向的时候，this指向window
* 在浏览器环境下，setTimeout、setInterval和匿名函数执行时this的指向为全局对象window
* call和apply能够强制改变this的指向为当前的第一个传参
* 在es6中，箭头函数（又称lamdba表达式），是在声明的时候绑定this的
* 严格模式下，this没有明确指向时,指向undefinde而非window

# 作用域
js中的作用域也是一个非常重要和易出错的地方，话不多说，先上代码

```js
foo();//undefined
 function foo(){
   console.log(a);
   var a=2;
 }
```
<p class="tip">
上面的代码在执行时别js引擎解析成如下的代码
`function foo(){
  var a;//undefined
  console.log(a);
  a=2; 
}
foo();`
</p>

```
show();//TypeError: show is not a function
var show=function (){
  console.log(1)
}
```
<p class="tip">
上面代码等价与下面
`var show;//undefined
show ();
show=function (){
  console.log(1)
}`
</p>

```js
typeof show; // function  
var show=11;
function show(){
  console.log('show')
}
```
<p class="tip">
上面代码等价于以下代码
function show(){
  console.log('show')
}
var show=11;
typeof show;
故由此可知，函数的变量提升优于变量
</p>

```
if(someVar ===undefined){
  var someVar=1;
  console.log(someVar)
}
```
<p class="tip">
虽然此处有`if`,但js中没有块级作用域的概念，变量`someVar`依然也会发生作用域提升。
</p>

**从上述代码片段及运行结果可得知，js的作用域有以下特性**

* 函数和变量的声明都会产生作用域提升
* 变量的上升只是声明会提升，赋值不会
* 函数表达式（包括匿名和具名）不会发生作用域提升
* 函数提升的优先级高于变量，且不会被同名变量覆盖
* 声明的提升不会被条件判断给控制住（不过不同浏览器的实现不同，有的会控制有的不会控制）

# 继承

*TODO 此部分还有很多没理解，待深究*

## [es6中的继承特性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
* 使用extends关键字
* 子类继承父类时，子类的构造函数需要显式的调用下父类的super方法
* 可以定义static方法

## [ES5实现继承的黑魔法](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

### 原型链继承

```js
function Super(){
  this.name='super';
}
Super.prototype.showName=function(){
  console.log(this.name)
}

function Sub(){
  this.name='sub';
  this.age=24;
}
Sub.prototype=new Super();
Sub.prototype.showAge=function(){
  console.log(this.age)
}
```
<p class="tip">
原型链继承的缺点：父类的构造函数会在创建子类及实例化子类的时候分别各执行了一次，造成了内存的浪费
</p>

### 组合继承

由于原型继承存在上述缺点，所有就有了组合继承，F是空对象，所以几乎不占内存
```js
function extend(Child, Parent) {
　　　　var F = function(){};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
　　　　Child.uber = Parent.prototype;
　　}

//使用的时候，方法如下
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物
```

# 跨域

跨域的定义：协议&域名&端口有任何一个不相同，则称这两个域名是跨域的

跨域的限制?

1. Cookie、localstorage、indexDB无法读取
2. DOM无法取得
3. ajax网络请求无法发出

常用的跨域方式有以下5种
* jsonp
* 服务器请求头设置允许跨域
* iframe+hash传值
* iframe+name传值
* postMessage

下面借助实现方式及细节来介绍下5种跨域方式，具体代码可参见[github](https://github.com/snowlotus/homework/tree/master/learn-js/crossSite)

## jsonp
```js
//定义一个全局的回调方法
window.xxx = function (value) {
  console.log(value)
}
var script = document.createElement('script')

//向服务器发起jsonp请求，传递约定好的callback参数
script.src = 'http://x.localhost.com:7001/json?callback=xxx'
document.body.appendChild(script)
```

```node.js
app.get('/json', app.jsonp({ callback: 'callback' }), app.controller.json.index)
```

<p class="tip">
  在js中需要定义一个全局方法，方法名你和服务端约定好的callback方法名，方法体为拿到返回值后的执行逻辑
  在服务端代码（本处用node实现），接受callback请求，执行逻辑返回一个json数据
  该方法只支持get请求，即使使用jquery的jsonp方法，type设为POST，也会自动变为GET
</p>

## Access-Control-Allow-Origin

本方式是在服务端配置针对某个域名的请求设置是否允许跨域，即可以在响应头中通过代码实现，也可以在如nginx服务器配置项中设置，本次以代码的方式加以说明

```node.js
module.exports = app => {
  class CrosController extends app.Controller {
    * index(req) {
      // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
      /* comment:设置响应头Access-Control-Allow-Origin 
      设置为* ，表示该资源可以被任意外域访问，
      但会导致浏览器cookie无法发送到服务器，即使配置Access-Control-Allow-Credentials：true 也不行 */

      // this.ctx.set('Access-Control-Allow-Origin', '*')

      /* comment: 
      如果我们想要 http://*.localhost.com 都支持跨域怎么办？
      首先肯定不能直接写this.ctx.set('Access-Control-Allow-Origin', 'http://*.localhost.com')
      这样只会对http://*.localhost.com 这个域名才跨域生效
      见上述正则
      */
      this.ctx.set('Access-Control-Allow-Origin', originReg(req.header.origin))

      /* comment：如何把Cookie发到服务器？
      一方面要服务器同意，指定Access-Control-Allow-Credentials:true
      另一方面，开发者必须在AJAX请求中打开withCredentials属性。xhr.withCredentials = true;
      */
     this.ctx.set('Access-Control-Allow-Credentials','true')
      this.ctx.body = { msg: 'hello world' }
    }
  }
  return CrosController
}
```

## iframe hash or name

这两种方式都差不多，将需要跨域的域通过iframe的方式加载，通过name或hash值的设置来达到跨域的目的。不太常用，仅做了解不做详细说明，具体可看例子中的`3.js`和`4.js`这两个文件

## postMessage

postMessage是html5引入的API,允许来自不同源的脚本采用异步方式进行有效的通信,可以实现跨文本文档,多窗口,跨域消息传递,具体实现方式如下。

**父窗体创建跨域iframe并发送信息**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>跨域POST消息发送</title>
        <script type="text/JavaScript">    
            // sendPost 通过postMessage实现跨域通信将表单信息发送到 moweide.gitcafe.io上,
            // 并取得返回的数据    
            function sendPost() {        
                // 获取id为otherPage的iframe窗口对象        
                var iframeWin = document.getElementById("otherPage").contentWindow;        
                // 向该窗口发送消息        
                iframeWin.postMessage(document.getElementById("message").value, 
                    'http://moweide.gitcafe.io');    
            }    
            // 监听跨域请求的返回    
            window.addEventListener("message", function(event) {        
                console.log(event, event.data);    
            }, false);
        </script>
    </head>
    <body> 
        <textarea id="message"></textarea> 
        <input type="button" value="发送" onclick="sendPost()"> 
        <iframe
            src="http://moweide.gitcafe.io/other-domain.html" id="otherPage"
            style="display:none"></iframe>
    </body>
</html>
```

**子窗体接收信息并处理**

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>POST Handler</title>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/JavaScript">
            window.addEventListener("message", function( event ) {
                // 监听父窗口发送过来的数据向服务器发送post请求
                var data = event.data;
                $.ajax({
                    // 注意这里的url只是一个示例.实际练习的时候你需要自己想办法提供一个后台接口
                    type: 'POST', 
                    url: 'http://moweide.gitcafe.io/getData',
                    data: "info=" + data,
                    dataType: "json"
                }).done(function(res){        
                    //将请求成功返回的数据通过postMessage发送给父窗口        
                    window.parent.postMessage(res, "*");    
                }).fail(function(res){        
                    //将请求失败返回的数据通过postMessage发送给父窗口        
                    window.parent.postMessage(res, "*");    
                });
            }, false);
        </script>
    </head>

    <body></body>
</html>
```