import type { AlbumDto, SingerDto } from "./music";

export interface SearchSongsDto {
    name:string;
    id:string;
    singer:string;
    album:string;
    long:string;
    ar:SingerDto[];
    al:AlbumDto
}
export interface SearchSongsResDto{
    name:string;
    id:string;
    singer:string;
    album:string;
    long:string;
    ar:[{name:string}];
    al:{
        name:string;
    }
}