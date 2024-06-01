import '../App.css';
import {useEffect} from "react";
import axios from 'axios';


function Load() {

    useEffect(() => {
        setInterval( async () => {
            try {
                const response = await axios.post('http://localhost:8000/scan/');
                console.log('Data:', response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error('Error fetching data:', error.message);
                } else {
                    console.error('Unexpected error:', error);
                }
            }
        },1000)
    },[])

    return (
        <>
            <p>Działa</p>
        </>
    )
}

export default Load
