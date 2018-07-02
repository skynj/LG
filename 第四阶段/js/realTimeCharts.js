$(function () {
    line();
    // 使用刚指定的配置项和数据显示图表。
});

function line() {
    var myChart1 = echarts.init(document.getElementById('tax-charts'));
    var myChart2 = echarts.init(document.getElementById('line_2'));
    var myChart3 = echarts.init(document.getElementById('line_3'));
    var myChart4 = echarts.init(document.getElementById('line_4'));
    var myChart5 = echarts.init(document.getElementById('line_5'));
    // 指定图表的配置项和数据
    var option1 = {
        grid: {
            /*      控制坐标轴宽高     */
            x: 60,
            y: 10,
            y2: 40,
            x2: 20
        },
        xAxis: {
            type: 'category',
            data: ['2010', ' ', '2012', ' ', '2014', ' ', '2015'],
            axisLine: {    //改变轴颜色
                lineStyle: {
                    color: '#192852'
                }
            },
            splitLine: {
                show: true,  //  改变轴线颜色
                lineStyle: {  // 使用深浅的间隔色
                    color: ['#20315e']
                }
            },
            axisLabel: {  //单位刻度的颜色
                color: '#6f96c8',
                fontSize: 18,
                interval: 0
            },
            splitArea: {//分隔区域
                show: true,
                areaStyle: {
                    color: ['#172650', '#1c2d5b']
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 500,
            interval: 250,
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#192852']
                }
            },
            splitLine: {
                show: true,  //  改变分隔线颜色
                lineStyle: {  // 使用深浅的间隔色
                    color: ['#283a6a'],
                    width: 3,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#6f96c8',
                fontSize: 18
            }
        },
        series: [{
            data: [240, 252, 250, 300, 400, 150, 50],
            type: 'line',

            itemStyle: {
                normal: {
                    color: '#30c6ec',
                    borderWidth: 8,
                    lineStyle: {
                        color: ['#2eb8dd'],
                        width: 6
                    }
                    // borderColor:'#30c6ec',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#d9eeee88'
                    }, {
                        offset: 1,
                        color: '#6cecea11'
                    }])
                }
            }
        }]
    };
    myChart1.setOption(option1);

    var option2 = {
        grid: {
            /*      控制坐标轴宽高     */
            x: 60,
            y: 10,
            y2: 25,
            x2: 20
        },
        xAxis: {
            type: 'category',
            data: ['2014', '', '2015', '', '2016', '', '2017', ''],
            axisLabel: {  //单位刻度的颜色
                color: '#6f96c8',
                fontSize: 12,
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff0'
                }
            },
            lineStyle: {
                color: '#6f96c8'
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 6,
            interval: 3,
            axisLine: {//轴线
                show: true,
                lineStyle: {
                    color: ['#fff0']
                }
            },
            axisLabel: {
                color: '#3e8dd3',
                fontSize: 12
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#26407e'
                }
            }

        },
        series: [{
            data: [1.8, 2.5, 2, 2.3, 4.2, 3.8, 4.3, 5.6],
            type: 'line',
            smooth: true,
            lineStyle: {
                shadowColor: '#112244',
                shadowOffsetY: 5,
                width:4
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0ebfc720'
                    }, {
                        offset: 1,
                        color: '#8368ed25'
                    }])
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#8368ed'},
                            {offset: 0.5, color: '#3e8dd3'},
                            {offset: 0, color: '#0ebfc7'}
                        ]
                    ),
                    borderWidth: 0,
                    borderColor: '#3e8dd3'
                    // borderColor:'#30c6ec',
                }
            }
        }]
    };
    myChart2.setOption(option2);

    var option3 = {
        grid: {
            /*      控制坐标轴宽高     */
            x: 60,
            y: 10,
            y2: 25,
            x2: 20
        },
        xAxis: {
            type: 'category',
            data: ['第一季度', '', '第二季度', '', '第三季度', '', '第四季度', ''],
            axisLabel: {  //单位刻度的颜色
                color: '#6f96c8',
                fontSize: 12,
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff0'
                }
            },
            lineStyle: {
                color: '#6f96c8'
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 6,
            interval: 3,
            axisLine: {//轴线
                show: true,
                lineStyle: {
                    color: ['#fff0']
                }
            },
            axisLabel: {
                color: '#3e8dd3',
                fontSize: 12
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#26407e'
                }
            }

        },
        series: [{
            data: [1.8, 2.5, 2, 2.3, 4.2, 3.8, 4.3, 5.6],
            type: 'line',
            smooth: true,
            lineStyle: {
                shadowColor: '#112244',
                shadowOffsetY: 5,
                width:4
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffe15620'
                    }, {
                        offset: 1,
                        color: '#e4b30925'
                    }])
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#e4b309'},
                            {offset: 0.5, color: '#debe3b'},
                            {offset: 0, color: '#ffe156'}
                        ]
                    ),
                    borderWidth: 0,
                    borderColor: '#3e8dd3'
                    // borderColor:'#30c6ec',
                }
            }
        }]
    };
    myChart3.setOption(option3);

    var option4 = {
        grid: {
            /*      控制坐标轴宽高     */
            x: 60,
            y: 10,
            y2: 25,
            x2: 20
        },
        xAxis: {
            type: 'category',
            data: ['7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {  //单位刻度的颜色
                color: '#6f96c8',
                fontSize: 12,
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff0'
                }
            },
            lineStyle: {
                color: '#6f96c8'
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 6,
            interval: 3,
            axisLine: {//轴线
                show: true,
                lineStyle: {
                    color: ['#fff0']
                }
            },
            axisLabel: {
                color: '#3e8dd3',
                fontSize: 12
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#26407e'
                }
            }

        },
        series: [{
            data: [1.8, 2.5, 2, 4.2, 3.8, 6.0],
            type: 'line',
            smooth: true,
            lineStyle: {
                shadowColor: '#112244',
                shadowOffsetY: 5,
                width:4
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2ff7a920'
                    }, {
                        offset: 1,
                        color: '#33d40825'
                    }])
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#33d408'},
                            {offset: 0.5, color: '#25d14e'},
                            {offset: 0, color: '#2ff7a9'}
                        ]
                    ),
                    borderWidth: 0,
                    borderColor: '#3e8dd3'
                    // borderColor:'#30c6ec',
                }
            }
        }]
    };
    myChart4.setOption(option4);

    var option5 = {
        grid: {
            /*      控制坐标轴宽高     */
            x: 60,
            y: 10,
            y2: 25,
            x2: 20
        },
        xAxis: {
            type: 'category',
            data: ['7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {  //单位刻度的颜色
                color: '#6f96c8',
                fontSize: 12,
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff0'
                }
            },
            lineStyle: {
                color: '#6f96c8'
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 6,
            interval: 3,
            axisLine: {//轴线
                show: true,
                lineStyle: {
                    color: ['#fff0']
                }
            },
            axisLabel: {
                color: '#3e8dd3',
                fontSize: 12
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#26407e'
                }
            }

        },
        series: [{
            data: [1.8, 2.5, 2, 4.2, 3.8, 6.0],
            type: 'line',
            smooth: true,
            lineStyle: {
                shadowColor: '#112244',
                shadowOffsetY: 5,
                width:4
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#08ccda20'
                    }, {
                        offset: 1,
                        color: '#07cbda25'
                    }])
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#07cbda'},
                            {offset: 0.5, color: '#00f4f7'},
                            {offset: 0, color: '#08ccda'}
                        ]
                    ),
                    borderWidth: 0,
                    borderColor: '#fff0'
                    // borderColor:'#30c6ec',
                }
            }
        }]
    };
    myChart5.setOption(option5);

    window.onresize = function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
    }
}
