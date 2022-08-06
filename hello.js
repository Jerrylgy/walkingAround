var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '小刘的世界',
       subtext:'13 to go',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '地区：{b}<br/>次数：{c}'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['人数']
    },
    visualMap: {
        type: 'piecewise',
        pieces: [
            {value:0,label: '还没去过哦'},            
            {value:1,label: '一次'},
            {value:2,label: '两次'},
            {value:999,label: '好多次'},

        ],
        color: ['#d74f3d','#e0620d','#ea9518','#f3ca7e']
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
            name: '记录',
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
                {name: '湖北',value: 1},
                {name: '湖南',value: 999},
                {name: '江西',value: 1},
                {name: '安徽',value: 1},
                {name: '云南',value: 0},
                {name: '广东',value: 999},
                {name: '福建',value: 0},
                {name: '广西',value: 1},
                {name: '浙江',value: 1},
                {name: '江苏',value: 1},
                {name: '上海',value: 2},
                {name: '海南',value: 0},
                {name: '香港',value: 2},
                {name: '澳门',value: 0},
                {name: '台湾',value: 0},
                {name: '贵州',value: 1},
                {name: '重庆',value: 1},
                {name: '宁夏',value: 0},
                {name: '四川',value: 1},
                {name: '新疆',value: 0},
                {name: '西藏',value: 0},
                {name: '青海',value: 0},
                {name: '甘肃',value: 999},
                {name: '内蒙古',value: 0},
                {name: '陕西',value: 1},
                {name: '北京',value: 2},
                {name: '辽宁',value: 0},
                {name: '黑龙江',value: 0},
                {name: '哈尔滨',value: 0},
                {name: '山西',value: 1},
                {name: '山东',value: 1},
                {name: '河北',value: 1},
                {name: '河南',value: 1},
                {name: '吉林',value: 0},
                {name: '天津',value: 1},
                
            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

