弹性布局 https://www.runoob.com/w3cnote/flex-grammar.html

https://www.zhangxinxu.com/wordpress/2010/12/css-box-flex属性，然后弹性盒子模型简介/?replytocom=292258

布局的传统解决方案是基于盒子模型 依赖 display属性 + position属性 + float属性 对特殊布局非常不方便 垂直居中就很难实现

2009年 W3C提出新方案 Flex布局 兼容 Chrome21+ Opera12.1+ Firefox22+ Safari6.1+ IE10+

一、Flex布局是什么 所有容器都可以用指定为Flex布局 .box{ display: flex; } 行内元素也可以 .box{ display: inline-flex; } Webkit内核浏览器需要加上 -webkit前缀 .box{ display: -webkit-flex; /* Safari */ display: flex; }

PS：设置Flex布局后 子元素的float clear vertical-align属性将失效

二、基本概念 采用Flex布局的元素成为Flex容器 所有子元素自动成为容器成员 成为Flex项目 即 flex item

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

三、容器属性

flex-direction flex-wrap flex-flow justify-content align-items align-content flex-direction属性

flex-direction属性决定主轴的方向（即项目的排列方向）。

.box { flex-direction: row | row-reverse | column | column-reverse; }

row（默认值）：主轴为水平方向，起点在左端。 row-reverse：主轴为水平方向，起点在右端。 column：主轴为垂直方向，起点在上沿。 column-reverse：主轴为垂直方向，起点在下沿。

flex-wrap属性 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

.box{ flex-wrap: nowrap | wrap | wrap-reverse; }

nowrap（默认）：不换行。

wrap：换行，第一行在上方。

wrap-reverse：换行，第一行在下方。

flex-flow flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

.box { flex-flow: <flex-direction> || <flex-wrap>; }

justify-content属性 .box { justify-content: flex-start | flex-end | center | space-between | space-around; }

flex-start（默认值）：左对齐 flex-end：右对齐 center： 居中 space-between：两端对齐，项目之间的间隔都相等。 space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

align-items属性 .box { align-items: flex-start | flex-end | center | baseline | stretch; }

flex-start：交叉轴的起点对齐。 flex-end：交叉轴的终点对齐。 center：交叉轴的中点对齐。 baseline: 项目的第一行文字的基线对齐。 stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。 align-content属性 .box { align-content: flex-start | flex-end | center | space-between | space-around | stretch; }

flex-start：与交叉轴的起点对齐。 flex-end：与交叉轴的终点对齐。 center：与交叉轴的中点对齐。 space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。 space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。 stretch（默认值）：轴线占满整个交叉轴。

四、项目属性

order flex-grow flex-shrink flex-basis flex align-self

order属性 order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。 .item { order: <integer>; }

flex-grow属性 flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 .item { flex-grow: <number>; /* default 0 */ }

flex-shrink属性 flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 .item { flex-shrink: <number>; /* default 1 */ } 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

flex-basis属性 flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。 .item { flex-basis: <length> | auto; /* default auto */ }

flex属性 flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 .item { flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] } 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

align-self属性 align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 .item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }
