var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '小刘的世界',
       subtext:'今天天气正好',
        left: 'center',
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['人数']
    },
    visualMap: {
        type: 'piecewise',
        pieces: [
            
            {value:1,label: '×'},
 
            {value:0,label: '√'}
        ],
        color: ['#d74f3d','#f3ca7e']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [
        {
            name: '冬至吃什么',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                  show: true,
                  position: 'right',

                  formatter: '{b}',
                },
                textStyle: {
                  color: "#000000"
                }
              },
            data: [
                {name: '湖北',value: 0},
                {name: '湖南',value: 0},
                {name: '江西',value: 0},
                {name: '安徽',value: 0},
                {name: '云南',value: 1},
                {name: '广东',value: 0},
                {name: '福建',value: 1},
                {name: '广西',value: 0},
                {name: '浙江',value: 0},
                {name: '江苏',value: 0},
                {name: '上海',value: 0},
                {name: '海南',value: 1},
                {name: '香港',value: 0},
                {name: '澳门',value: 1},
                {name: '台湾',value: 1},
                {name: '贵州',value: 0},
                {name: '重庆',value: 0},
                {name: '宁夏',value: 1},
                {name: '四川',value: 0},
                {name: '新疆',value: 1},
                {name: '西藏',value: 1},
                {name: '青海',value: 1},
                {name: '甘肃',value: 0},
                {name: '内蒙古',value: 1},
                {name: '陕西',value: 0},
                {name: '北京',value: 0},
                {name: '辽宁',value: 1},
                {name: '黑龙江',value: 1},
                {name: '哈尔滨',value: 1},
                {name: '山西',value: 0},
                {name: '山东',value: 0},
                {name: '河北',value: 0},
                {name: '河南',value: 0},
                {name: '吉林',value: 1},
                {name: '天津',value: 0},
                
            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

