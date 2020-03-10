1、流程
--创建期间的生命函数

beforeCreate：实例在内存中被创建出来时调用 没有初始化data methods属性

created：实例在内存中创建完成 此时 data methods 已经创建 但为执行模版编译

beforeMount：完成模版编译 为进行页面挂载

mounted： 将已编译的模版挂载到页面中

--运行期间的生命函数

beforeUpdate：状态更新前调用 此时data中的状态为最新值 但未渲染到页面上

updated：实例更新完成之后调用 此时data与页面内容一致

--销毁期间到生命函数

beforeDesitroy： 实例销毁之前调用 此时实例仍可用

desitroyed：实例销毁之后调用 目标对象有绑定将解绑 所有事件监听器被移除 同时销毁所有子项

2、父子组件生命周期问题

由于单个组件生命周期顺序为 create 》 mount 》 destroy
所以 vue父子组件生命周期钩子执行顺序为： 从外到内 再 从内到外

--加载渲染过程
父beforeCreate -》 父created -》父beforemount -》 子beforeCreate -》 子created -》 子beforeMount -》 子mounted -》 父mounted

--子组件更新过程
父beforeUpdate -》 子beforeUpdate -》 子updated -》 父updated

--父组件更新过程
父beforeUpdate -》 父updated

--组件销毁过程
父beforeDestroy -》 子beforeDestroy -》 子destroyed -》 父destroyed
