---
title: 前端页面性能监控小结
date: 2019-04-10 14:59:36
tags: [javascript,性能,监控]
summary: 性能监测是前端页面性能的重要一环，通过监测可以确定页面性能瓶颈，从而有针对性的展开具体的优化工作

---

性能监测是前端页面性能的重要一环，通过监测可以确定页面性能瓶颈，从而有针对性的展开具体的优化工作。
在近期调研好伙伴性能优化的过程中，调研了下业界较推崇的两种方式，**可编程方案、可视化方案**。其中可视化方案又有两款比较好用的工具Performance和LightHouse，一起看看如何使用吧。

### 可编程方案-W3C 性能 API
window.Performance是W3C性能小组引入的API，通过相关属性我们可以获取到用户访问页面的每个阶段的精确时间，从而对性能进行分析。
*目前好伙伴项目所接入的听云browser版，本质上也是基于这些api，将各项数据采集上报到听云服务器，并转化成可视化的页面展示方式用于分析页面各项指标*

以下是performance对象的完整结构
![performance](https://upload-images.jianshu.io/upload_images/8878545-e57eba8a5567836c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其中timing下的时间戳和页面加载时间有一个对应关系，如下图所示
![timing](https://upload-images.jianshu.io/upload_images/8878545-c1395036da4fbc0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
通过求两个时间点之间的差值，可以得出页面各个过程所花费的时间
```javascript
const timing = window.performance.timing

//DNS查询耗时
const domainTime = timing.domainLookupEnd - timing.domainLookupStart

//TCP连接耗时
const tcpTime = timing.connectEnd - timing.connectStart

//内容加载耗时(注意是否存在cache)
const loadTime = timing.responseEnd - timing.responseStart

//白屏时间
const firstPaintTime = timing.domLoading - timing.fetchStart

//可交互时间
const ttiTime = timing.domInteractive - timing.fetchStart

// html加载完成时间;此时可以操作dom
const domReadyTime = timing.domContentLoadedEventEnd - timing.fetchStart

// 页面完全加载完成时间
const loadCompleteTime = timing.loadEventStart - timing.fetchStart
```

### 可视化工具1——Performance
Performance是chrome浏览器开发者工具的一个面板，用于实时的记录和分析页面在运行时的各项指标。

###### 使用方式
F12打开开发者工具，选中 Performance 面板：
![image.png](https://upload-images.jianshu.io/upload_images/8878545-f9c996290c521a50.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/720)
*选中实心圆按钮，Performance 会开始帮我们记录我们后续的交互操作；
选中刷新箭头按钮，Performance 会将页面重新加载，计算加载过程中的性能表现。*

![无痕模式](https://upload-images.jianshu.io/upload_images/8878545-e33b750c66028f83.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/720)

*为了避免其它 Chrome 插件对页面的性能影响，建议最好在无痕模式下打开页面*

###### 功能介绍及分析
以下是好伙伴页面加载过程中的表现，红框部分依次为概述面板、详情面板及绿框的FPS、CPU和NET
![好伙伴performance](https://upload-images.jianshu.io/upload_images/8878545-3c6a984e7cffd6cb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1080)

**概述面板：**页面性能的汇总

**FPS：** 和动画性能密切相关的指标，表示每一秒的帧数。绿色柱状越高表示帧率越高，体验就越流畅。若出现红色块，则代表长时间帧，很可能会出现卡顿。（图中以绿色为主，说明动画性能并不糟糕。）

**CPU：** 表示CPU的忙闲情况。（一般结合Summary 饼图一起看）

**NET：** 展示各请求的耗时与前后顺序。

**详情面板-Main：** 又称火焰图。在图中我们可以看到3条垂直的线，蓝线代表 DOMContentLoaded 时间， 绿线代表首次绘制（及白屏）的时间，红线代表 load 时间。
**详情面板-Summary：** 结合CPU可得出，scripting过程最耗时（即脚本执行）

### 可视化工具2——LightHouse
Lighthouse 是一个开源的自动化工具，和Performance不同的是，它可以直接生成一个报告，报告中会对各项指标和优化建议做一个具体的呈现。

**具体操作：**
方式1：在 Chrome 应用商店下载一个 LightHouse插件，打开要测试的那个页面，点击icon和“Generate report”按钮，即可生成性能报告了。
方式2：chrome开发者工具下的audits面板可直接run audits （需要浏览器的版本大于60）
下图是生成的报告，同样以好伙伴首页为例
![LightHouse](https://upload-images.jianshu.io/upload_images/8878545-94c0585f7002b614.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
*上图从上到下依次为：*
1.当前访问地址、访问时间、模拟设备、网络情况
2.页面性能、PWA（渐进式 Web 应用）、可访问性、最佳实践、SEO 五项指标的评分情况
3.每一项指标的细化评估
4.改进建议以及预计的节省时间（**此项可作为重点依据进行优化** ）

### 推荐阅读
[使用 Lighthouse 审查网络应用](https://developers.google.com/web/tools/lighthouse/?hl=zh-cn)
[Performance工具](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
[Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Window/performance)




