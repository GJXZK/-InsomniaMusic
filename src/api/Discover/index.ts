import { request } from "..";
import type{ BannerDto } from "@/model/discover";
const getBannerList = async(): Promise<BannerDto[]>=>{
    let resp = await request('/banner')
    return resp.data.banners
}
export default {
    getBannerList
}