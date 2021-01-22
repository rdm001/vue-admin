<template>
  <div class="signin-container">
    <el-form ref="form"  label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    data() {
      return {
        user_name:'',
        password:''
      }
    },
    methods:{
      onSubmit(){
        console.log('submit!')
      }
    }
  }
// test10
</script>
<style lang="less" scoped>
  .signin-container{
    margin: 0 auto;
  }
</style>
