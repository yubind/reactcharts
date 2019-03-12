import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData : {
                labels : ['Boston', 'Worcester', 'SpringField', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets : [
                    {
                        label : 'Population',
                        data : [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor : [
                            'rgba(170, 125, 121, 0.6)',
                            'rgba(188, 154, 156, 0.6)',
                            'rgba(169, 109, 163, 0.6)',
                            'rgba(122, 89, 128, 0.6)',
                            'rgba(59, 59, 88, 0.6)',
                            'rgba(144, 149, 144, 0.6)',
                            'rgba(142, 74, 73, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">
                <Bar 
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}

export default Chart;