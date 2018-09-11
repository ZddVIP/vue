<template>
  <div class="topDiv">
      <img src="/static/img/nav/qa_logo.png"/>
      <div class="cuttingLine"></div>
      <div class="title">稳定性测试</div>
      <div class="user">
        <span>{{userName}}</span>
      </div>
  </div>
</template>

<script>
import user from '@/store/user'

export default {
  name: 'TopBar',
  data () {
    return {
      currentUser: 'dongdong'
    }
  },
  computed: {// 计算属性是基于它们的依赖进行缓存的,只有在相关依赖发生改变时他们才会重新求值
    userName () {
      debugger
      // return user.name
      return this.currentUser + ' test'
    }
  },
  mounted: function () { // el挂载到实例上后调用
    debugger
    user.loadUserInfo()
  }
}
</script>

<style scoped>
.topDiv{
  background-color: #1E2839;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  /*使用Flex布局*/
  display: flex;
  /*主轴的方向*/
  flex-direction: row;
  /*定义项目在主轴上的对齐方式*/
  justify-content: left;
  /*定义项目在交叉轴上的对齐方式*/
  align-items: center;
}

.cuttingLine{
  border-left: 1px solid #666;
  height: 15px;
  margin-left: 20px;
}

.title{
  font: 12px/1.5 "Microsoft Yahei";
  color: #fff;
  margin-left: 20px;
  font-size: 18px;
}

.user{
  color: #fff;
}
</style>
