import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData : {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
        chartData : {
            labels : ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Bend'],
            datasets : [
                {
                    label : 'Population',
                    data : [
                        667589,
                        177019,
                        175803,
                        114835,
                        112427,
                        103962
                    ],
                    backgroundColor : [
                        'rgba(170, 125, 121, 0.6)',
                        'rgba(169, 109, 163, 0.6)',
                        'rgba(122, 89, 128, 0.6)',
                        'rgba(59, 59, 88, 0.6)',
                        'rgba(144, 149, 144, 0.6)',
                        'rgba(142, 74, 73, 0.6)'
                    ]
                }
            ]
        }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
