import { Component ,OnInit} from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.scss'],
})
export class PiChartComponent implements OnInit {
  ngOnInit(): void {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('pie-chart')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      title: {
        text: 'PieChart',
        subtext: 'Iauro Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Interns' },
            { value: 735, name: 'Associate Eng.' },
            { value: 580, name: 'Software Eng.' },
            { value: 484, name: 'Snr. Software Eng' },
            { value: 300, name: 'Consultant' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }
}
