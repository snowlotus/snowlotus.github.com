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

Every time a client sends an HTTP request, it has to send all associated cookies that have been set for that domain and path along with it. Most users have asymmetric Internet connections: upload-to-download bandwidth ratios are commonly in the range of 1:4 to 1:20. This means that a 500-byte HTTP header request could take the equivalent time to upload as 10 KB of HTTP response data takes to download. The factor is actually even higher because HTTP request headers are sent uncompressed. In other words, for requests for small objects (say, less than 10 KB, the typical size of a compressed image), the data sent in a request header can account for the majority of the response time.


The latency can be higher at the beginning of a new browser session. To minimize net congestion, TCP employs the "slow start" algorithm for new connections. This limits the amount of data that can be sent by the initiator of the connection before the data must be acknowledged by the recipient. If the initiator sends more than that amount of data over a new connection, an additional RTT is incurred. 

The best way to cut down on client request time is to reduce the number of bytes uploaded as request header data.