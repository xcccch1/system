// import Mock from "mockjs";
const Mock = require("mockjs")

// 柱状图配置
const barOption = Mock.mock({
    title: {
      text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    xAxis: {
      data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'line',
        smooth: true,
        "data|6": [
            () => Mock.Random.integer(0, 500)
        ]
      },
      {
        name: 'Step Start',
        type: 'bar',
        step: 'start',
        "data|6": [
            () => Mock.Random.integer(0, 500)
        ]
      }
    ],
  })

// 饼图配置
const radioOption = Mock.mock({
    title: {
      text: 'Nightingale Chart',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
      ]
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: false },
      }
    },
    series: {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      "data": [
        { value: ()=>Mock.Random.integer(0, 500), name: 'rose1' },
        { value: ()=>Mock.Random.integer(0, 500), name: 'rose2' },
        { value: ()=>Mock.Random.integer(0, 500), name: 'rose3' },
        { value: ()=>Mock.Random.integer(0, 500), name: 'rose4' },
        { value: ()=>Mock.Random.integer(0, 500), name: 'rose5' },
        { value: ()=>Mock.Random.integer(0, 500), name: 'rose6' },
      ]
    }
  });

console.log(radioOption.series);

const Option = {barOption,radioOption}

export function getEchartOption(){
  return Option
}