// import axios from "axios"
// import { ElMessage } from "element-plus"
// import router from "@/router"
// const baseURL = <string>import.meta.env.VITE_BASE_URL

// const service = axios.create({
//   baseURL: baseURL,
//   timeout: 5000,
// })

// service.defaults.headers.common.Authorization = localStorage.getItem("accessToken")
//   ? "Bearer " + localStorage.getItem("accessToken")
//   : ""

// service.interceptors.response.use(
//   (response) => {
//     const res = response.data
//     if (res.msg && res.msg.text) {
//       ElMessage({
//         message: res.msg.text,
//         type: res.msg.type,
//       })
//     }
//     return response
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       router.push("/login")
//     }
//     return error.response
//   }
// )
// export default service
