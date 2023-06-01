//接口域名
let apiBaseUrl = 'http://snow.ublue.xyz/'
let apiBaseUrl2 = 'http://snow.ublue.xyz'

//token
let adminToken = $api.getStorage('admintoken');

//窗口可视宽度
let winW = document.body.clientWidth;

// 正则表达式
function checkSubmit_Tel(val) {
    const reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; //11位手机号码正则
    return new Promise((resolve, reject) => {
        if (val == "") {
            toast("请填写您的手机号码！");
            resolve(0)
        } else if (!reg_tel.test(val)) {
            toast("请正确填写您的手机号码！");
            resolve(0)
        } else {
            resolve(1)
        }
    })
}

//时间戳转年月日时分秒 注：时间戳为10位需time*1000，时间戳为13位的话不需乘1000
function getTime(time) {
    let now = new Date(time)
    let nian = now.getFullYear()
    let yue = (now.getMonth() + 1).toString().padStart(2, '0')
    let ri = now.getDate().toString().padStart(2, '0')
    let shi = now.getHours().toString().padStart(2, '0')
    let fen = now.getMinutes().toString().padStart(2, '0')
    let miao = now.getSeconds().toString().padStart(2, '0')
    return `${nian}-${yue}-${ri} ${shi}:${fen}:${miao}`
}

//获取今天日期，格式YYYY-MM-DD
function getNowFormatDate(type, cn) {
    let date = new Date();
    let segmentation = type ? type : "-"
    let seperator1 = segmentation;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = '';
    if (seperator1 == 'cn') {
        currentdate = year + cn[0] + month + cn[1] + strDate + cn[2]
    } else {
        currentdate = year + seperator1 + month + seperator1 + strDate
    }
    return currentdate;
}

//网络判断
function offline() {
    let connectionType = api.connectionType
    if (connectionType == "none") {
        api.toast({
            msg: '网络未连接',
            duration: 2000,
            ocation: 'bottom'
        });
    }
    return connectionType
}

/* 获取季节 */
function _judgeFn() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let judge = getjq(year, month, strDate)

    return judge
}
/* 二十四节气算法(年,月,日) */
function getjq(yyyy, mm, dd) {
    mm = mm - 1;
    let sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
    let solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
    let solarTerms = "";
    //　　此方法是获取该日期是否为某节气
    let tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    let tmp2 = tmp1.getUTCDate();
    if (tmp2 == dd)
        solarTerms = solarTerm[mm * 2 + 1];
    tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    tmp2 = tmp1.getUTCDate();
    if (tmp2 == dd)
        solarTerms = solarTerm[mm * 2];
    if (yyyy == '2022' && mm == '08' && dd == '07') {
        solarTerms = '白露'
    } else if (yyyy == '2022' && mm == '08' && dd == '08') {
        solarTerms = ''
    }
    solarTerms = ''

    //　　此方法可以获取该日期处于某节气
    while (solarTerms == '') {
        let tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
        let tmp2 = tmp1.getUTCDate();
        if (tmp2 == dd) solarTerms = solarTerm[mm * 2 + 1];
        tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
        tmp2 = tmp1.getUTCDate(); if (tmp2 == dd) solarTerms = solarTerm[mm * 2];
        if (dd > 1) {
            dd = dd - 1;
        } else {
            mm = mm - 1;
            if (mm < 0) {
                yyyy = yyyy - 1; mm = 11;
            }
            dd = 31;
        }
        if (solarTerms == '立春' || solarTerms == '雨水' || solarTerms == '惊蛰' || solarTerms == '春分' || solarTerms == '清明' || solarTerms == '谷雨') {
            solarTerms = '春季'
        } else if (solarTerms == '立夏' || solarTerms == '小满' || solarTerms == '芒种' || solarTerms == '夏至' || solarTerms == '小暑' || solarTerms == '大暑') {
            solarTerms = '夏季'
        } else if (solarTerms == '立秋' || solarTerms == '处暑' || solarTerms == '白露' || solarTerms == '秋分' || solarTerms == '寒露' || solarTerms == '霜降') {
            solarTerms = '秋季'
        } else if (solarTerms == '立冬' || solarTerms == '小雪' || solarTerms == '大雪' || solarTerms == '冬至' || solarTerms == '小寒' || solarTerms == '大寒') {
            solarTerms = '冬季'
        }
    }

    return solarTerms;
}

//ajax封装
function ajaxJson(type, url, params) {
    return new Promise((resolve, reject) => {
        let wifiCode = offline()
        let url2 = apiBaseUrl2 + url
        let type2 = type
        let data2 = JSON.stringify(params) != '{}' ? params : { values: {} }
        let headers2 = {}

        if (adminToken != '' && adminToken != null && adminToken != undefined) {
            if (data2.values != '' && data2.values != null && data2.values != undefined) {
                data2.values.token = adminToken
                headers2 = {
                    'Token': adminToken
                }
            } else if (data2.files != '' && data2.files != null && data2.files != undefined) {
                data2.files.token = adminToken
                headers2 = {
                    'Token': adminToken
                }
            } else if (data2.body != '' && data2.body != null && data2.body != undefined) {
                data2.body.token = adminToken
                headers2 = {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Token': adminToken
                }
            }
        } else {
            if (data2.body != '' && data2.body != null && data2.body != undefined) {
                headers2 = {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Token': adminToken
                }
            }
        }

        api.ajax({
            url: url2, //请求地址
            method: type2, //异步请求方法类型
            cache: false, //是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在get请求有效
            timeout: 3, //超时时间，单位秒
            dataType: 'json', //返回数据类型。若该字段传json，接收到服务器返回的数据后会尝试将其转换成JSON对象，如果无法转成JSON对象，将返回数据类型错误
            data: data2, //POST 数据，method 为 get 时不传。以下字段除了 values 和 files 可以同时使用，其它参数都不能同时使用。
            headers: headers2,
        }, function (ret, err) {
            if (ret) {
                if (ret.code == 1) {
                    resolve(ret)
                } else {
                    reject(ret)
                    console.log(JSON.stringify(ret))
                    console.log(JSON.stringify(data2))
                    console.log(`ret:["${url2}"]`)
                }
            } else {
                if (err.status) {
                    alert('错误码：' + err.status.toString())
                }
                if (err.statusCode == 0) {
                    alert(err.msg)
                }
                reject(err)
                console.log(JSON.stringify(err))
                console.log(JSON.stringify(data2))
                console.log(`err:["${url2}"]`)
            }
        });
    })
}

/* 顾问登录 => index */
let login = params => {
    return ajaxJson('POST', '/addons/talk/index/login', {
        values: params
    })
}

/* 顾问创建用户 => index3-1 */
let register = params => {
    return ajaxJson('POST', '/addons/talk/index/create_profile', {
        values: params
    })
}

/* 用户信息修改 => index3-6 */
let update_profile = params => {
    return ajaxJson('POST', '/addons/talk/index/update_profile', {
        values: params
    })
}

/* 用户列表 => index3-2 */
let client_list = params => {
    return ajaxJson('POST', '/addons/talk/index/get_client_list', {
        values: params
    })
}

/* 用户详情 => index3-6 */
let get_client_detail_A = params => {
    return ajaxJson('POST', '/addons/talk/index/get_client_detail', {
        values: params
    })
}

/* 保存记录 => index3-5 */
let save_record = params => {
    return ajaxJson('POST', '/addons/talk/skin/save_record', {
        body: params
    })
}

/* 记录列表 => index3-6 */
let get_user_record = params => {
    return ajaxJson('GET', '/addons/talk/skin/get_user_record_list', {
        values: params
    })
}

/* 记录详情 => index3-7 */
let get_record_detail = params => {
    return ajaxJson('POST', '/addons/talk/skin/get_user_record_detail', {
        values: params
    })
}

//和风天气API_城市查询
function getQweather_city(successfn) {
    api.ajax({
        url: 'https://geoapi.qweather.com/v2/city/lookup?location=kunming&adm=yunnan&key=3298c92c5a3e43f88e9b5b9615912e29',
        method: 'get',
        tag: 'tag2',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        timeout: 3,
    }, function (ret, err) {
        if (ret) {
            successfn(ret)
        } else {
            if (err.code != '' || err.code != null || err.code != undefined) {
                api.toast({
                    msg: '请检查网络',
                    duration: 2000,
                    location: 'bottom'
                });
            } else {
                alert(JSON.stringify(err.msg))
            }
            console.log('ajax失败:' + JSON.stringify(url) + '\n' + JSON.stringify(err));
        }
    });
}

//和风天气API_天气查询
function getQweather(id, successfn) {
    api.ajax({
        url: 'https://devapi.qweather.com/v7/weather/now?location=' + id + '&key=3298c92c5a3e43f88e9b5b9615912e29',
        method: 'get',
        tag: 'tag2',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        timeout: 3,
    }, function (ret, err) {
        if (ret) {
            successfn(ret)
        } else {
            if (err.code != '' || err.code != null || err.code != undefined) {
                api.toast({
                    msg: '请检查网络',
                    duration: 2000,
                    location: 'bottom'
                });
            } else {
                alert(JSON.stringify(err.msg))
            }
            console.log('ajax失败:' + JSON.stringify(url) + '\n' + JSON.stringify(err));
        }
    });
}