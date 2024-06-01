import logo from '../assets/logo.svg'
import LoadingIcon from '../components/LoadingIcon'
import {requestScan, scanResponse} from '../api/api'
import { useEffect, useState } from 'react'

export default function LoadingScreen(){
    const queryParameters = new URLSearchParams(window.location.search)
    const url = queryParameters.get("data")
    const [scanResult, setScanResult] = useState<scanResponse | null>(null);
    useEffect(() => {
        async function fetchScan(){
            if(url){
            setScanResult(await requestScan(url))
            }
        }
        fetchScan()
    }, [])

    return (
    <div className="flex flex-col w-max h-max bg-dark_blue-700">
        <img src={logo} className="w-[280px]"/>
        <LoadingIcon />
        {scanResult?.safe? 'bruhnot' : 'bruh'}
    </div>
    )
}