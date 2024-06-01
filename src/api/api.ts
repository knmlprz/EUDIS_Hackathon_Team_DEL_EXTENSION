import axios from "axios";

export type scanResponse = {
    safe: boolean
}

export default function API(){
    return axios.create({baseURL: 'localhost:8000'})
}

export async function requestScan(resource_url: string){
    const response = await API().get(`/scan/${resource_url}`)
    return response.data as scanResponse

}