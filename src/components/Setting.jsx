import axios from "axios";
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Setting = () => {
    const [pushNotifications, setPushNotification] = useState(false);
    useEffect(() => {
        const fetchSetting = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_HOST_ADDRESS}/settings/view`);
                const out = response.data.result[0];
                // console.log(out)
                setPushNotification(out == 1 ? true : false);
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        };

        // setInterval(fetchSetting, 1000);
    }, []);

    // async function updateSettings(state) {
    //     try {
    //         const response = await axios.put(`${import.meta.env.VITE_HOST_ADDRESS}/settings/update`, { notification: state ? 1 : 0 });
    //         const out = response.data;
    //         // Handle the response as needed
    //         // console.log(out);
    //         toast.success('Settings updated successfully');
    //     } catch (error) {
    //         console.error("Error updating settings:", error.response.data);
    //     }
    // }

    async function resetNotifications() {
        const toastId = toast.loading('Resetting Notifications...');
        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + `/settings/notification/reset`)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        const out = data;
                        toast.success('All notifications deleted', {
                            id: toastId
                        });
                        // setProfile(out.profile);
                        // console.log(data.cont[0])

                    })
            })
    }

    async function deleteHistory() {
        const toastId = toast.loading('Deleting history data...');
        const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + `/settings/reset/history`)
            .then(d => {
                const result = d.json()
                    .then(data => {
                        const out = data;
                        toast.success('The history tab is good as new', {
                            id: toastId
                        });

                    })
            })
    }
    return (
        <>
            <Toaster />

            <section className="flex flex-col h-full gap-16 p-6 overflow-y-auto text-gray-900">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Logs</p>
                        {/* <p className="text-xs">Your secret credentials to login into the system!</p> */}
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                            <div className="flex items-center gap-x-5" aria-label="button-combination">
                                <button onClick={() => deleteHistory()} className="btn btn-outline btn-error inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide rounded-lg h-[60px]">
                                    Delete all history
                                </button>
                            </div>

                        </div>

                    </div>
                </fieldset>
            </section>
        </>
    )
}

export default Setting
