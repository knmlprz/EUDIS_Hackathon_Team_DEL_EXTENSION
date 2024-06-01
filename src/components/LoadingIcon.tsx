import ProgressActivity from '../assets/progress_activity.svg'

export default function LoadingIcon(){
    return <img
        src={ProgressActivity}
        className='animate-spin'
        />
}