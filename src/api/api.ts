import axios from "axios";

export type scanResponse = {
    safe: boolean | undefined
}


export type APIScanResponse = scanResponse

export default function API(){
    return axios.create({baseURL: 'http://localhost:8000', timeout: 3000})
}

export async function RequestScan(resource_url: string): Promise<APIScanResponse>{
    return new Promise<APIScanResponse>((resolve) => {
        API().post(`/scan/`,{data: resource_url}).catch(() => {
            resolve({safe: undefined})
        }).then((response) => resolve(response?.data))
    }) 
}