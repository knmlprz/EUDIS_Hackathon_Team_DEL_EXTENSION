import logo from '../assets/logo.svg'
import LoadingIcon from '../components/LoadingIcon'

export default function LoadingScreen(){
    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("name")
    return (
    <div className="flex flex-col w-max h-max bg-dark_blue-700">
        <img src={logo} className="w-[280px]"/>
        <LoadingIcon />
        <p className='font-bold text-9xl text-neutrals-white'>{name ? name : ""}</p>
    </div>
    )
}