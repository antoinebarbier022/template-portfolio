import { FaviconType, PlateformType } from "../types/All.types";

export interface DataModel{
    favicon: {
        type: FaviconType,
        src: string
    },
    title:string,
    subtitle:string,
    image:{
        src: any,
        alt: string
    },
    description: any,
    contact?: {
        email?:string,
        phone?:string,
        location?:string,
    }
    plateforms?: Array<{ name: PlateformType, link: string }>
    socialNetworks?: Array<{ name: PlateformType, link: string }>,
};

