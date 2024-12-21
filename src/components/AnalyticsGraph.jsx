import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const AnalyticsGraph = ({ graphData }) => {
    const rawData = graphData;

    // Process the data to count occurrences per date
    const dateCounts = rawData.reduce((acc, item) => {
        const date = item.date.split('T')[0] // Extract the date part
        acc[date] = (acc[date] || 0) + 1
        return acc
    }, {})

    const labels = Object.keys(dateCounts)
    const dataValues = Object.values(dateCounts)

    const data = {
        labels: labels, // Dates on the x-axis
        datasets: [
            {
                label: 'Rate Count',
                data: dataValues, // Numbers on the y-axis
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Briefcase state change Rate analytics',
            },
        },
    }

    return (
        <div className="w-[1200px] h-[600px] p-5 mt-5 bg-white rounded-md shadow-md">
            {data.length == 0 ? <p>No data to display</p> :
                <Bar data={data} options={options} />
            }
        </div>
    )
}

export default AnalyticsGraph
