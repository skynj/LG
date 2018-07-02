$(function () {
    line();
    // 使用刚指定的配置项和数据显示图表。
});

function line() {
    var myChart1 = echarts.init(document.getElementById('tax-charts'));
    var myChart2 = echarts.init(document.getElementById('pie-1'));
    var myChart3 = echarts.init(document.getElementById('pie-2'));
    var myChart4 = echarts.init(document.getElementById('pie-3'));
    var myChart5 = echarts.init(document.getElementById('bar-1'));

    var myChart6 = echarts.init(document.getElementById('pie-4'));
    var myChart7 = echarts.init(document.getElementById('pie-5'));
    var myChart8 = echarts.init(document.getElementById('pie-6'));
    var myChart9 = echarts.init(document.getElementById('bar-2'));


    var option1 = {
        grid: {
            /*      控制坐标轴宽高     */
            x: 40,
            y: 10,
            y2: 25,
            x2: 10
        },
        xAxis: {
            type: 'category',
            data: ['2010', ' ', '2012', ' ', '2014', ' ', '2016'],
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
                    color: ['#152751', '#192d5c']
                }
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 500,
            interval: 250,
            axisLine: {
                show: false,
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
        color: '#445a94',
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                // console.log(params.data)
                // console.log(ticket)
                var num = params.value;
                // var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:12px;margin:0px;color:green;">总数</p><p style="font-size:20px;margin:0px">' + num + '</p></div>'
                var str = '<div style="width:120px;height:100px;line-height:40px; text-align: center;background:transparent;">';
                str += '<p style="border-bottom: 1px dashed #445a94;font-size: 14px;color:#8ab7ed;padding-top:10px;"><span style="color:green;font-size:20px;margin:0 10px;font-weight: bold;">' + num + '</span>家</p> ';
                str += '<p style="color:#8ab7ed;font-size: 14px;">占<span style="color:green; font-size:20px;margin:0 10px;">0%</span></p></div>';
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0] / 2);
                var marginH = Math.ceil(size.contentSize[1] / 2);
                dom.style.marginLeft = '-' + marginW + 'px';
                dom.style.marginTop = '-' + marginH + 'px';
                return ['50%', '50%'];
            },
            alwaysShowContent: true,
            backgroundColor: 'transparent',	//设置提示框的背景色
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,	//关闭 hover 在扇区上的放大动画效果。
                cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
                silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                label: {
                    normal: {
                        show: false,
                        position: 'default'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 0, name: '直接访问'}
                ]
            }
        ]
    };
    myChart2.setOption(option2);
    myChart2.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });

    var option3 = {
        color: '#445a94',
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                // console.log(params.data)
                // console.log(ticket)
                var num = params.value;
                // var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:12px;margin:0px;color:green;">总数</p><p style="font-size:20px;margin:0px">' + num + '</p></div>'
                var str = '<div style="width:120px;height:100px;line-height:40px; text-align: center;background:transparent;">';
                str += '<p style="border-bottom: 1px dashed #445a94;font-size: 14px;color:#8ab7ed;padding-top: 10px;"><span style="color:#ff9c0e;font-size:20px;margin:0 10px;font-weight: bold;">' + num + '</span>家</p> ';
                str += '<p style="color:#8ab7ed;font-size: 14px;">占<span style="color:#ff9c0e; font-size:20px;margin:0 10px;">0%</span></p></div>';
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0] / 2);
                var marginH = Math.ceil(size.contentSize[1] / 2);
                dom.style.marginLeft = '-' + marginW + 'px';
                dom.style.marginTop = '-' + marginH + 'px';
                return ['50%', '50%'];
            },
            alwaysShowContent: true,
            backgroundColor: 'transparent',	//设置提示框的背景色
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,	//关闭 hover 在扇区上的放大动画效果。
                cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
                silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                label: {
                    normal: {
                        show: false,
                        position: 'default'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 0, name: '直接访问'},
                    {value: 20, name: '直接访问'}
                ]
            }
        ]
    };
    myChart3.setOption(option3);
    myChart3.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });

    var option4 = {
        color: '#2e6cef',
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                // console.log(params.data)
                // console.log(ticket)
                var num = params.value;
                // var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:12px;margin:0px;color:green;">总数</p><p style="font-size:20px;margin:0px">' + num + '</p></div>'
                var str = '<div style="width:120px;height:100px;line-height:40px; text-align: center;background:transparent;">';
                str += '<p style="border-bottom: 1px dashed #445a94;font-size: 14px;color:#8ab7ed;padding-top: 10px;"><span style="color:#2e6cef;font-size:20px;margin:0 10px;font-weight: bold;">' + num + '</span>家</p> ';
                str += '<p style="color:#8ab7ed;font-size: 14px;">占<span style="color:#2e6cef; font-size:20px;margin:0 10px;">0%</span></p></div>';
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0] / 2);
                var marginH = Math.ceil(size.contentSize[1] / 2);
                dom.style.marginLeft = '-' + marginW + 'px';
                dom.style.marginTop = '-' + marginH + 'px';
                return ['50%', '50%'];
            },
            alwaysShowContent: true,
            backgroundColor: 'transparent',	//设置提示框的背景色
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,	//关闭 hover 在扇区上的放大动画效果。
                cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
                silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                label: {
                    normal: {
                        show: false,
                        position: 'default'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 277, name: '直接访问'}
                ]
            }
        ]
    };
    myChart4.setOption(option4);
    myChart4.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });

    var option5 = {
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show: true,
            type: 'plain',
            // orient: 'vertical',
            top: 'top',
            itemWidth: 15,
            itemHeight: 15,
            textStyle: {
                color: '#b1cefc'
            },
            data: ['未报送', '已按时报送', '已逾期报送'],
            selected: {
                '未报送': true,
                '已按时报送': false,
                '已逾期报送': false
            }
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['姑苏区', '吴中区', '相城区', '高新区', '工业园区', '吴江区', '常熟市', '张家港市', '昆山市', '太仓市'],
                axisTick: {    //坐标轴刻度
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                    /* lineStyle: {       // 使用深浅的间隔色
                         color: ['yel']   //  改变分隔区轴线颜色
                     }*/
                },
                splitArea: {
                    show: true,
                    areaStyle: {          //  改变分隔区背景颜色
                        color: ['#172650', '#1c2d5b'],
                        opacity: 0.9
                        // shadowColor:'#172650'
                    }
                },
                axisLabel: {            //单位刻度的颜色
                    color: '#96c7ff',
                    fontSize: 14,
                    interval: 0,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                }
            },
            {
                type: 'category',
                show: false,
                data: ['姑苏区', '吴中区', '相城区', '高新区', '工业园区', '吴江区', '常熟市', '张家港市', '昆山市', '太仓市'],
                axisTick: {    //坐标轴刻度
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                    /* lineStyle: {       // 使用深浅的间隔色
                         color: ['yel']   //  改变分隔区轴线颜色
                     }*/
                },
                splitArea: {
                    show: false,
                    areaStyle: {          //  改变分隔区背景颜色
                        color: ['#172650', '#1c2d5b'],
                        opacity: 0.9
                        // shadowColor:'#172650'
                    }
                },
                axisLabel: {            //单位刻度的颜色
                    color: '#96c7ff',
                    fontSize: 14,
                    interval: 0,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 120,
                axisTick: {
                    show: false
                },
                axisLabel: {           //单位刻度的颜色
                    color: '#96c7ff',
                    fontSize: 14,
                    interval: 0
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                splitLine: {
                    show: true,  //  改变分隔线颜色
                    lineStyle: {  // 使用深浅的间隔色
                        color: ['#96c7ff'],
                        width: 1,
                        type: 'dashed',
                        opacity: 0.6
                    }

                }

            },
            {
                type: 'value',
                min: 0,
                max: 120,
                axisTick: {
                    show: false
                },
                axisLabel: {           //单位刻度的颜色
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                splitLine: {
                    show: true,  //  改变分隔线颜色
                    lineStyle: {  // 使用深浅的间隔色
                        color: ['#96c7ff'],
                        width: 1,
                        type: 'dashed',
                        opacity: 0.6
                    }

                }

            }
        ],
        series: [
            {
                type: 'bar',
                name: '未报送',
                barWidth: '30%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#438cfb'},
                                {offset: 0.5, color: '#20bdfd'},
                                {offset: 1, color: '#02e8ff'}
                            ]
                        )
                    }
                    /*emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }*/
                },
                data: [52, 8, 4, 31, 112, 20, 48, 22, 79, 18]
            },
            {
                type: 'bar',
                name: '已按时报送',
                barWidth: '30%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#28d57a'},
                                {offset: 0.5, color: '#7ce1ac'},
                                {offset: 1, color: '#dcebe3'}
                            ]
                        )
                    }
                    /*emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }*/
                },
                data: [52, 8, 4, 31, 112, 20, 48, 22, 79, 18]
            },
            {
                type: 'bar',
                name: '已逾期报送',
                barWidth: '30%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#f9f3eb'},
                                {offset: 0.5, color: '#f8c57c'},
                                {offset: 1, color: '#ff9c0e'}
                            ]
                        )
                    }
                    /*emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }*/
                },
                data: [52, 8, 4, 31, 112, 20, 48, 22, 79, 18]
            }
        ]
    };
    myChart5.setOption(option5);

    var option6 = {
        color: '#445a94',
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                // console.log(params.data)
                // console.log(ticket)
                var num = params.value;
                // var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:12px;margin:0px;color:green;">总数</p><p style="font-size:20px;margin:0px">' + num + '</p></div>'
                var str = '<div style="width:120px;height:100px;line-height:40px; text-align: center;background:transparent;">';
                str += '<p style="border-bottom: 1px dashed #445a94;font-size: 14px;color:#8ab7ed;padding-top:10px;"><span style="color:green;font-size:20px;margin:0 10px;font-weight: bold;">' + num + '</span>家</p> ';
                str += '<p style="color:#8ab7ed;font-size: 14px;">占<span style="color:green; font-size:20px;margin:0 10px;">0%</span></p></div>';
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0] / 2);
                var marginH = Math.ceil(size.contentSize[1] / 2);
                dom.style.marginLeft = '-' + marginW + 'px';
                dom.style.marginTop = '-' + marginH + 'px';
                return ['50%', '50%'];
            },
            alwaysShowContent: true,
            backgroundColor: 'transparent',	//设置提示框的背景色
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,	//关闭 hover 在扇区上的放大动画效果。
                cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
                silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                label: {
                    normal: {
                        show: false,
                        position: 'default'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 0, name: '直接访问'}
                ]
            }
        ]
    };
    myChart6.setOption(option6);
    myChart6.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });

    var option7 = {
        color: '#445a94',
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                // console.log(params.data)
                // console.log(ticket)
                var num = params.value;
                // var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:12px;margin:0px;color:green;">总数</p><p style="font-size:20px;margin:0px">' + num + '</p></div>'
                var str = '<div style="width:120px;height:100px;line-height:40px; text-align: center;background:transparent;">';
                str += '<p style="border-bottom: 1px dashed #445a94;font-size: 14px;color:#8ab7ed;padding-top: 10px;"><span style="color:#ff9c0e;font-size:20px;margin:0 10px;font-weight: bold;">' + num + '</span>家</p> ';
                str += '<p style="color:#8ab7ed;font-size: 14px;">占<span style="color:#ff9c0e; font-size:20px;margin:0 10px;">0%</span></p></div>';
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0] / 2);
                var marginH = Math.ceil(size.contentSize[1] / 2);
                dom.style.marginLeft = '-' + marginW + 'px';
                dom.style.marginTop = '-' + marginH + 'px';
                return ['50%', '50%'];
            },
            alwaysShowContent: true,
            backgroundColor: 'transparent',	//设置提示框的背景色
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,	//关闭 hover 在扇区上的放大动画效果。
                cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
                silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                label: {
                    normal: {
                        show: false,
                        position: 'default'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 0, name: '直接访问'},
                    {value: 20, name: '直接访问'}
                ]
            }
        ]
    };
    myChart7.setOption(option7);
    myChart7.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });

    var option8 = {
        color: '#2e6cef',
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                // console.log(params.data)
                // console.log(ticket)
                var num = params.value;
                // var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:12px;margin:0px;color:green;">总数</p><p style="font-size:20px;margin:0px">' + num + '</p></div>'
                var str = '<div style="width:120px;height:100px;line-height:40px; text-align: center;background:transparent;">';
                str += '<p style="border-bottom: 1px dashed #445a94;font-size: 14px;color:#8ab7ed;padding-top: 10px;"><span style="color:#2e6cef;font-size:20px;margin:0 10px;font-weight: bold;">' + num + '</span>家</p> ';
                str += '<p style="color:#8ab7ed;font-size: 14px;">占<span style="color:#2e6cef; font-size:20px;margin:0 10px;">0%</span></p></div>';
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0] / 2);
                var marginH = Math.ceil(size.contentSize[1] / 2);
                dom.style.marginLeft = '-' + marginW + 'px';
                dom.style.marginTop = '-' + marginH + 'px';
                return ['50%', '50%'];
            },
            alwaysShowContent: true,
            backgroundColor: 'transparent',	//设置提示框的背景色
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,	//关闭 hover 在扇区上的放大动画效果。
                cursor: 'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
                silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                label: {
                    normal: {
                        show: false,
                        position: 'default'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 277, name: '直接访问'}
                ]
            }
        ]
    };
    myChart8.setOption(option8);
    myChart8.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });

    var option9 = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            // formatter:'{b0}<br />{c0}<br />{b1}<br /> {c1}'
            formatter:function (params) {
                // console.log(params);
              /*  var res='<div><p>时间：'+params[0].name+'</p></div>'
                for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].seriesName+':'+params[i].data+'</p>'
                }*/
                return params[0].name+'<br />'+params[0].seriesName+':'+params[0].data+'<br />'+
                    params[1].seriesName+':'+params[1].data+'<br />'+
                    params[2].seriesName+':'+params[2].data;
            }
        },
        legend: {
            show: true,
            type: 'plain',
            // orient: 'vertical',
            right: '3%',
            itemWidth: 15,
            itemHeight: 15,
            textStyle: {
                color: '#b1cefc'
            },
            data: ['未核查', '已按时核查', '已逾期核查'],
            selected: {
                '未核查': true,
                '已按时核查': true,
                '已逾期核查': true
            }

        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['中国质量\n认证中心', '福建省环境\n科学研究院', '北京卡本能源\n咨询有限公司', '福建省中创碳投\n节能科技有限公司',
                    '福建省煤炭工业\n科学研究所', '中国船级社\n质量认证公司', '福建省节能\n监察中心'],
                axisTick: {    //坐标轴刻度
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                    /* lineStyle: {       // 使用深浅的间隔色
                         color: ['yel']   //  改变分隔区轴线颜色
                     }*/
                },
                splitArea: {
                    show: true,
                    areaStyle: {          //  改变分隔区背景颜色
                        color: ['#172650', '#1c2d5b'],
                        opacity: 0.9
                        // shadowColor:'#172650'
                    }
                },
                axisLabel: {            //单位刻度的颜色
                    color: '#96c7ff',
                    fontSize: 14,
                    interval: 0,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 80,
                axisTick: {
                    show: false
                },
                axisLabel: {           //单位刻度的颜色
                    color: '#96c7ff',
                    fontSize: 14,
                    interval: 0
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                splitLine: {
                    show: true,  //  改变分隔线颜色
                    lineStyle: {  // 使用深浅的间隔色
                        color: ['#96c7ff'],
                        width: 1,
                        type: 'dashed',
                        opacity: 0.6
                    }

                }

            },
            {
                type: 'value',
                min: 0,
                max: 80,
                axisTick: {
                    show: false
                },
                axisLabel: {           //单位刻度的颜色
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2f4379'
                    }
                },
                splitLine: {
                    show: true,  //  改变分隔线颜色
                    lineStyle: {  // 使用深浅的间隔色
                        color: ['#96c7ff'],
                        width: 1,
                        type: 'dashed',
                        opacity: 0.6
                    }

                }

            }
        ],
        series: [
            {
                type: 'bar',
                name: '未核查',
                barWidth: '30%',
                stack: 'num',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#438cfb'},
                                {offset: 0.5, color: '#20bdfd'},
                                {offset: 1, color: '#02e8ff'}
                            ]
                        )
                    }
                    /*emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }*/
                },
                data: [36, 0, 56, 70, 12, 54, 32]
            },
            {
                type: 'bar',
                name: '已按时核查',
                barWidth: '30%',
                stack: 'num',
                // barMinHeight:10,
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#28d57a'},
                                {offset: 0.5, color: '#7ce1ac'},
                                {offset: 1, color: '#dcebe3'}
                            ]
                        )
                    }
                    /*emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }*/
                },
                data: [0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'bar',
                name: '已逾期核查',
                barWidth: '30%',
                stack: 'num',
                // barGap: '-100%', // Make series be overlap
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        color: '#ffffff',
                        fontSize: 15
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#f9f3eb'},
                                {offset: 0.5, color: '#f8c57c'},
                                {offset: 1, color: '#ff9c0e'}
                            ]
                        )
                    }
                    /*emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }*/
                },
                data: [10, 0, 15, 6, 8, 11, 15]
            },
            {
                name: '总计',
                type: 'bar',
                stack: 'num',
                label: {
                    normal: {
                        offset:['50', '80'],
                        show: true,
                        position: 'insideBottom',
                        formatter:'{c}',
                        textStyle:{
                            color: '#ffffff',
                            fontSize: 15
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(128, 128, 128, 0)'
                    }
                },
                data: [52,0,58,76,16,68,37]
            }
        ]
    };
    myChart9.setOption(option9);

    window.onresize = function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();

        myChart6.resize();
        myChart7.resize();
        myChart8.resize();
        myChart9.resize();
    }
}
