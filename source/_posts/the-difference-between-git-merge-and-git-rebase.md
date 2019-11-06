---
layout: '[post]'
title: git操作中的merge和rebase
date: 2019-06-12 09:36:09
tags: git merge rebase
sumarry: 
---

git操作经常使用，如拉取、推送、合并代码等操作都是日常开发中必不可少的，尤其是合并代码的时候,`rebase`和`merge`自然是都会用到的，但从来没有深究过这两种合并代码的方式到底有何差别，使用场景是什么，今天决定一探究竟并记录下来。

# 用途
首先，两者的诞生都是为了解决同样的问题：将一个分支的改变合并到另一个分支上。但两者的实现方式还是有很多差异。

具体差异借助一个开发中常用的场景来加以说明：当你在一个开发分支上开发一个新功能的时候，团队其他人在`master`上`commit`了若干个新的提交，于是分支的历史变成了如下图这样。由于`master`上的`commit`对你正在使用的开发分支`feature`是有意义的，为了将`master`上的`commit`合入你的开发`feature`分支上，你有两个选择：`merge`或者`rebase`
![提交历史](http://ww1.sinaimg.cn/large/a64e5cc2gy1fhi8ke7gu5j20bg07zdfq.jpg)

# 选择merge
```vim
git checkout feature 
git merge master
```
合并后，feature分支的提交历史变成了如下图
![merge后feature分支的提交log](http://ww1.sinaimg.cn/large/a64e5cc2gy1fhi8kt3q6aj20da07wa9z.jpg)

从图中我们可以看到，最终两个分支的历史以分叉线的方式汇合到一起，且在汇合出是一个多出来的新的commit `Merge branch 'master' into feature`.
以上是没有出现冲突的情况，但出现冲突是非常常见的事情，同样以例子来说明
`featue`和`master`分支同时修改了`a.js`和`b.js`，`git merge master`出现冲突提示，解决后feature最终的提交历史变成如下图：
![feature git log](http://ww3.sinaimg.cn/large/006tNc79gy1g3zm8omwaxj31qo0gytet.jpg)

**由此我们可以得出使用merge操作的特征**
* merge是一个非破坏性的操作，原有的已经存在的提交（时间先后顺序、`log`线）等都得到了保留
* 产生了一个外来的代表合并的`commit`。如果`master`分支非常活跃，会对`feature`造成大量的历史污染，造成其他开发者难以看懂或理解你的项目的历史记录。
* 出现冲突时，只需解决一次冲突，解决完冲突后会产生一个`commit`，该commit即代表了合并也包含了最终冲突解决结果


# 选择 rebase
```vim
git checkout feature 
git rebase master
```
合并后，feature分支的提交历史变成了如下图
![rebase后feature分支的提交log](http://ww1.sinaimg.cn/large/a64e5cc2gy1fhi8kzq9r3j20fq07vwee.jpg)

从上图我们可以看出，整个master分支移动到了feature分支上，且没有使用一个代表 merging 的 commit，整个项目提交历史很清晰。

同样，当出现冲突时，rebase是如何解决冲突的？以同样的例子操作为例，操作如下图
![rebase conflict](http://ww2.sinaimg.cn/large/006tNc79gy1g3zmoxe9qaj30u00x5dn7.jpg)
从图中我们可以看出，执行`git rebase master`之后提示b.js有冲突，手动解决后，执行`git rebase --continue`,又提示一次让解决`b.js`的冲突，重复上述操作后，最终`feature`分支的提交历史如下图
![rebase conflict git log](http://ww4.sinaimg.cn/large/006tNc79gy1g3zmv0y4ukj319k0d2gp5.jpg)
从日志中可以看到，最终并没有产生一个解决冲突的提交
**由此我们可以得出使用rebase操作的特征**
* 没有引入不必要的commit
* 整个提交历史是线性无分叉的，便于阅读及清晰操作整个历史记录。但清晰的commit的代价就是失去了可追溯性，因为从现有的提交历史中，已无法得知是在哪个时间点及提交点将上游的master分支合并进入feature分支的。
* 出现冲突时，可能需要多次解决冲突（具体以feature分支的提交点中和master分支中有几次出现了冲突为准），解决完冲突后需要以命令`git rebase --continue `继续变基，且不会产生额外的commit。
## 交互式rebase
rebase还有一个更高级的用法：交互式变基,除了完成最终的分支合并之外，交互式变基可以帮助我们在变基过程中，增加自己的操作（**合并提交、拆分提交、删除提交**），然后再变基。虽然平时使用得不多，但借助它也可以产生一些神奇的效果，在此也一并简单介绍下。

交互式rebase对应命令
```vim
git reabse -i <branch>
```

### 合并提交
假设我要将下图中标红框的部分合并成一个提交
![交互式rebase combine](http://ww2.sinaimg.cn/large/006tNc79gy1g3zjagpsyoj312o080416.jpg)
首先要找到起始commit的前一个提交，即`e3017604`,执行`git rebase -i e3017604`,
此时会唤起编辑器，并带出`e3017604`前的所有提交，按时间顺序展示，首行是最早的提交，末行是最新的提交，如下图
 ![交互式rebase combine](http://ww1.sinaimg.cn/large/006tNc79gy1g3zjge0z4oj30sw0jkn00.jpg)
每行格式如下
```
(action) (partial-sha) (short commit message)
```
action 有很多种，默认是`pick`
![action](http://ww1.sinaimg.cn/large/006tNc79gy1g3zjmn15vxj31g60cedpn.jpg)
现在我们想把后三个提交合并到第一个中去，这里需要用到 `squash`，该 `action` 表示 使用该提交，但是把它与前一提交合并，所以只需把后四个的 `action` 改为 `squash` 即可。
![squash](http://ww2.sinaimg.cn/large/006tNc79gy1g3zjpepa0bj30mq0aodhd.jpg)

保存之后，会唤出编辑器提示创建一个新的提交信息,编辑好提交信息保存即可。
合并完之后历史记录变成如下图：

![combine](http://ww4.sinaimg.cn/large/006tNc79gy1g3zk422n50j316s082wg9.jpg)
### 拆分提交
如果我想把某个commit拆分成多个commit，可以使用`edit` action,该action告诉git说**我要使用该提交，但是先在这里停一下，等我把该提交拆分好后再继续执行下一步**

初始提交历史如下图：
![split commit](http://ww4.sinaimg.cn/large/006tNc79gy1g3zkgn7mzuj317g0a4ad8.jpg)
红框标出的`master commit 5`这个提交中包含了两个文件修改，新增`b.js`和修改`a.js`,我现在想把它拆分成两个提交，一个提交修改一个文件，那我可以这样做
执行`git rebase -i 9d257fe8`，然后修改 `27c84ed` 这个 commit 的 action 为 `edit`,如下图
![edit](http://ww1.sinaimg.cn/large/006tNc79gy1g3zkhuymc4j30se0b8wg2.jpg)
保存并退出后，提示执行`git commit --amend`对commit信息进行重新编辑
我们这里是要拆分 commit，所以要先对 commit 内容 reset，然后重新提交，按照如下图的操作一步步提交:
![commit history](http://ww1.sinaimg.cn/large/006tNc79gy1g3zkxjw8nzj30sy0iyae8.jpg)
执行完成后`git rebase --contine`，即达到了我们想要的效果，即把一个提交拆分成了两个提交，最终结果如下图
![result](http://ww4.sinaimg.cn/large/006tNc79gy1g3zklfx4roj316i09ujul.jpg)

### 删除提交

如果想删除某个提交，使用 ` git rebase -i *** ` 后直接在编辑器中使用drop action删除那一行 commit 即可,如果出现冲突，手动解决冲突后再执行` git rebase --continue `即可
下图为我执行操作删除'master commit 4'这个提交点及最终的执行结果
![](http://ww4.sinaimg.cn/large/006tNc79gy1g3zlgmqe3gj30y20ho0wi.jpg)
![](http://ww1.sinaimg.cn/large/006tNc79gy1g3zlhedw0bj317007mmzq.jpg)

# 总结
最后，对这两个命令做个总结。
![总结](http://ww4.sinaimg.cn/large/006tNc79gy1g3znx8capzj31h40dwk64.jpg)

这两个命令各有优劣，很难概括哪一个最好，那到底该如何选择呢？
个人理解：
*  团队成员对两种命令的熟悉程度
* 个人喜好：比如有人倾向清晰的阅读性，有人不喜欢多次处理冲突

一般建议：
* 开发过程中，合并上游分支（如master）要频繁（切忌两耳不闻窗外事，一心闷头写代码）时使用rebase，有冲突提前就fix掉
* 测试通过后合并到上游分支时，可以使用merge，保证所有提交点的可追溯性

**不管选择哪个，作为一个开发人员，两种合并方式的异同都建议大家掌握。**

# 参考资料
[Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
[merge和rebase的区别](https://www.cnblogs.com/xueweihan/p/5743327.html)
