import React from 'react'
import ReactECharts from 'echarts-for-react'
import { result1, result2, result3 } from '../FetchJSONdata/FetchJSONdata';

const Scatter = () => {
    let option = {
        title: {
          text: 'Wine-data-set visualization',
          subtext: 'y: Hue-Color,  x: Intensity'
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '12%',
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return (
                params.seriesName +
                ' :<br/>' +
                params.value[0] +
                'ml ' +
                params.value[1] +
                'ml '
              );
            } else {
              return (
                params.seriesName +
                ' :<br/>' +
                params.name +
                ' : ' +
                params.value +
                'ml '
              );
            }
          },
          axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              
            }
          }
        },
        brush: {},
        legend: {
          data: ['Alcohal "1"', 'Alcohal "2"', 'Alcohal "3"'],
          left: 'center',
          bottom: 10
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value} nm'
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value} ml'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'Alcohal "1"',
            type: 'scatter',
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data: result1,
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 2,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'Alcohal "1" data range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
            }
          },
          {
            name: 'Alcohal "2"',
            type: 'scatter',
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data: result2,
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 2,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'Alcohal "2" data range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
            }
          },
          {
            name: 'Alcohal "3"',
            type: 'scatter',
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data: result3,
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 2,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'Alcohal "3" data range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
            }
          }
        ]
      };
  return (
    <div>
        <ReactECharts option={option} style={{height: '85vh'}}/>
    </div>
  )
}

export default Scatter
