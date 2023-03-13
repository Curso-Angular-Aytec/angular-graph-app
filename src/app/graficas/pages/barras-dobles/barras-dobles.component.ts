import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html'
})

export class BarrasDoblesComponent {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#FAD325', hoverBackgroundColor: '#FAD325' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#B12FED', hoverBackgroundColor: '#FAD325' }
    ]
  };

  public proveedoresData: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025' ],
    datasets: [
      { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A' },
      { data: [ 50, 250, 30, 450, 200 ], label: 'Vendedor B' }
    ] 
  };

  public productoData: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025' ],
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  };
}