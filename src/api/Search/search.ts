import { request } from "..";
const goSearch = async(keywords:string): Promise<{banners:[]}>=>{
    const resp = await request(`/cloudsearch?keywords=${keywords}`)
    return resp.data.result.songs
}
export default {
    goSearch
}