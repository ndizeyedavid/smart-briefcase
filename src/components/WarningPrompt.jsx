import { useState } from "react";


export default function WarningPrompt({details}){

    const [closed, setClosed] = useState(false);

    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
    
    return (
        <>
        {!closed ? 
            <div role="alert" className="fixed top-[10px] w-[98%] left-0 right-0 mx-auto z-[99999999999] alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                
                <span>Warning: Someone is trying to gain unathorised access! Date due: <b>{formatDate(details[0].date)}</b></span>

                <button className="btn w-7 h-5" onClick={()=>setClosed(true)}>X</button>
            </div>

            :

            null
        }
        </>
    );
}