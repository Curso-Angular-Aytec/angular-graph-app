import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})

export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [ 350, 450, 100, 150 ],
        backgroundColor: ['#5DC6D4', '#D855EB', '#42F622', '#D49946']
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
}