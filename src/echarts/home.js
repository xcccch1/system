// 柱状图配置
export const baroption = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  xAxis: {
    data: []
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'line',
      smooth: true,
      data: []
    },
    {
      name: 'Step Start',
      type: 'bar',
      step: 'start',
      data: []
    }
  ],
}

// 饼图配置
export const radiooption = {
  title: {
    text: 'Nightingale Chart',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    top: 'bottom',
    data: []
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: false },
    }
  },
  series: {
    name: '销量',
    type: 'pie',
    radius: [20, 140],
    roseType: 'area',
    itemStyle: {
      borderRadius: 5
    },
    data: []
  }
};


