import axios from 'axios'
import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Container from '../components/Container'
import AnalyticsGraph from '../components/AnalyticsGraph'
import toast, { Toaster } from 'react-hot-toast';
import WarningPrompt from '../components/WarningPrompt'

const Home = () => {
    const [isRemoteBriefcaseOpen, setIsRemoteBriefcaseOpen] = useState(false)
    const [statusText, setStatusText] = useState("Closed")
    const [graphData, setGraphData] = useState([]);
    const [failedAttempt, setFailedAttempt] = useState([]);
    

    function updateBriefcaseState() {
        const toastId = toast.loading(`${isRemoteBriefcaseOpen ? "closing" : "opening"} briefcase...`);

        axios.put(import.meta.env.VITE_HOST_ADDRESS + '/tracking/status/update', { state: !isRemoteBriefcaseOpen }).then(res => {
            // setIsRemoteBriefcaseOpen(!isRemoteBriefcaseOpen)
            toast.success(`Briefcasse ${isRemoteBriefcaseOpen ? "Closed" : "Opened"}.`, {
                id: toastId
            });
        }).catch(err => {
            toast.error(`An error occured`, {
                id: toastId
            });
        })
    }

    useEffect(() => {
        function getBriefcaseStatus() {
            axios.get(import.meta.env.VITE_HOST_ADDRESS + '/tracking/status').then(res => {
                const status = res.data.result[0].status
                status == "open" ? setIsRemoteBriefcaseOpen(true) : setIsRemoteBriefcaseOpen(false)
                setStatusText(status)
            }).catch(err => {
                toast.error(`Connection error!`);
            })
        }

        function getGraphData() {
            axios.get(import.meta.env.VITE_HOST_ADDRESS  + '/history/view/all').then(res => {
                const data = res.data.data
                setGraphData(data);
            }).catch(err => {
                setGraphData("Failed to fetch data")
            })
        }

        function fetchFailedAttempts(){
            // console.log("Fetching failed attempts")
            axios.get(import.meta.env.VITE_HOST_ADDRESS + '/notifications/failed/today').then(res=>{
                const data = res.data.result;
                // const new_cont = data[data.length - 1]
                
                console.log(data);
                setFailedAttempt(data)
            }).catch(err=>{
                console.log("An Error Occured", err)
            })
        }

        fetchFailedAttempts()
        getGraphData();
        setInterval(getBriefcaseStatus, 1000)
    }, []);

    return (
        <>
        {failedAttempt.length == 0 ? 
            null 
            : 
            <WarningPrompt details={failedAttempt} />
        }
        
            <Toaster />

            {/* <SideBar /> */}
            <Header />
            <Container>
                <section className='mt-[20px]'>
                    <h3 className='text-2xl font-semibold'>Control</h3>
                    <div className='flex items-center justify-center'>
                        <div className="p-2 shadow-lg w-[400px] h-[200px] pb-5 bg-white rounded-md flex items-center flex-col justify-center gap-6">
                            <h3 className="text-2xl font-semibold text-center">Remote Briefcase<br />(<b className='capitalize '>{statusText}</b>)</h3>
                            <input type="checkbox" onChange={updateBriefcaseState} checked={isRemoteBriefcaseOpen} className="toggle toggle-success" />
                        </div>
                    </div>
                </section>

                <section className='mt-10'>
                    <h3 className='text-2xl font-semibold'>Analytics</h3>
                    <div className='flex items-center justify-center'>
                        <AnalyticsGraph graphData={graphData} />
                    </div>
                </section>
            </Container>
        </>
    )
}
export default Home