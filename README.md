# wechat-game-flappy-bird
这个小 demo 是跟着慕课网的课程边学边做的，感觉这个讲师讲的挺好的，学到了很多关于封装和设计代码方面的东西，通过父类的继承来控制一些公共的资源和加载方法，还有就是用类的写法来实现单例模式等等。  
master分支可以在浏览器直接运行，in-wechat-mode 是适配了微信小程序，主要更改的部分就是把 canvas元素 替换成小程序的 canvas api，以及去掉代码里面用到 windoe 对象的部分，因为小程序里面没有 window 对象嘛~

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```
