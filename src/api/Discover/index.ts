import { request } from "..";
const getBannerList = async(): Promise<[]>=>{
    const resp = await request('/banner')
    return resp.data
}
export default {
    getBannerList
}