function openWin(src) {
    api.openWin({
        name: src,
        url: src + '.html',
        animation: {
            type: 'fade',
            subType: 'from_left',
            duration: 300
        },
    });
}

function openMaxPic(src) {
    api.openFrame({
        name: 'maxpic',
        url: 'maxpic.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        animation: {
            type: 'fade',
            subType: 'from_left',
            duration: 300
        },
        pageParam: {
            'src': src
        },
        bgColor: 'rgba(0,0,0,0.7)',
    });
}

function openFrame(src) {
    api.openFrame({
        name: src,
        url: src + '.html',
        rect: {
            x: 0,
            y: 0,
            w: api.winWidth,
            h: api.winHeight
        },
        pageParam: {
            set: src
        },
        animation: {
            type: 'fade',
            subType: 'from_bottom',
            duration: 300
        },
        bounces: false,
        bgColor: 'rgba(0,0,0,0)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
}

function closeFrame() {
    api.closeFrame({});
}

function openTab(tabState) {
    api.openFrame({
        name: 'tab_bar',
        url: 'tab_bar.html',
        rect: {
            x: (api.winWidth - 550) / 2,
            marginBottom: 0,
            w: 550,
            h: 90
        },
        bounces: false,
        reload: true,
        pageParam: {
            tabState
        },
        animation: {
            type: 'push',
            subType: 'from_bottom',
            duration: 1000
        },
        // bgColor: 'rgba(0,0,0,0.4)',
    });
}

// tabBar打开窗口
let setTabBarSettime = ''
function set_tabBar(num, type, params, reload, cssNum) {
    clearTimeout(setTabBarSettime)
    let _type = type ? type : 'tab'
    // tabBar 动画
    if (cssNum) {
        api.sendEvent({
            name: 'set_tabBarcss',
            extra: cssNum
        })
    }
    // tabBar 打开窗口
    if (num == -1) return
    if (_type == 'notab') {
        /* openNoTab => * */
        api.sendEvent({
            name: 'openNoTab'
        })
        api.openFrame({
            name: num,
            url: num + '.html',
            animation: {
                type: 'fade',
                duration: 300
            },
            pageParam: params ? params : '',
            reload: reload ? true : false
        });
        if (params) {
            /* 把tab_bar放到最后面 */
            api.bringFrameToFront({
                from: num,
            });
        } else {
            /* 把tab_bar放到最前面 */
            api.bringFrameToFront({
                from: 'tab_bar',
            });
        }
    } else if (type == 'win') {
        api.openWin({
            name: num,
            url: num + '.html',
            animation: {
                type: 'fade',
                duration: 300
            },
            pageParam: params ? params : '',
            reload: reload ? true : false
        });
    } else {
        if (num == 4) {
            $api.rmStorage('user_info')
        }
        if (num > 0) {
            /* 初始化动画 => index */
            api.sendEvent({
                name: 'open'
            })
            let frames = api.frames();
            let flag = true
            for (let i in frames) {
                if (frames[i].name == 'index' + num) {
                    flag = false
                }
            }
            if (frames.length > 2) {
                if (frames[frames.length - 1].name != 'index1' && frames[frames.length - 1].name != 'index2' && frames[frames.length - 1].name != 'index3' && frames[frames.length - 1].name != 'index4' && num == frames[frames.length - 2].name.substring(5)) {
                    flag = false
                } else {
                    flag = true
                }
            }
            if (flag) {
                api.openFrame({
                    name: 'index' + num,
                    url: 'index' + num + '.html',
                    animation: {
                        type: 'fade',
                        duration: 300
                    },
                    bgColor: '#eeeee',
                    reload: true
                });
                $api.byId('btn1').style.opacity = 0;
                $api.byId('btn2').style.opacity = 0;
                $api.byId('btn3').style.opacity = 0;
                $api.byId('btn4').style.opacity = 0;
                $api.byId('btn' + num).style.opacity = 1;
                /* 把tab_bar放到最前面 */
                api.bringFrameToFront({
                    from: 'tab_bar',
                });
                setTabBarSettime = setTimeout(() => {
                    for (let i in frames) {
                        if (frames[i].name != 'tab_bar' && frames[i].name != 'index' + num) {
                            api.closeFrame({
                                name: frames[i].name
                            })
                        }
                    }
                }, 400)
            }
        } else {
            toast('coming soon')
        }
    }
}

function openHeader() {
    api.openFrame({
        name: 'header',
        url: 'header.html',
        rect: {
            x: 0,
            y: 0,
            w: 150,
            h: 96
        },
        bounces: false,
    });
}

function openMaxVideo(src) {
    api.openFrame({
        name: 'maxvideo',
        url: 'maxvideo.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        animation: {
            type: 'fade',
            subType: 'from_left',
            duration: 300
        },
        pageParam: {
            'src': src
        },
        bgColor: 'rgba(0,0,0,0)',
    });
}

function openMaxV(src) {
/*     api.showProgress({
        title: '努力加载中...',
        text: '',
        modal: true
    }); */
    api.openFrame({
        name: 'maxv',
        url: 'maxv.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        animation: {
            type: 'fade',
            subType: 'from_left',
            duration: 450
        },
        pageParam: {
            'src': src
        },
        bgColor: 'rgba(0,0,0,0)',
    });
}

function openMax(src) {
    api.openFrame({
        name: 'maxfrm',
        url: 'maxfrm.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        animation: {
            type: 'fade',
            subType: 'from_left',
            duration: 600
        },
        pageParam: {
            'src': src
        },
        bgColor: 'rgba(0,0,0,0)',
    });
}

function openNavi(num) {
    api.openFrame({
        name: 'navi0',
        url: 'navi0.html',
        rect: {
            x: 800,
            y: 0,
            w: api.winWidth,
            h: api.winHeight
        },
        pageParam: {
            "set": num,
        },
        animation: {
            type: 'push',
            subType: 'from_right',
            duration: 600
        }
    });
}

function closeNavi() {
    api.closeFrame({
        name: 'navi0'
    });
}

function closeWin() {
    api.closeWin({});
}

function openIndex1() {
    api.sendEvent({
        name: 'tabState',
        extra: {
            set: '0',
        }
    });
    $api.setStorage('tabState', '0');
    api.openWin({
        name: 'index',
        url: 'index.html',
        animation: {
            type: 'fade',
            subType: 'from_left',
            duration: 600
        }
    });
}

function closeToIndex() {
    api.sendEvent({
        name: 'tabState',
        extra: {
            set: '0',
        }
    });
    $api.setStorage('tabState', '0');
    api.closeToWin({
        name: 'index'
    });
}

function closeToWin() {
    api.closeToWin({
        name: 'index'
    });
}

function toast(con) {
    let msg = con ? con : "coming soon"
    api.toast({
        msg,
        duration: 2000,
        location: 'bottom'
    });
}

function openIndex31() {
    api.openWin({
        name: 'index3',
        url: 'index3.html',
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function openIndex32() {
    api.openWin({
        name: 'index32',
        url: 'index32.html',
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function openIndex33() {
    api.openWin({
        name: 'index33',
        url: 'index33.html',
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function openIndex34() {
    api.openWin({
        name: 'index34',
        url: 'index34.html',
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function openIndex35() {
    api.openWin({
        name: 'index35',
        url: 'index35.html',
        pageParam: {
            'set': 0
        },
        reload: true,
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function openIndex36() {
    api.openWin({
        name: 'index36',
        url: 'index36.html',
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function openIndex37() {
    api.openWin({
        name: 'index37',
        url: 'index37.html',
        animation: {
            type: 'fade',
            subType: 'from_right',
            duration: 600
        }
    });
}

function quitLogin() {
    api.sendEvent({
        name: 'tabState',
        extra: {
            set: '0',
        }
    });
    $api.setStorage('tabState', '0');
    $api.setStorage('loginState', '2');
    api.closeToWin({
        name: 'login'
    });
}

function offline() {
    var connectionType = api.connectionType
    if (connectionType == "none") {
        api.toast({
            msg: '网络未连接',
            duration: 2000,
            ocation: 'bottom'
        });
    }
    return connectionType
}

// 单个网页实现单击屏幕发出声音
function playSound(e) {
    // 音效
    let thisNode = document.getElementById("click_bg_mp3");
    if (thisNode) {
        thisNode.parentNode.removeChild(thisNode)
    }
    let obj = document.createElement('audio');
    obj.id = 'click_bg_mp3'
    obj.src = '../res/click.wav'
    obj.autoplay = true
    document.body.appendChild(obj);

    // 特效-gif
    // let thisNode2 = document.getElementById("click_bg_gif");
    // if (thisNode2) {
    //     thisNode2.parentNode.removeChild(thisNode2)
    // }
    // let obj2 = document.createElement('img');
    // obj2.id = 'click_bg_gif'
    // obj2.src = '../res/click_gif.gif'
    // obj2.style = `width:175px;height:200px;z-index:99;position: fixed;left:${e.pageX - (175 / 2)}px;top:${e.pageY - (200 / 2)}px;`
    // document.body.appendChild(obj2);
    // setTimeout(() => {
    //     document.getElementById("click_bg_gif").style.display = 'none'
    // }, 480);
}

//调用
window.onclick = function (e) {
    playSound(e);
}


/**
 * 动态创建tab
 * @param {层级；0为关闭按钮 在需要的页面写closeFn函数，1为主页按钮，2为返回和主页按钮，3为0+2} tier 
 * @param {窗口类型；win或frame} type 
 */
function tabCreate(tier, type) {
    let flag = document.getElementById('topTab')
    let tabObj = document.createElement('div');
    tabObj.style.zIndex = "9";
    tabObj.style.position = 'fixed';
    tabObj.style.right = '1.4%';
    tabObj.style.top = '0';
    tabObj.style.width = '15%';
    tabObj.style.height = 'auto';
    tabObj.style.display = 'flex';
    tabObj.style.justifyContent = 'flex-end';
    tabObj.style.alignItems = 'center';
    tabObj.setAttribute('id', 'topTab')

    let tabHtml = `
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;" tapmode onclick="closeFn()"><img src="../image/icon/closebtn.png" style="width: 100%;height: auto;"></div>  
                `

    let tabHtml1 = `
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;" tapmode onclick="tabFn(3,'${type}')"><img src="../image/icon/indexbtn.png" style="width: 100%;height: auto;"></div>
                `

    let tabHtml2 = `
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;" tapmode onclick="tabFn(1,'${type}')"><img src="../image/icon/backbtn.png" style="width: 100%;height: auto;"></div>  
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;margin-left:15px" tapmode onclick="tabFn(3,'${type}')"><img src="../image/icon/indexbtn.png" style="width: 100%;height: auto;"></div>
                `

    let tabHtml3 = ` 
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;" tapmode onclick="closeFn()"><img src="../image/icon/closebtn.png" style="width: 100%;height: auto;"></div>  
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;margin-left:15px" tapmode onclick="tabFn(1,'${type}')"><img src="../image/icon/backbtn.png" style="width: 100%;height: auto;"></div>  
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;margin-left:15px" tapmode onclick="tabFn(3,'${type}')"><img src="../image/icon/indexbtn.png" style="width: 100%;height: auto;"></div>
                `
    let tabHtml4 = ` 
                <div style="width: 25%;height: auto;display: flex;justify-content: center;align-items: center;margin-left:15px" tapmode onclick="tabFn(1,'${type}')"><img src="../image/icon/backbtn.png" style="width: 100%;height: auto;"></div>  
                `
    if (!flag) {
        document.body.appendChild(tabObj);
    } else {
        tabObj = flag
    }


    switch (tier) {
        case 0:
            $api.html(tabObj, tabHtml)
            break;
        case 1:
            $api.html(tabObj, tabHtml1)
            break;
        case 2:
            $api.html(tabObj, tabHtml2)
            break;
        case 3:
            $api.html(tabObj, tabHtml3)
            break;
        case 4:
            $api.html(tabObj, tabHtml4)
            break;
    }
}

/* tab函数 */
function tabFn(params, type) {
    if (type == 'win') {
        switch (params) {
            case 1:
                api.closeWin();
                break;
            case 3:
                $api.rmStorage('user_info')
                api.sendEvent({
                    name: 'set_tabBarcss',
                })
                api.sendEvent({
                    name: 'closeToWin'
                })
                api.closeToWin({
                    name: 'index',
                    animation: {
                        type: "fade",                //动画类型（详见动画类型常量）
                        subType: "from_right",       //动画子类型（详见动画子类型常量）
                        duration: 300                //动画过渡时间，默认300毫秒
                    }
                });
                break;
        }
    } else {
        switch (params) {
            case 1:
                api.sendEvent({
                    name: 'closeFrame'
                })
                api.closeFrame();
                break;
            case 3:
                $api.rmStorage('user_info')
                api.sendEvent({
                    name: 'set_tabBarcss',
                })
                let frames = api.frames();
                for (let i in frames) {
                    if (frames[i].name != 'tab_bar') {
                        api.closeFrame({
                            name: frames[i].name
                        })
                    }
                }
                api.closeToWin({
                    name: 'index',
                    animation: {
                        type: "fade",                //动画类型（详见动画类型常量）
                        subType: "from_right",       //动画子类型（详见动画子类型常量）
                        duration: 300                //动画过渡时间，默认300毫秒
                    }
                });
                break;
        }
    }

}

/* loding函数 */
function loding(type, text) {
    let _text = text ? text : 'Loding...'
    let tabObj = document.createElement('div');
    $api.addCls(tabObj, 'mask-wrapper')
    $api.attr(tabObj, 'id', 'loding-wrapper');
    document.body.appendChild(tabObj);
    $api.html(tabObj, `<div class="mask-loding flex-d">
                            <div class="loader-17"></div>
                            <div class="text">${_text}</div>
                        </div>`)
    if (type != 'hide') {
        $api.css($api.byId('loding-wrapper'), 'z-index:99;opacity:1');
    } else {
        $api.css($api.byId('loding-wrapper'), 'z-index:-1;opacity:0');
    }
}

/* 遮罩层关闭 */
function maskClose(id) {
    document.getElementById(id).parentNode.style.display = 'none'
}