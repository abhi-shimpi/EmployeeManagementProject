import { Component,OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit{

    ngOnInit(): void {
      var chartDom = document.getElementById('gaugeChart')!;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: 'Gauge Chart',
          left:'center'
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}',
            },
            data: [
              {
                value: 50,
                name: 'SCORE',
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);

    }

}
