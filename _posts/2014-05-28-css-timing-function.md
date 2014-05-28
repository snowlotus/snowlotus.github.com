---
layout: post
title: "[译]深入理解css Timing 函数"
description: "Understanding CSS Timing Functions"
category: 翻译
tags: []
---
{% include JB/setup %}

>原文地址：[Understanding CSS Timing Functions](http://www.smashingmagazine.com/2014/04/15/understanding-css-timing-functions/)  
>译者：[snowlotus]({{ site.production_url }}) 

#### 各位，屏住呼吸做好准备，我们要开启一个令人激动万分的旅程去深入css timing 函数的世界一窥究竟！

好吧，也许这一相关主题也没有那么让你热血沸腾，不过言归正传，timing函数的确是**css动画中的一块被隐藏的瑰宝**，你肯定想不到原来它还有如此多的使用方法。

首先，我们一起来设定并熟悉一下timing函数的相关使用场景。如上文所说，css动画中会用到它，包括css过渡和基于关键帧的动画。那么timing函数具体到底能做些什么呢？

### 相关解释

光从字面意思上看会觉得timing和css动画属性并没有多大关联。不过它的主旨是来控制一个动画的不同速度，所以可以通过设置不同的值来控制动画速度的快慢。

虽然它不能左右动画的实际运行时间，但它对于用户对动画运行快慢的感知有着深远的意义。如果还不是很理解的话，可以接着听我仔细讲解timing-function这一属性，比起上面的解释我的讲解会有趣得多的。

**注:**并没有”timing-function”这一属性存在。这里指的是`transition-timing-function` 和 `animation-timing-function`。

在继续下文之前，我们还是先来熟悉一下在css中定义一个动画的语法吧。以css简单的变换效果为例，将变换对应的每一个属性都包括进来：

```css
div {
   transition-property: background;
   transition-duration: 1s;
   transition-delay: .5s;
   transition-timing-function: linear;
}

/* This could, of course, be shortened to: */
div {
   transition: background 1s .5s linear;
}

```


transition 的简写方法相当的宽松，只要保证delay参数在duration值的前面声明这一顺序即可（不要求紧随其后）。此外，除了`transition-duration`一定要声明外，其它几个参数都可以缺省，也就是说你可以像下面这段代码段这样的方式来简洁定义你的变换效果：

```css
div {
   transition: 1s;
}
/* This is the same as saying: */
div {
   transition: all 1s 0s ease;
}

```


不过这样就有点无趣了。虽然这些默认值对于一些标准的hover及其它诸如此类的事件来说是足够了的，但如果你想要完成更强大的功能，仅仅靠微调这些动画值还是太弱了点！

不管怎样，你应该已经对timing函数所做的事情有了一定的了解。那就赶紧接着往下看看它的工作原理吧。

###工作原理

大部分人可能都没仔细看一下timing属性对应的5个值：`ease`（默认值）、`ease-in`、`ease-out`、`ease-in-out`和`linear`。这几个关键字其实就是贝塞尔曲线对应的缩写。

啥啥啥？

你可能对贝塞尔曲线这一术语还不是很熟悉，不过我敢打赌你肯定已经一睹它的真容了，如果你曾用过图形编辑软件，你很可能已经神不知鬼不觉的创建过一条贝塞尔曲线了。没错，当你使用画笔或者路径工具画出一条漂亮又平滑的曲线时，这条曲线就是贝塞尔曲线。不管你见过也好画过也罢，总之贝塞尔曲线正是这一章要讲的重点，**它也就是timing函数背后的魔力所在**，它对应的图形正好就描述出了这一整个的加速过程。

![This Bézier curve translates to the ease keyword.](http://www.smashingmagazine.com/wp-content/uploads/2014/04/01-bezier-curve-ease.jpg)