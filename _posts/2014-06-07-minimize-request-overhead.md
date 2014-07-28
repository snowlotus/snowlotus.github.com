---
layout: post
title: "[译]最小化请求开销"
description: ""
category: 翻译
tags: []
---
{% include JB/setup %}

>原文地址：[Minimize request overhead](https://developers.google.com/speed/docs/best-practices/request)  
>译&nbsp; &nbsp;&nbsp; &nbsp;者：[snowlotus]({{ site.production_url }}) 


客户端每向服务端发起一个请求，为该域名及路径下设置的cookie也会一同发送出去。大部分用户的网络带宽都是不对称的：上传和下载的网络比例通常在1：4到1：20之间。这就意味着上传一个500字节的HTTP请求头需要耗费的时间等同于下载一个10kb的http响应数据。鉴于有些请求头是没有被压缩的，所以耗时可能还要更长。换言之，请求头中所携带的一些小数据对象（如10kb以下的图片）是决定了响应时间的关键因素。


在开启一个新的浏览器会话的时候，这个延迟会更大。为了避免网络拥堵的影响，TCP会使用“slow start”算法来创建新的连接。浏览器在发送新数据之前需要等待服务器返回对已经发送数据的响应，这样一来就限制了数据的发送量。如果需要发送的数据超过了一个连接一次能发送的最大量，那就会产生额外的RTT（注：RTT是值从发送端发送数据开始，到发送端收到来自接收端的确认，总共经历的时延）。


缩短请求时间的最好方法就是减少请求头的字节数。

<a href="#min">最小化请求大小</a>

<a href="#serve">使用cookie无关的域名来传输静态内容</a>

###<span id="min">最小化请求大小</span>

####概要

尽可能缩小cookie和请求头的大小，确保一个http请求可以通过一个TCP包传输完成。


####明细
理想情况下，一个http请求不应该超过一个packet包。一般认定一个packet的大小在1500字节左右，所以可以通过限制一个请求的大小在1500字节以下来减少请求开销。HTTP请求头包括以下几点：


Cookies:对于必须要求发送cookie的情况，保证cookie最小。同时为了将请求的大小控制在限制范围内，要保证域名下的cookie不超过1000字节。建议一般将cookie控制在400字节以下。

浏览器设置头：http请求头中的有些部分是由用户代理自动设置的，这个无法控制。

请求资源的URL（`GET`和`HOST`字段）。URL上参数过多会造成很大的数据请求量，试着去精简url。

Referrer URL.


####建议

#####使用服务器存储来节省cooke带来的负载
Store only a unique identifier in the cookie, and key the ID to data stored at the server end. You can use server-side cookies for both session and persistent cookies by specifying the expiry date/time on the cookie.

Remove unused or duplicated cookie fields.
#####移除无用或重复的cookie字段

The fields set by a cookie at the top-level path of a domain (i.e. /) are inherited by the resources served off all paths below that domain. Therefore, if you are serving different applications on different URL paths, and you have a field that applies globally to all applications on a domain — for example, a user's language preference — include that field in the cookie set at the top-level domain; don't duplicate the field in cookies set for subpaths. Conversely, if a field only applies to an application served from a subpath — for example, a UI setting — don't include that field in the top-level cookie and force the unused data to be passed needlessly for other applications.
