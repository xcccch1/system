export const radiooption = {
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
            'rose7',
            'rose8'
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
        data: [
            { value: 30, name: 'rose1' },
            { value: 28, name: 'rose2' },
            { value: 26, name: 'rose3' },
            { value: 24, name: 'rose4' },
            { value: 22, name: 'rose5' },
            { value: 20, name: 'rose6' },
            { value: 18, name: 'rose7' },
            { value: 16, name: 'rose8' }
        ]
    }
};