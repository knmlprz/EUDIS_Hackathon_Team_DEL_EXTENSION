import React from 'react'
import ReactDOM from 'react-dom/client'
//import Load from './test/load.tsx'
import LoadingScreen from './views/LoadingScreen'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LoadingScreen />
    </React.StrictMode>,
)
