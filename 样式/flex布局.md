##### 基本概念

- flex :即弹性布局，为盒模型提供最大的灵活性。
- 任何一个盒模型都可以指定为flex布局，属性设置为
` display:flex  / display:inline-flex / display: -webkit-flex `。
- 元素被定义为flex后，便成为一个容器，自元素即为容器成员，叫做项目。
- 容器默认有水平的主轴(main axis)和垂直的交叉轴(cross axis)。
- 项目默认沿主轴排列，单个项目占据的主轴空间叫main size，交叉空间为cross size。

##### 容器属性

容器共有六个属性
1.  flex-direction
    - 此属性决定主轴的方向（项目排列的方向）
    - 有四种值
        - row：默认值   主轴排列，起点在左边
        - row-reverse  主轴排列，但是起点在右边
        - column        垂直排列，起点在顶部
        - column-reverse 垂直排列，起点在底部
2. flex-wrap 
    - 只要放的下，项目一般会在一条轴线上，此属性定义放不下的时候怎么换行
    - 有三种值
        - nowrap ：默认值，不换行     
        - wrap：换行，按flex-direction 定义的排下一排  
        - wrap-reverse 换行，但是和wrap反着来
3. flex-flow
    - 此属性是flex-direction和flex-wrap的简写，默认为row nowrap
4. justify-content 
    - 此属性定义项目在主轴的对齐方式
    - 有五种值：
        - flex-start  默认值，左对齐
        - flex-end  右对齐
        - center 居中
        - space-between 两端对齐，项目的间隔相等（左右会贴边）
        - space-around 每个项目左右的间隔都相等。（项目与项目的间隔是边框的两倍）
5. align-items
    - 此属性定义项目在交叉轴上如何对齐（交叉轴根据flex-direction 属性变化）
    - 有五种值     
        - flex-start 交叉轴起点对齐
        - flex-end   交叉轴终点对齐
        - center     交叉轴中部对齐
        - basline    项目的第一回文字的基线对齐
        - stretch    默认值，如果项目没有设置高度或为auto，会占满整个容器
6. align-content
    - 此属性定义多根轴线对齐方式，如果仅一根轴线此属性不生效。
      *这个属性其实是把一根轴线上的所有项目，作为一个项目，在交叉轴上排列*
    - 有六种值：
        - flex-start
        - flex-end
        - center
        - stretch
        - space-around
        - space-between

##### 项目的属性

项目有6个属性

- order
  此属性的值是数字，数字越小越靠前 默认为0

- flex-grow
  定义项目放大比例，默认为0（即即使有剩余空间也不放大）
  这个属性一般会设置一个初始元素（有确定的宽）作为基准，然后可以设置其他的元素，可以按比例放大

- flex-shrink
  缩小比例 默认1，即会缩小，0不会

- flex-basis
  定义在分配多余空间前，项目占据的主轴空间。(浏览器会根据此属性计算主轴是否有多余空间)
  值为length|auto，auto是默认值

- flex
  此属性是flex-grow、flex-shrink、flex-basis的缩写，默认为 0 1 auto

- align-self
  允许单个项目可以和其他项目有不一样的对齐方式，同容器的align-item基本一直，多了个auto属性
  
        
    
