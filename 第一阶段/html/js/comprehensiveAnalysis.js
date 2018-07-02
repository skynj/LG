/**
 * @time 2018/04/11 15:12:21
 * @author lg
 * @desc
 */

$(function () {
    crts();
    // numScroll();
});

function crts() {
    //路径配置
    require.config({
        paths: {
            echarts: 'js/build/dist'
            // echarts:'http://echarts.baidu.com/build/dist'
        }
    });

    //调用，按需加载模块
    require(
        [
            'echarts',
            'echarts/chart/bar',     //柱状图bar模块
            'echarts/chart/map',     //地图模块
            'echarts/chart/line',    //折线图
            'echarts/chart/scatter'  //气泡图
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            const myChart1 = ec.init(document.getElementById('carbonEmission1'));
            const myChart2 = ec.init(document.getElementById('carbonEmission2'));

            const option1 = {
                tooltip: { //提示框组件
                    show: false,             //是否显示
                    trigger: 'axis'         //触发类型，坐标轴触发
                },
                legend: {//图例
                    y: 10,                  //图例的垂直距离
                    x: 'right',             //水平位置
                    data: ['实际值', '目标值'
                    ],
                    itemWidth: 20,           //图例图形宽度
                    // backgroundColor:'#0c1f45',
                    textStyle: {             //图例文字的样式
                        color: '#5581ba',
                        fontSize: 12
                    }
                },
                // calculable : true,
                grid: {         //直角坐标系内绘图网格,内部图表在指定div内显示的位置，和定位类似
                    borderColor: '#1b3568',
                    borderWidth: 1,
                    x: 40,      //向右
                    y: 30,      //向上
                    x2: 30,     //向左
                    y2: 30      //向下
                },
                xAxis: [        //X轴
                    {
                        type: 'category',           // 类目轴
                        data: ['2016', '2017', '2018', '2019', '2020'],
                        axisTick: {
                            show: true
                        },    //坐标轴刻度相关设置。
                        axisLabel: {                //坐标轴刻度标签
                            textStyle: {
                                color: '#507bb2',//坐标值得具体的颜色
                                fontSize: 12
                            }
                        },
                        // splitLine: {            //坐标轴在 grid 区域中的分隔线。
                        //     show: false,        //  改变轴线颜色
                        //     lineStyle: {        // 使用深浅的间隔色
                        //         color: ['#162f5e']     //分隔线颜色
                        //         // type: 'dotted'
                        //     }
                        // },
                        splitArea: {            //坐标轴在 grid 区域中的分隔区域,默认不显示
                            show: true,
                            // interval:31,
                            areaStyle: {            //分隔区域的样式设置
                                color: ['#061636', '#091c40']
                            }
                        },

                        axisLine: {    //坐标轴轴线
                            lineStyle: {
                                color: '#1b3569'
                            }
                        }
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisLine: {
                            show: false
                            // lineStyle:{
                            //     type:'dashed',
                            //     color:'#172f5e'
                            // }
                        },
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        splitArea: {show: false},
                        splitLine: {
                            show: false
                        },
                        data: ['201', '2017', '2018', '2019', '2020']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '单位：%',
                        nameTextStyle: {        //单位样式
                            color: ['#5581ba'],
                            fontSize: 12
                        },
                        min: 0,
                        max: 100,
                        splitNumber: 4,
                        axisLine: {    //改变轴颜色
                            lineStyle: {
                                color: '#1b3569'
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: '{value}',
                            textStyle: {
                                color: '#507bb2',//坐标值得具体的颜色
                                fontSize: 12
                            }
                        },
                        splitLine: {      //轴线(Y轴的虚线)
                            show: true,  //  改变轴线颜色
                            lineStyle: {  // 使用深浅的间隔色
                                color: '#172f5e',
                                type: 'dashed'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '实际值',
                        type: 'bar',
                        barWidth: 11,
                        legend: {
                            itemWidth: 10//图例图形宽度
                        },
                        itemStyle: {normal: {color: 'rgba(45,170,252,1)', label: {show: false}}},
                        data: [15, 20, 40, 35, 50]
                    },
                    {
                        name: '目标值',
                        type: 'line',
                        symbol:'circle',//标记的形状 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                        symbolSize:[7,7],//小圆点的大小
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,255,197,1)',
                                label: {show: false},      //折线图数字
                                /*areaStyle:{     //折线图所显示区域
                                    // color:"red"
                                }*/
                            }
                        },
                        data: [45, 55, 75, 60, 75]
                    },
                    {
                        name: '目标值',
                        type: 'bar',
                        barWidth: 11,
                        xAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: 'rgba(5,64,110,1)', label: {
                                    show: false, formatter: function (p) {
                                        return p.value > 0 ? (p.value + '\n') : '';
                                    }
                                }
                            }
                        },
                        data: [45, 55, 75, 60, 75]
                    }
                ]

            };








            myChart1.setOption( option1 );
            myChart2.setOption( option1 );
        }
    )

}
