import type { SearchSongsDto, SearchSongsResDto } from "@/model/search";
import { request } from "..";
const goSearch = async(keywords:string): Promise<SearchSongsDto[]>=>{
    const resp = await request(`/cloudsearch?keywords=${keywords}`)
    return resp.data.result.songs
}
export default {
    goSearch
}