---
layout: '[post]'
title: git操作中的merge和rebase
date: 2019-06-12 09:36:09
tags: git merge rebase
sumarry: 
---

使用git有几年了，平时最常用到的就是工具`source tree`和`smartgit`中的pull 、push、rebase、merge等操作，尤其是合并代码的时候,rebase和merge自然是都会用到的，但从来没有深究过这两种合并代码的方式到底有何差别，使用场景是什么，今天决定一探究竟并记录下来。

# 用途
首先，两者的诞生都是为了解决同样的问题：将一个分支的改变合并到另一个分支上。但两者的实现方式还是有很多差异。

具体差异借助一个开发中常用的场景来加以说明：当你在一个开发分支上开发一个新功能的时候，团队其他人在master上commit了若干个新的提交，于是分支的历史变成了如下图这样。由于master上的commit对你正在使用的开发分支feature是有意义的，为了将master上的commit合入你的开发feature分支上，你有两个选择：merge或者rebase
![提交历史](http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=http://ww1.sinaimg.cn/large/a64e5cc2gy1fhi8ke7gu5j20bg07zdfq.jpg)

# 选择merge
```vim
git checkout feature 
git merge master
```
合并后，feature分支的提交历史变成了如下图
![merge后feature分支的提交log](http://ww1.sinaimg.cn/large/a64e5cc2gy1fhi8kt3q6aj20da07wa9z.jpg)

从图中我们可以看到，最终两个分支的历史以分叉线的方式汇合到一起，且在汇合出是一个多出来的新的commit `Merge branch 'master' into feature`.
**由此我们可以得出使用merge操作的特征**
* merge是一个非破坏性的操作，原有的已经存在的提交（时间先后顺序、log线）等都得到了保留
* 产生了一个外来的代表合并的commit。如果master分支非常活跃，会对feature造成大量的历史污染，造成其他开发者难以看懂或理解你的项目的历史记录。


# 选择 rebase
```vim
git checkout feature 
git rebase master
```
合并后，feature分支的提交历史变成了如下图
![rebase后feature分支的提交log](http://ww1.sinaimg.cn/large/a64e5cc2gy1fhi8kzq9r3j20fq07vwee.jpg)

从上图我们可以看出，整个master分支移动到了feature分支上，且没有使用一个代表 merging 的 commit，整个项目提交历史很清晰。
**由此我们可以得出使用rebase操作的特征**
* 没有引入不必要的commit
* 整个提交历史是线性无分叉的，便于阅读及清晰操作整个历史记录。但清晰的commit的代价就是失去了可追溯性，因为从现有的提交历史中，已无法得知是在哪个时间点及提交点将上游的master分支合并进入feature分支的。
## 交互式rebase
rebase还有一个更高级的用法：交互式变基,除了完成最终的分支合并之外，交互式变基可以帮助我们在变基过程中，增加自己的操作（**合并提交、拆分提交、删除提交**），然后再变基。虽然平时使用得不多，但借助它也可以产生一些神奇的效果，在此也一并简单介绍下。

交互式rebase对应命令
```
git reabse -i
```

### 合并提交

### 拆分提交

### 删除提交
