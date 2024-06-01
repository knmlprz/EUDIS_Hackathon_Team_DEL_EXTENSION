import logo from '../assets/logo.svg'
import LoadingIcon from '../components/LoadingIcon'

export default function LoadingScreen(){
    const queryParameters = new URLSearchParams(window.location.search)
    const url = queryParameters.get("url")
    if(url){
        console.log(`Detected URL: ${url}`)
    }
    return (
    <div className="flex flex-col w-max h-max bg-dark_blue-700">
        <img src={logo} className="w-[280px]"/>
        <LoadingIcon />
    </div>
    )
}