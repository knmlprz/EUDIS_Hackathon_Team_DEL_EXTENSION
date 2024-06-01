import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import LoadingIcon from '../components/LoadingIcon'
import { APIScanResponse, RequestScan } from '../api/api';

export default function LoadingScreen(){
    const queryParameters = new URLSearchParams(window.location.search);
    const url = queryParameters.get("data");
    const [scanResult, setScanResult] = useState<APIScanResponse | null>(null);
    useEffect(
        () => {
            async function fetchScan(url: string): Promise<void>{
                const scanResponse = await RequestScan(url);
                if(scanResponse.safe === undefined || scanResponse.safe){
                    window.location.href = url;
                    return
                }
                setScanResult(scanResponse);
            }
            if(!url){
                window.location.href = 'chrome://newtab'
            }else{
            fetchScan(url);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return (
    <div className="flex flex-col w-max h-max bg-dark_blue-700 items-center">
        <img src={logo} className="w-[280px]"/>
        {scanResult === null ? 
            <LoadingIcon /> :
            <div className='flex flex-col gap-1 items-center align-middle'>
                <p className='text-red-700 font-display text-[64px]'>The resource has been blocked</p>
                <p className='text-red-500 font-main text-[36px]'>Security issues detected</p>
                <p className='text-light_blue-700 font-display text-[40px]'>Your computer is safe.</p>
                <p className='text-dark_blue-100 font-main text-[24px]'>There is no action needed; you may safely continue browsing.</p>
            </div>
    
    }
        
    </div>
    )
}