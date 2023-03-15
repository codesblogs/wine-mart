import ReactECharts from 'echarts-for-react'
import React from 'react'
import { alcoholArray, MallicAcidArray, AshArray, AlcanityofAshArray, MagnesiumArray, TotalPhenolsArray, FlavanoidsArray, NonflavanoidphenolsArray, ProanthocyaninsArray, DilutedwinesArray, UnknownArray } from '../FetchJSONdata/FetchJSONdata';


const Bargraphs = () => {
   let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '2%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          scale: 'true'
        },
        xAxis: {
          type: 'category',
          data: alcoholArray
        },
        series: [
          {
            name: 'Malic Acid',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: MallicAcidArray
          },
          {
            name: 'Ash',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: AshArray
          },
          {
            name: 'Alcancity of Ash',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: AlcanityofAshArray
          },
          {
            name: 'Magnesium',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: MagnesiumArray
          },
          {
            name: 'Total Phenols',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: TotalPhenolsArray
          },
          {
            name: 'Flavanoids',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: FlavanoidsArray
          },
          {
            name: 'Nonflavanoid phenols',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: NonflavanoidphenolsArray
          },
          {
            name: 'Proanthocyanins',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: ProanthocyaninsArray
          },
          {
            name: 'Diluted wines',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: DilutedwinesArray
          },
          {
            name: 'Unknown',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: UnknownArray
          }
        ]
      };
  return (
    <div style={{height: '100%'}}>
        <ReactECharts option={option} style={{height: '80vh'}}/> 
        <span><b>"A1", "A2", "A3"</b> denoted as Alcohal 1, Alcohal 2 and Alcohal 3</span>
    </div>
  )
}

export default Bargraphs
