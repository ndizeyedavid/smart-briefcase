
const Alert = ({ type }) => {
    return (
        <>

            {type == 'success' ?
                <div className="flex items-center justify-center w-full h-full text-green-800 bg-green-100 rounded-lg animate-pulse" id="dur" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-2"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                    <strong className="mr-4 font-bold text-md">Tracking!</strong>
                </div>

                :

                <div className="flex items-center justify-center w-full h-full text-red-800 bg-red-100 rounded-lg" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-[24px] h-[24px] mr-2"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" /></svg><strong className="mr-4 font-bold text-md">Failed to track the briefcase!</strong>
                </div>
            }
        </>
    )
}

export default Alert
