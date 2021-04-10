import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ label, dataY }) => {

    return (
        <div>
            <Bar

                data={{
                    labels: label,
                    datasets: [{
                        label: '# of Votes',
                        data: dataY,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}

                height={400}
                width={600}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Total Number of Views from Pittsburgh or Cleveland',
                        fontSize: 36
                    }
                }}


            />
        </div>
    )
}

export default BarChart;