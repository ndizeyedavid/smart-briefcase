
const Container = ({ children }) => {
    return (
        <>
            <div className="z-[0] h-full p-4">
                <div className="w-full h-full p-2  shadow-lg card bg-[#eeeeee]">
                    {/* <button className="btn hover:bg-yellow-500">ads</button> */}
                    {children}
                </div>
            </div>
        </>
    )
}

export default Container
