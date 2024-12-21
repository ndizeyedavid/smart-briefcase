import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Table = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchNotification = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_HOST_ADDRESS}/history/view/all`);
                const out = response.data.data;
                // console.log(out);
                setTableData(out);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        setInterval(fetchNotification, 3000);
    }, []);

    async function deleteThis(id) {
        let allow = confirm('Do you really want to remove this??');
        if (allow) {
            try {
                const response = await axios.delete(`${import.meta.env.VITE_HOST_ADDRESS}/history/delete/${id}`);
                toast.success("History removed successfully");
            } catch (error) {
                toast.error("An error occurred");
                console.error("Error deleting data:");
            }
        }
    }

    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }

    return (
        <>
            <Toaster />

            <div className="font-[sans-serif] overflow-x-hidden">
                <table className="min-w-full bg-white rounded">
                    <thead className="bg-gray-800 rounded whitespace-nowrap">
                        <tr className="rounded">
                            <th className="p-4 text-sm font-medium text-left text-white">
                                #
                            </th>
                            <th className="p-4 text-sm font-medium text-left text-white">
                                Details
                            </th>
                            <th className="p-4 text-sm font-medium text-left text-white">
                                Date
                            </th>
                            {/* <th className="p-4 text-sm font-medium text-left text-white">
                                Location
                            </th> */}
                            <th className="p-4 text-sm font-medium text-left text-white">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap">
                        {tableData.length == 0 ? <tr><td colSpan="5" className="p-2 text-center">No history saved yet!</td></tr> : null}
                        {tableData.map((data, index) => (

                            <tr className="even:bg-blue-50" key={index}>
                                <td className="p-4 text-sm text-center text-black">{index + 1}</td>
                                <td className="p-4 text-sm text-black text-wrap w-[700px]">{data.details}</td>
                                <td className="p-4 text-sm text-black">{formatDate(data.date)}</td>
                                {/* <td className="p-4 text-sm text-black">{data.location}</td> */}
                                <td className="p-4">
                                    <button className="mr-4" title="Delete" onClick={() => deleteThis(data.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-900" viewBox="0 0 24 24"><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" /> <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" /> </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Table
