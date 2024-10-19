<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import loginApi from '@/api/User/login'
import userApi from '@/api/User/UserData'
import UserData from '@/api/User/UserData'
import { Message } from '@arco-design/web-vue'

// 二维码地址
let QrCode = ref('')
let checkInterval: number | null = null
// 登录
const login = async () => {
  const key = await loginApi.getKey()
  QrCode.value = await loginApi.getQrCode(key)
  checkQrcode(key)
}
// 检查二维码扫描状态，一直检查，指导登陆成功或者气泡弹窗被关闭
const checkQrcode = async (key: string) => {
  checkInterval = window.setInterval(async () => {
    const code = await loginApi.checkQrCode(key)
    if (code === 800) {
      // 二维码过期
      clearChecker()
      login
    }else if(code === 803){
      Message.success('登陆成功')
      clearChecker()
      getAccountInfo()
    }
  }, 2000) // 每2秒检查一次
}
const getAccountInfo = async () => {
  const resp = await UserData.getAccount()
  console.log(resp)
}
const clearChecker = ()=>{
  clearInterval(checkInterval!)
  checkInterval = null
}
onMounted(() => {
  login() // 初始登陆
})
onBeforeUnmount(() => {
  clearChecker()
})
</script>
<template>
  <!-- 登录 -->
  <div class="w-200px h-200px">
    <img class="w-200px" :src="QrCode" alt="" />
  </div>
</template>
