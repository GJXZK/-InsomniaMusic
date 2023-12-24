import type { MusicUrlDto } from "@/model/music";
import { request } from "..";
// 获取一首歌的Url
const getMusicUrl = async(id:string): Promise<MusicUrlDto>=>{
    const resp = await request(`/song/url/v1?id=${id}&level=exhigh`)
    return resp.data.data[0]
}
export default {
    getMusicUrl
}