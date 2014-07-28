---
layout: post
title: "[译]深入理解css Timing 函数"
description: "Understanding CSS Timing Functions"
category: 翻译
tags: []
---
{% include JB/setup %}

>原文地址：[Understanding CSS Timing Functions](http://www.smashingmagazine.com/2014/04/15/understanding-css-timing-functions/)  
>译&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;者：[snowlotus]({{ site.production_url }}) 

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

![This Bézier curve translates to the ease keyword.]({{ IMAGE_PATH }}/01-bezier-curve-ease.jpg)

*`Ease`对应的贝塞尔曲线*

你应该和我第一次看到这个图形时有一样的疑惑，这货到底是怎么通过4个点就形成了这条线的呢！我一下子也没办法三言两语就跟你说清楚，不过好在有个来自[维基百科](http://en.wikipedia.org/wiki/File:Bezier_3_big.gif)的动态图很清晰的解释出了这一原理。

![A cubic Bézier curve being drawn.]({{ IMAGE_PATH }}/02-bezier-curve-drawing.gif)

*贝塞尔曲线的绘制过程（图片来源：[维基百科](http://en.wikipedia.org/wiki/File:Bezier_3_big.gif)）*

由于此次的曲线是由四个点组成的，我们就把它当作是三次方的贝塞尔曲线，于此相对应的是二次方（三个点组成）和四次方（5个点组成）的曲线。

###Cubic-bezier()函数的讲解

到这一步事情就变得越来越有意思了，你可以通过`cubic-bezier()`这一可以直接赋值给timing-function作为属性值的函数而深入了解贝塞尔曲线。你们的开心就是我最大的动力……

通过 `cubic-bezier()`函数，你可以**画出各式各样你喜欢的贝塞尔曲线**，为动画自定义各种加速模式。所以赶快一起来看看它的工作原理以及是如何使得你创建出个性化的曲线的吧。

首先我们已经知道这个曲线是由点0、1、2、3这四个点组成的。其次还有一点要注意的是第一个点和最后一个点（点0和点3）是已经在曲线上了的，点0的坐标是`0，0`（左下角），点3的坐标是`1，1`（右上角）。

剩下的点1和点2就是辅助你来绘制这条曲线的，也就是需要在`cubic-bezier()`函数中被定义的。这个函数需要传递2个参数，分别为点1和点2对应的xy坐标值。

```css
transition-timing-function: cubic-bezier(x, y, x, y);
```

熟悉了这个函数的书写语法、绘制原理以及对一个动画的影响之后，我们接下来就一起来看看相对与`cubic-bezier()`书的其它几个timing-function吧，看看它们是如何影响着一个动画的。


###EASE-IN-OUT

先以`ease-in-out`开始吧，因为它背后的逻辑和原理应该是所有几个相对最浅显易懂的。

```css
/* The cubic-bezier() equivalent of the ease-in-out keyword */
transition-timing-function: cubic-bezier(.42, 0, .58, 1);

```

![A perfectly symmetrical Bézier curve, which means the animation will ease in to full speed and then ease out at exactly the same rate.]({{ IMAGE_PATH }}/03-bezier-curve-ease-in-out.jpg)

*一个完美对称的贝塞尔曲线，也说明了这个动画是以一个相同以及平滑的速度渐入和淡出的。*

你可以看到点1位于x轴0.42和y轴0处，点2位于x轴0.58和y轴1处。这两个点是是相对于这条曲线对称的，说明这个动画的开始和结束的速度是等同的，ease-in-out这个名称就是由此得来的。

你可以看到点1位于x轴0.42和y轴0处，点2位于x轴0.58和y轴1处。这两个点是是相对于这条曲线对称的，说明这个动画的开始和结束的速度是等同的，`ease-in-out`这个名称就是由此得来的。

<p data-height="268" data-theme-id="6107" data-slug-hash="bHzqm" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/bHzqm/'>bHzqm</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

###EASE

`Ease`是css属性timing-function的默认值，它和前面讲的ease-in-out是很接近的，尽管它渐入时的速度比淡出时的速度快。

```css
/* The ease keyword and its cubic-bezier() equivalent */
transition-timing-function: cubic-bezier(.25, .1, .25, 1);

```


![The curve for the keyword ease, eases in at a faster pace before easing out much more gradually.]({{ IMAGE_PATH }}/04-bezier-curve-ease.jpg)

*`Ease`曲线的开始速度快，结束速度相对平缓。*

曲线的起始坡度陡一些，而结束幅度更冗长一些，这也很直观的说明了这一值对应到动画上的影响。别忘了回过头看看之前的demo，将ease的运行效果和其它几个值进行一下对比。

###EASE-IN AND EASE-OUT

`Ease-in`和`ease-out`顾名思义是相对立的。前者以快的速度开始慢的速度结束，后者则是以缓慢的速度开始快的速度结束。而我们先前所看到的`Ease-in-out`从逻辑上来讲应该就是ease-in和ease-out这两者的完美结合。

```css
/* The ease-in keyword and its cubic-bezier() equivalent */
transition-timing-function: cubic-bezier(.42, 0, 1, 1);

/* The ease-out keyword and its cubic-bezier() equivalent */
transition-timing-function: cubic-bezier(0, 0, .58, 1);

```

![Bézier Curve for the ease-in keyword, left and the ease-out keyword, right.]({{ IMAGE_PATH }}/05-bezier-curve-ease-in-ease-out-500.jpg)

*Ease-in（左）和ease-out（右）对应的贝塞尔曲线（[点此看大图](http://www.smashingmagazine.com/wp-content/uploads/2014/04/05-bezier-curve-ease-in-ease-out.jpg)）*

###LINEAR

最后讲到的`linear`和其它几个就没有什么特定的对应关系了。如名称所示， timing-function的值linear表示在整个动画过程中速度都是一样的，这就会使得这条曲线是一个直线。线上不需要变量点来表示整个加速过程。

```css
/* The linear keyword and its cubic-bezier() equivalent */
transition-timing-function: cubic-bezier(0, 0, 1, 1);

```

![The linear]({{ IMAGE_PATH }}/06-bezier-curve-linear.jpg)


*`linear` timiing-function对应的动画全程都是匀速的。*

继续回到之前的那个demo，你会发现就算所有的参数都被设为同样的值，但就是有些动画会比其它的执行得慢。为什么会这样呢？将`ease-in-out`作为例子说明，我们知道它的开始和结束速度都较慢，这就意味着如果想要赶上其它几个那就要在中间过程中加快速度。很明显，linear动画应该是所有几个中最慢最冗长的。

你肯定也会觉得前面讲得那些就像linear一样很冗长不知何时才能看到干货，好吧，接下来就真正要进入主题看看如何通过`cubic-bezier`函数来自定义timing函数了。

###通过cubic-bezier（）函数来创建自定义加速模式

通过cubic-bezier（）函数来创建自定义加速模式

你已经知道通过设置`cubic-bezier()`函数中的点1和点2的值来达到不同效果的动画。然而想想如果让你去找一个在图形上看不到的点，你肯定会觉得非常的无聊。

不过好在有Lea Verou这样致力于推动CSS发展的人存在！Lea发明了所谓的三次方贝塞尔曲线，它其实是一个设置不同的自定义的值然后预览并将其与其它不同的曲线在操场上的运行效果做比较的一个工具。这就意味着可以将你从设置cubic-bezier（）函数精确到小数点的值的无聊工作中解救出来，你需要做的只是访问[Cubic Bezier](http://cubic-bezier.com/#.17,.67,.83,.67) 网站，随意设定几个值直到它达到你预期的效果就行了,很方便。

![Lea Verou's superbly useful cubic-bezier.com]({{ IMAGE_PATH }}/07-cubic-bezier-site-500.jpg)

*Lea Verou超级雄伟的工具[Cubic Bezier](http://cubic-bezier.com/#.17,.67,.83,.67)([点此看大图](http://www.smashingmagazine.com/wp-content/uploads/2014/04/07-cubic-bezier-site.jpg))*

用ease、ease-in、ease-out等这几个关键字来设置timing函数很便利，不过它们之间的差异还是很细微的。只有当你开始自己动手创建几个自定义的曲线时你才能真正的理解不同的值对应的不同动画效果。

看看下面这个例子，他们的间隔值都是一样的，比较一下他们之间的细微差别。

<p data-height="268" data-theme-id="6107" data-slug-hash="baFhH" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/baFhH/'>baFhH</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


一起看看这些例子中的第一行，看看它是如何产生如此不一样的影响的。

```css
/* cubic-bezier() values for first example from preceding demo page */
transition-timing-function: cubic-bezier(.1, .9, .9, .1);

```

![Example for a custom Bézier curve.]({{ IMAGE_PATH }}/08-custom-bezier-curve.jpg)

*自定义贝塞尔曲线示例*

这个timing函数和其它几个保留关键字的效果最大的区别就是一开始速度急速增长，中间平缓。而那几个就是截然相反的，开始和结束的时候相对平缓而不是在中间过程平缓。

掌握了如何自定义贝塞尔曲线，你肯定对`cubic-bezier()` 函数的使用胸有成竹了吧？不过狐狸是不会那么轻易就露出它的尾巴的！

###让贝塞尔曲线更富有创造性

没错，贝塞尔曲线可以做到更多有趣的事情！谁会想得到呢？它的值范围可以被设定得更宽广，时间轴（x轴）的范围为0到1，而速度轴（y轴）可以被扩展并超过0到1的范围。

速度轴如你所想的以0作为起点，以1作为终点。曲线随着变量点一路向北直到达到整个动画的重点。不过当把点1和点2的值设定在超过0-1的范围时，就会使得动画起到一个完全逆转的效果。和以前一样，上图有真相：

![Custom Bézier curve using value outside the typical 0-1 range.]({{ IMAGE_PATH }}/09-custom-bezier-curve-outside-range.jpg)

*超过0-1范围的自定义贝塞尔曲线*

如你所见，点2的y轴为-0.5超过了0-1的范围，这个拐点使得曲线急剧向下。看看下面这个demo，你就知道在动画的中间过程中有个回弹的效果。

<p data-height="268" data-theme-id="6107" data-slug-hash="kILDb" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/kILDb/'>kILDb</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


同样的，你也可以反过来将点1的y轴值设为负值，在一开始的时候让动画回弹但最终还是成功的到达了设定的终点。这和跑步的场景很像，先回退几步开始跑步，强大的动力使得你不小心跑过了终点，继而又回退几步确保跑到了正确的位置。看看下面这个例子的运行效果你就会明白我所说的。

<p data-height="268" data-theme-id="6107" data-slug-hash="xcCqj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/xcCqj/'>xcCqj</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

![Custom Bézier curve using value outside the typical 0-1 range.]({{ IMAGE_PATH }}/10-custom-bezier-curve-outside-range.jpg)

*被设定了负值的自定义贝塞尔曲线*

对于当`cubic-bezier()` 变量值超过0-1范围时是如何影响一个动画的执行过程这一点我想你应该很明白了。虽然我们这一整天都在看各式移动的盒子，不过最后还是以一个很形象的例子来作为这个模块的结尾吧。

<p data-height="268" data-theme-id="6107" data-slug-hash="vbqBh" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/vbqBh/'>vbqBh</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


没错，是一个漂浮着的气球的动画！……什么？你以前从没想过这能通过css来实现？

点击按钮，动画“加氢气”就使得气球朝着天花板“向上”漂浮，到顶了又轻微的回弹一下继而又到了顶部，和生活中场景是完全吻合的。将`cubic-bezier（）`的值设定在超过0-1的范围可以使得我们达到和生活中相似的效果。见如下css代码段和对应的贝塞尔曲线图。

```css
/* The cubic-bezier() values for the bouncing balloon */
transition-timing-function: cubic-bezier(.65, 1.95, .03, .32);

```


![Custom Bézier curve to emulate a bouncing balloon.]({{ IMAGE_PATH }}/11-bezier-curve-bouncing-balloon.jpg)

*模拟弹跳着的气球的自定义贝塞尔曲线*

这个例子就很好的说明了曲线是如何在影响着一个动画的运行效果的。首先你看到这个曲线从一开始一直都是保持直线在运行一直到终点，表示气球一直匀速向上。然后和气球的运行路径一样，曲线到了终点之后又往相反的方向弹了一定的距离然后又慢慢的回到了顶部。很直观是不是！
一旦你掌握了如何操控曲线去创造出各式富有艺术气息的动画，那你就真正掌握了。

###Timing函数和基于Keyframe的动画

在开始新的话题之前(是的，要讲的东西还很多)还有最后一点关于timing函数对于css的帧动画有何影响需要说明。它的概念类似与我们之前的那个变换的例子，不过有一个很重要的差异需要注意的是：为帧动画设置timing-function时，动画就是以帧为单位执行的，而不是作为一个整体执行的。

说得更清楚一点，好比你有一个四帧的动画，让一个盒子沿着矩形的四个角弹跳，按之前气球漂浮的例子实现此处的“弹跳”效果，然后这四个中的每一个动作都执行了弹跳，而不是作为一整个动画执行弹跳。一起看看代码和运行效果吧。

<p data-height="268" data-theme-id="6107" data-slug-hash="rscGb" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/rscGb/'>rscGb</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

```css
@keyframes square {
   25% {
      top:200px;
      left:0;
   }

   50% {
      top:200px;
      left:400px;
   }

   75% {
      top:0;
      left:400px;
   }     
}

div {
   animation: square 8s infinite cubic-bezier(.65, 1.95, .03, .32);
   top: 0;
   left: 0;
   /* Other styles */
}
```


注意即便没有定义100%情况下的帧，元素也是能回到预期的原始点，所以就没必要声明了。这个demo很清晰的说明了每一针的动画都是沿着容器的边缘在弹跳。

如果你希望某一帧动画的执行方式和其它几个不一样，可以如下所示直接在特定的帧下显示声明timing-function。

###时间函数steps()的介绍

是不是觉得timing函数已经学得差不多了？哈哈，再想想吧朋友们！我就说过css的timing函数还有很多要学的嘛！

这一章节我们就单刀直入`steps（）`函数。


`steps()`函数是一个很有实用的小工具。它可以将一个动画拆分成几步来执行而不是我们常使用的作为一个整体。比如你希望一个动画在4秒内分四步而不是一次性的向右共移动400像素，也就是每秒向右移动100像素，那你就可以通过steps（）达到这一效果。一起看看这个例子需要使用到的语法，使用`cubic-bezier()`函数来达到这一效果得多么的复杂，而用steps就很简单，真是忽如一面春风来啊！

<p data-height="268" data-theme-id="6107" data-slug-hash="Gwbry" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/Gwbry/'>Gwbry</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

```css
div {
   transition: 4s steps(4);
}

div:target {
   left: 400px;
}

```

如你所见，将一个动画拆分成几步来执行就是这么的简单-不过要记住步数的值必需为正整数，不能是负数或者小数。

同时，函数的第二个可选参数也会对执行效果有一些影响，有start和end这两个值，后者是默认值。

```css
transition-timing-function: steps(4, start);
transition-timing-function: steps(4, end);

```


Start值使得动画在一开始就被拆分成了几步，而end则是以动画的结尾来拆分的。以之前那个移动着的箱子为例，下图就很好的说明了这两个不同的值引发的差别。

![The difference between the start and end value in the steps() function.]({{ IMAGE_PATH }}/12-steps-start-end.jpg)

*`steps（）`函数中start和end值对应的差异。*

当为`start`时，动画在一开始就被触发，而当为`end`时，从结束时的第一步开始（这个例子就会延迟一秒钟开始触发动画）。

Steps函数也提供了`step-start` 和 `step-end`两个值可以将两个参数结合起来的快捷方式。`step-start`就相当于`steps(1, start)`，`step-end`就相当于`steps(1, end)`。

###为stepping函数创建用例

好吧，也许你并没有太多场景需要用到steps，不过它还有其它很多很炫酷的用法。假如你有一个卡通动画的雪碧图，那你完全可以将本技术和一些css属性结合起来完成完成一个动画。一起看看下面的代码和运行效果。

<p data-height="268" data-theme-id="6107" data-slug-hash="tuvfp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/tuvfp/'>tuvfp</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

```css
div {
   width: 125px;
   height: 150px;
   background: url(images/sprite.jpg) left;
   transition: 2s steps(16);
   /* The number of steps = the number of frames in the cartoon */
}

div:target {
   background-position: -2000px 0;
}

```


首先需要规整的盒子（125像素宽）和一张包含16帧动画图片的背景图（2000像素宽）。背景图在初始状态下是和盒子的左边缘齐平的，所以我们现在需要一直移动背景图片让这16帧依次经过矩形窗口。如果是用常规的动画方式来实现的会背景图作为一个整体从盒子的左边移入移出，而如果是使用steps()函数的的话，可以将背景图分成16步来做移动，这样就能保证每一帧都能如预期的那样从矩形窗口前经过。就这样用一个css transition就实现了一个基本的卡通动画了！

![This GIF demonstrates the concept of the background image passing through the window in steps]({{ IMAGE_PATH }}/13-frames-concept-500.gif)

*这个GIF动画就阐述了背景图一步步从窗口”的出入的过程。（[点击看大图](http://www.smashingmagazine.com/wp-content/uploads/2014/04/13-frames-concept.gif)）*

我曾经看过的另外一个很富有创造性的使用steps（）函数的例子是来自于Lea Verou（除了她还有谁呢？）这是一个非常典型的文字输入的动画，下面我就为大家进行讲解。

首先随便找些文字，不过需要对文字的字符个数要很清楚因为等下的css中需要用到它。然后还要求文字的字体被设置成monospaced，这样每个字符都是等宽的。

```css
<p>smashingmag</p>

.text {
   width: 6.6em;
   width: 11ch; /* Number of characters */
   border-right: .1em solid;
   font: 5em monospace;
}

```

这里我们使用的文字有11个字符。通过css计量单位ch可以明确的知道这一段文字具体宽度，不过还是需要再定义一下一个具体的宽度，因为有些浏览器不支持这个单位。在段落前面再加上一个闪动的光标以表示可以输入文字。现在一切准备都就绪了，接下来就开始实现动画了，其实它真的非常简单。

这里需要两个动画，一个用于光标一个用于文字输入。模拟光标就是让一个黑色的边框不停的闪动，很简单。

```css
@keyframes cursor {
   50% {
     border-color: transparent;
   }
}

.text {
   /* existing styles */
   animation: cursor 1s step-end infinite;
}

```

和预期一样，黑色光标在黑色和透明之间不同的循环。这就是`steps()`最关键起作用的地方，如果不使用它，那光标就只能是淡入和淡出而不是在闪动。

最后输入动画也非常简单。将文字按11（字符的个数）布从全宽一直到0.

```css
@keyframes typing {
   from {
      width: 0;
   }
}

.text {
   /* existing styles */
   animation: typing 8s steps(11), 
              cursor 1s step-end infinite;
}

```

在一帧动画下，文字一点点的将8个字符显示出来，同时这个黑色的`border-right`（即光标）也不停的在跟着闪动。这项技术非常的简单但也非常的实用。

就如同Lea Verou想出的这个`steps()`的有趣的用法一样，也很容易的可以让字符一个个的消失。只需要将之前动画中的from改为to就好了，然后用`animation-fill-mode`的参数值设为`forwards` 就好了。这就使得字符一次性的被删除了（即动画完成了）。查看下面的demo的实际运行效果即可：

<p data-height="268" data-theme-id="6107" data-slug-hash="LmohC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/stephengreig/pen/LmohC/'>LmohC</a> by Stephen Greig (<a href='http://codepen.io/stephengreig'>@stephengreig</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

这个例子的限制在于一定需要知道字符的个数才好决定将它拆分的个数，如果字符数发生改变了，那也需要一并修改代码。不过`steps（）`函数还是展示了它的妙用之处。

###浏览器支持情况

我们已经声明过，在不支持css timing 即css 过渡和css动画（帧动画）的浏览器下无法使用该功能。不过好在现在浏览器兼容的情况已经越来越强了。

####TRANSITIONS的支持情况


**Browser**       | **Prefixed support**  |    **Unprefixed support**
------------------|-----------------------|-----------------
Internet Explorer |   N/A                 |      10+
Firefox           |   4+ (`-moz-`)        |      16+
Chrome            |   4+ (`-webkit-`)     |      26+
Safari            |   3.1+ (`-webkit-`)   |      6.1+
Opera             |   10.5+ (`-o-`prefix) |      12.1+


虽然现在的一些浏览器已经支持去掉变换的css（这一点很棒），不过出于兼容旧版本的考虑还是尽量加上类似与`-webkit-`的前缀比较好。同时出于渐进式增强的考虑，也要一并加上`-moz-`和`-o-`前缀。

####ANIMATION的支持情况

**Browser**       | **Prefixed support**  |    **Unprefixed support**
------------------|-----------------------------|-----------------
Internet Explorer |   N/A                 |      10+
Firefox           |   5+ (`-moz-`)        |      16+
Chrome            |   4+ (`-webkit-`)     |      Not supported
Safari            |   4+ (`-webkit-`)   |      Not supported
Opera             |   12 (`-o-`prefix),15+ (`-webkit`-prefix) |     12.1 only (not supported since switch to WebKit)

帧动画同理，在不包含前缀的代码前也加上`-webkit-`前缀。很明显，浏览器对于css动画的支持情况还是较好的，不过相对timing-function来说还是略差了点。详见如下表格。

####TIMING FUNCTIONS的支持情况

**Browser**   | **Basic support** | **cubic-bezier() outside of 0-1 range**  |**steps()**
------------------|-----------------------------|-----------------|-------------
Internet Explorer |   10+                 |      10+     |  10+
Firefox           |   4+       |      4+   |   4+
Chrome            |   4+     |      16+   |     8+
Safari            |   3.1+   |      6+     |    5.1+
Opera             |   10.5+  |     12.1+   |    12.1+

###总结

到目前为止对于css的timing-function我们学到了哪些呢？一起来回顾下。

*  它定义了一个动画执行过程中的加减速状况
*  除了预留的几个关键字（ease，ease-in 等等），它能做的事情更多
*  通过将` cubic-bezier()`的值设定在超过0-1的范围达到回弹的效果
*  可以将一个动画拆分成多步来执行
*  浏览器的兼容情况基本良好并持续在增强中


虽然这些技术的兼容性已经比较全面了，不过如果不涉及到渐进式增强的话也不能把它当作css3技术的一部分。先从基础一步步开始，也就是说先保证程序能在任何设备和浏览器上运行起来，再来针对不同浏览器对这些功能做些hack处理。

接下来就疯狂而又开心的去尽情使用它吧！

###其它资源

* ["Cubic Bézier"](http://cubic-bezier.com/#.17,.67,.83,.67)一个用于生成和对比贝塞尔曲线的工具
* ["Timing Functions"](https://developer.mozilla.org/en/docs/Web/CSS/timing-function), Mozilla Developer Network 关于贝塞尔曲线技术更详尽的介绍
* [“Bézier Curves”](http://en.wikipedia.org/wiki/B%C3%A9zier_curve), Wikipedia更多关于贝塞尔曲线的信息
