const project_code = { //项目code
    a: "督脉元神",
    b: "脑轻松",
    c: "腰肾健",
    d: "脏腑和",
    e: "肩舒雅",
    f: "蜜臀清毒",
    g: "舒心健胸",
    h: "肋骨净",
    i: "骨轻灵",
    j: "三重净淋",
    k: "",
    // k: "蜜十八",
    l: "舒淋康颈",
    m: "",
    // m: "美颜塑",
}

const project_from = { //项目和描述
    a: {
        name: "阳虚体质",
        data: {
            a1: {
                project: ["i", "a"],
                symptom: "正阳之气虚"
            },
            a2: {
                project: ['e', 'd', 'c', 'f', 'i'],
                symptom: "背部卫阳不足"
            },
            a3: {
                project: ['c'],
                symptom: "肾阳不足"
            },
            a4: {
                project: ["c", "a"],
                symptom: "阳气不足"
            },
            a5: {
                project: ["l", "a", "j"],
                symptom: "卫表不固"
            },
            a6: {
                project: ["d"],
                symptom: "肠胃功能弱"
            },
            a7: {
                project: ["d"],
                symptom: "肠胃寒"
            }
        }
    },
    b: {
        name: "阴虚体质",
        data: {
            b1: {
                project: ["j"],
                symptom: "阳热之气外浮"
            },
            b2: {
                project: ["h", "g"],
                symptom: "肝阳上亢、虚火上浮"
            },
            b3: {
                project: ["g"],
                symptom: "阴液不足"
            },
            b4: {
                project: ["g"],
                symptom: "心火旺盛"
            },
            b5: {
                project: ["d"],
                symptom: "阴血亏少"
            },
            b6: {
                project: ["j"],
                symptom: "阳气旺盛"
            },
            b7: {
                project: ["h"],
                symptom: "肝火旺"
            },
            b8: {
                project: ["a", "d"],
                symptom: "表虚不固、肾气虚"
            }
        }
    },
    c: {
        name: "气虚体质",
        data: {
            c1: {
                project: ["c", "l"],
                symptom: "肾气虚弱，运行不畅"
            },
            c2: {
                project: ["l"],
                symptom: "肺气渲发不畅"
            },
            c3: {
                project: ["g"],
                symptom: "心气不足、气血亏乏"
            },
            c4: {
                project: ["b", "e"],
                symptom: "清阳之气阻滞"
            },
            c5: {
                project: ["l", "a", "j"],
                symptom: "卫表不固"
            },
            c6: {
                project: ["e", "g"],
                symptom: "气血不足"
            },
            c7: {
                project: ["c", "g"],
                symptom: "心血耗伤、肺气虚"
            },
            c8: {
                project: ["a", "d"],
                symptom: "表虚不固、水湿运化不畅"
            }
        }
    },
    d: {
        name: "痰湿体质",
        data: {
            d1: {
                project: ["h", "g"],
                symptom: "痰湿堵心脉、心阳失振"
            },
            d2: {
                project: ["i", "a"],
                symptom: "水湿运化失调"
            },
            d3: {
                project: ["d"],
                symptom: "脾胃痰湿瘀堵"
            },
            d4: {
                project: ["b"],
                symptom: "浊阴聚于头部"
            },
            d5: {
                project: ["j"],
                symptom: "脾失健运、代谢不利"
            },
            d6: {
                project: ["d", "l"],
                symptom: "脾胃湿气重"
            },
            d7: {
                project: ["l", "e"],
                symptom: "痰湿之邪瘀结"
            },
            d8: {
                project: ["d"],
                symptom: "胃气重，脾阳失和"
            }
        }
    },
    e: {
        name: "湿热体质",
        data: {
            e1: {
                project: ["j"],
                symptom: "湿热浊气上浮"
            },
            e2: {
                project: ["j"],
                symptom: "湿热阻滞于表"
            },
            e3: {
                project: ["h"],
                symptom: "肝胆湿热瘀堵"
            },
            e4: {
                project: ["d"],
                symptom: "湿热留滞于肠"
            },
            e5: {
                project: ["j", "c"],
                symptom: "下焦湿热"
            },
            e6: {
                project: ["d", "f"],
                // project: ["k", "d", "f"],
                symptom: "子宫寒湿重"
            },
            e7: {
                project: ["c"],
                symptom: "下焦湿热"
            }
        }
    },
    f: {
        name: "血瘀体质",
        data: {
            f1: {
                project: ["a"],
                symptom: "血瘀积于经脉"
            },
            f2: {
                project: ["m"],
                symptom: "血不归正化"
            },
            f3: {
                project: ["b", "e", "d", "i", "c"],
                symptom: "脑部血、氧供给不足"
            },
            f4: {
                project: ["h"],
                symptom: "血瘀于表"
            },
            f5: {
                project: ["m"],
                symptom: "肝脏瘀滞、情志郁结"
            },
            f6: {
                project: ["b"],
                symptom: "血运乏力迟滞"
            },
            f7: {
                project: ["l"],
                symptom: "血脉瘀滞"
            }
        }
    },
    g: {
        name: "特禀体质",
        data: {
            g1: {
                project: ["b", "j"],
                symptom: "卫气虚损"
            },
            g2: {
                project: ["b", "l"],
                symptom: "风寒侵犯，水气凝结"
            },
            g3: {
                project: ["l"],
                symptom: "肺经不畅"
            },
            g4: {
                project: ["j"],
                symptom: "肾脏气虚"
            },
            g5: {
                project: ["j", "d"],
                symptom: "风热之邪郁于皮肤"
            },
            g6: {
                project: ["c"],
                symptom: "肾气运行不畅"
            },
            g7: {
                project: ["a"],
                symptom: "卫气虚弱、内有邪热"
            }
        }
    },
    h: {
        name: "气郁体质",
        data: {
            h1: {
                project: ["f", "h"],
                symptom: "机体气化功能低"
            },
            h2: {
                project: ["b"],
                symptom: "肝脏疏泄能力弱 "
            },
            h3: {
                project: ["g", "h"],
                symptom: "肝气瘀堵不疏"
            },
            h4: {
                project: ["c", "f"],
                symptom: "肾气亏损"
            },
            h5: {
                project: ["g"],
                symptom: "郁气堵肝、肝气难疏"
            },
            h6: {
                project: ["g", "h"],
                symptom: "胸闷不疏"
            },
            h7: {
                project: ["l"],
                symptom: "气机瘀滞于喉"
            }
        }
    },
    i: {
        name: "平和体质",
        data: {
            i1: {
                project: ["a", "b"],
                symptom: "气血不旺"
            },
            i2: {
                project: ["c", "l"],
                symptom: "肾气虚弱，运行不畅"
            },
            i3: {
                project: ["c", "g"],
                symptom: "心血耗伤、肺气虚"
            },
            i4: {
                project: ["f"],
                symptom: "机体气化功能低"
            },
            i5: {
                project: ["c", "a"],
                symptom: "阳气不足"
            },
            i6: {
                project: ["j"],
                symptom: "肝肾阴虚"
            },
            i7: {
                project: ["e", "b"],
                symptom: "忧思过虑、气血不通"
            },
            i8: {
                project: ["b"],
                symptom: "血运乏力迟滞"
            }
        }
    }
}

let projectToScore = () => {

    /****** 数据获取start ******/
    let scoreData = { // 获取到的得分
        a: {
            a1: parseInt($api.getStorage('project_a1')),
            a2: parseInt($api.getStorage('project_a2')),
            a3: parseInt($api.getStorage('project_a3')),
            a4: parseInt($api.getStorage('project_a4')),
            a5: parseInt($api.getStorage('project_a5')),
            a6: parseInt($api.getStorage('project_a6')),
            a7: parseInt($api.getStorage('project_a7')),
        },
        b: {
            b1: parseInt($api.getStorage('project_b1')),
            b2: parseInt($api.getStorage('project_b2')),
            b3: parseInt($api.getStorage('project_b3')),
            b4: parseInt($api.getStorage('project_b4')),
            b5: parseInt($api.getStorage('project_b5')),
            b6: parseInt($api.getStorage('project_b6')),
            b7: parseInt($api.getStorage('project_b7')),
            b8: parseInt($api.getStorage('project_b8')),
        },
        c: {
            c1: parseInt($api.getStorage('project_c1')),
            c2: parseInt($api.getStorage('project_c2')),
            c3: parseInt($api.getStorage('project_c3')),
            c4: parseInt($api.getStorage('project_c4')),
            c5: parseInt($api.getStorage('project_c5')),
            c6: parseInt($api.getStorage('project_c6')),
            c7: parseInt($api.getStorage('project_c7')),
            c8: parseInt($api.getStorage('project_c8')),
        },
        d: {
            d1: parseInt($api.getStorage('project_d1')),
            d2: parseInt($api.getStorage('project_d2')),
            d3: parseInt($api.getStorage('project_d3')),
            d4: parseInt($api.getStorage('project_d4')),
            d5: parseInt($api.getStorage('project_d5')),
            d6: parseInt($api.getStorage('project_d6')),
            d7: parseInt($api.getStorage('project_d7')),
            d8: parseInt($api.getStorage('project_d8')),
        },
        e: {
            e1: parseInt($api.getStorage('project_e1')),
            e2: parseInt($api.getStorage('project_e2')),
            e3: parseInt($api.getStorage('project_e3')),
            e4: parseInt($api.getStorage('project_e4')),
            e5: parseInt($api.getStorage('project_e5')),
            e6: parseInt($api.getStorage('project_e6')),
        },
        f: {
            f1: parseInt($api.getStorage('project_f1')),
            f2: parseInt($api.getStorage('project_f2')),
            f3: parseInt($api.getStorage('project_f3')),
            f4: parseInt($api.getStorage('project_f4')),
            f5: parseInt($api.getStorage('project_f5')),
            f6: parseInt($api.getStorage('project_f6')),
            f7: parseInt($api.getStorage('project_f7')),
        },
        g: {
            g1: parseInt($api.getStorage('project_g1')),
            g2: parseInt($api.getStorage('project_g2')),
            g3: parseInt($api.getStorage('project_g3')),
            g4: parseInt($api.getStorage('project_g4')),
            g5: parseInt($api.getStorage('project_g5')),
            g6: parseInt($api.getStorage('project_g6')),
            g7: parseInt($api.getStorage('project_g7')),
        },
        h: {
            h1: parseInt($api.getStorage('project_h1')),
            h2: parseInt($api.getStorage('project_h2')),
            h3: parseInt($api.getStorage('project_h3')),
            h4: parseInt($api.getStorage('project_h4')),
            h5: parseInt($api.getStorage('project_h5')),
            h6: parseInt($api.getStorage('project_h6')),
            h7: parseInt($api.getStorage('project_h7')),
        },
        i: {
            i1: parseInt($api.getStorage('project_i1')),
            i2: parseInt($api.getStorage('project_i2')),
            i3: parseInt($api.getStorage('project_i3')),
            i4: parseInt($api.getStorage('project_i4')),
            i5: parseInt($api.getStorage('project_i5')),
            i6: parseInt($api.getStorage('project_i6')),
            i7: parseInt($api.getStorage('project_i7')),
            i8: parseInt($api.getStorage('project_i8')),
        }
    }

    let answerCache = $api.getStorage('answerCache') ? $api.getStorage('answerCache') : [] // 答案缓存
    let answerCacheId = 0 // 答案缓存id
    if (answerCache.length != 0) {
        for (let i = 0; i < answerCache.length; i++) {
            if (!answerCache[i] || !answerCache[i].user) break;
            if (answerCache[i].user.id == JSON.parse($api.getStorage('user_info')).id) { // 如果人匹配
                answerCacheId = i
                for (let i in scoreData) {
                    for (let j in scoreData[i]) {
                        for (let k in answerCache[answerCacheId].answer) {
                            if (j == answerCache[answerCacheId].answer[k].name) {
                                scoreData[i][j] = answerCache[answerCacheId].answer[k][answerCache[answerCacheId].answer[k].name]
                            }
                        }
                    }
                }
                break;
            } else {
                answerCacheId = -1
            }
        }
    }

    console.log(JSON.stringify(scoreData));

    let scoreArray = [] // 得分数组
    let scoreQ = [] // 符合条件的题目
    for (let i in scoreData) { // 获取到有得分的键值对
        for (let j in scoreData[i]) {
            if (!isNaN(scoreData[i][j]) && scoreData[i][j] != "" && scoreData[i][j] != undefined && scoreData[i][j] != null && scoreData[i][j] != "NaN") {
                scoreArray.push(scoreData[i][j])
            }
        }
    }

    let scoreArray_Max = 0 // 是否有5分
    for (let i in scoreArray) {
        if (scoreArray[i] == 5) {
            scoreArray_Max = 1
            scoreArray = 5
            break
        }
    }

    // 如果没有5分就求最大值
    if (scoreArray_Max == 0) {
        scoreArray = Math.max(...scoreArray)
    }

    // console.log(scoreArray);

    for (let i in scoreData) { // push符合条件的题目
        for (let j in scoreData[i]) {
            if (scoreData[i][j] === scoreArray && i != 'i' || scoreData[i][j] !== 5 && i === 'i') {
                scoreQ.push(j)
            }
        }
    }

    // console.log(JSON.stringify(scoreQ));

    let scoreProject_from = [] // scoreQ的项目和描述数据
    for (let i in project_from) { // push code相同的项目
        for (let j in project_from[i].data) {
            for (let k in scoreQ) {
                if (j === scoreQ[k]) {
                    scoreProject_from.push({
                        [j]: project_from[i].data[j]
                    })
                    if ([j] == 'a2') {
                        project_from[i].data[j].project = []

                        if (answerCacheId == -1) { // 如果没有缓存
                            for (let a in $api.getStorage('project_a2_checkbox')) {
                                project_from[i].data[j].project.push($api.getStorage('project_a2_checkbox')[a])
                            }
                        } else {
                            for (let a in answerCache[answerCacheId].answer) {
                                for (let s in answerCache[answerCacheId].answer[a].project_a2_checkbox) {
                                    project_from[i].data[j].project.push(answerCache[answerCacheId].answer[a].project_a2_checkbox[s])
                                }

                            }
                        }
                    } else if ([j] == 'f3') {
                        project_from[i].data[j].project = []

                        if (answerCacheId == -1) { // 如果没有缓存
                            for (let a in $api.getStorage('project_f3_checkbox')) {
                                project_from[i].data[j].project.push($api.getStorage('project_f3_checkbox')[a])
                            }
                        } else {
                            for (let a in answerCache[answerCacheId].answer) {
                                for (let s in answerCache[answerCacheId].answer[a].project_f3_checkbox) {
                                    project_from[i].data[j].project.push(answerCache[answerCacheId].answer[a].project_f3_checkbox[s])
                                }

                            }
                        }
                    }
                }
            }
        }
    }

    // console.log(JSON.stringify(scoreProject_from));

    let scoreSymptom = [] //描述
    let scoreProject = [] //项目

    let scoreProject_Object = [] //处理过的scoreQ的项目和描述数据
    for (let i in scoreProject_from) { //格式化获取到的Array
        for (let j in scoreProject_from[i]) {
            scoreSymptom.push(scoreProject_from[i][j].symptom)
            scoreSymptom = Array.from(new Set(scoreSymptom)) //去重
            for (let l in scoreProject_from[i][j].project) {
                for (let k in project_code) {
                    if (scoreProject_from[i][j].project[l] === k) {
                        scoreProject_Object.push({
                            scoreQ: [j],
                            project: project_code[k],
                            project_code: k,
                            symptom: scoreProject_from[i][j].symptom
                        })
                        scoreProject.push(project_code[k])
                        scoreProject = Array.from(new Set(scoreProject)) //去重
                    }
                }
            }
        }
    }

    // console.log(JSON.stringify(scoreSymptom));
    // console.log(JSON.stringify(scoreProject_Object));
    /****** 数据获取end ******/


    /* 排序过的问题[根据切向体质>兼有体质] */
    let scoreSymptomSort = []

    let a2Symptom = $api.getStorage('project_a2_symptom') ? $api.getStorage('project_a2_symptom') : ''
    let f3Symptom  = $api.getStorage('project_f3_symptom') ? $api.getStorage('project_f3_symptom') : ''
    if(a2Symptom){ // push 疼痛部位
        for(let i in a2Symptom){
            scoreSymptomSort.push(a2Symptom[i])
            scoreSymptomSort = Array.from(new Set(scoreSymptomSort)) //去重
        }
    }

    if(f3Symptom){ // push 疼痛部位
        for(let i in f3Symptom){
            scoreSymptomSort.push(f3Symptom[i])
            scoreSymptomSort = Array.from(new Set(scoreSymptomSort)) //去重
        }
    }
    

    for (let i in scoreProject_Object) { // push切向体质的问题
        if (scoreProject_Object[i].scoreQ.toString(',').slice(0, 1) == type.id) {
            scoreSymptomSort.push(scoreProject_Object[i].symptom)
            scoreSymptomSort = Array.from(new Set(scoreSymptomSort)) //去重
        }
    }
    for (let i in scoreSymptom) { // push 剩下的问题
        if (scoreSymptomSort.length == 0) {
            scoreSymptomSort.push(scoreSymptom[i])
            scoreSymptomSort = Array.from(new Set(scoreSymptomSort)) //去重
        } else {
            for (let j in scoreSymptomSort) {
                if (scoreSymptom[i] != scoreSymptomSort[j]) {
                    scoreSymptomSort.push(scoreSymptom[i])
                    scoreSymptomSort = Array.from(new Set(scoreSymptomSort)) //去重
                }
            }
        }
    }

    // console.log(JSON.stringify(scoreSymptomSort));
    let str_scoreSymptom = ''
    for (let i in scoreSymptomSort) {
        str_scoreSymptom += `<div>${scoreSymptomSort[i]}</div>`
        problem.push(scoreSymptomSort[i])
    }
    str_scoreSymptom = str_scoreSymptom ? str_scoreSymptom : '<div>无需改善</div>'
    $('#question-wrapper').html(str_scoreSymptom)


    /* 排序过的项目[疼痛部位>核心5分>偏颇5分>核心3分>全部5分]而且最多不超过5个old */
    /* 排序过的项目[疼痛部位>核心5分>全部5分>偏颇5分>核心3分]而且最多不超过5个new */
    let scoreProjectSortMax5 = []

    let mainProject = ['e', 'c', 'b', 'd', 'f', 'i'] // 疼痛部位主要推荐项目顺序
    let a2Project = $api.getStorage('project_a2_checkbox') ? $api.getStorage('project_a2_checkbox') : ''
    let f3Project = $api.getStorage('project_f3_checkbox') ? $api.getStorage('project_f3_checkbox') : ''
    if (scoreProjectSortMax5.length < 1) { // 疼痛部位
        for (let i in mainProject) {
            if (a2Project) {
                for (let j in a2Project) {
                    if (mainProject[i] == a2Project[j]) {
                        if (scoreProjectSortMax5.length < 2) {
                            scoreProjectSortMax5.push(mainProject[i])
                        }
                    }
                }
            }
            if (f3Project) {
                for (let j in f3Project) {
                    if (mainProject[i] == f3Project[j]) {
                        if (scoreProjectSortMax5.length < 2) {
                            scoreProjectSortMax5.push(mainProject[i])
                        }
                    }
                }
            }
        }
    }

    if (scoreProjectSortMax5.length < 5) { // 核心5分
        for (let i in scoreProject_Object) {
            if (scoreProject_Object[i].scoreQ.toString(',').slice(0, 1) == type.id) {
                if (scoreProjectSortMax5.length < 5) {
                    scoreProjectSortMax5.push(scoreProject_Object[i].project_code)
                    scoreProjectSortMax5 = Array.from(new Set(scoreProjectSortMax5)) //去重
                }
            }
        }
    }

    if (scoreProjectSortMax5.length < 5) { // 全部5分
        let _scoreQ = []
        for (let i in scoreData) { // push符合条件的题目
            for (let j in scoreData[i]) {
                if (scoreData[i][j] === 5) {
                    if (i != type.id) {
                        _scoreQ.push(j)
                    }
                }
            }
        }
        // console.log(JSON.stringify(_scoreQ));
        for (let i in project_from) {
            for (let j in project_from[i].data) {
                for (let l in _scoreQ) {
                    if (j == _scoreQ[l]) {
                        for (let a in project_from[i].data[j].project) {
                            if (scoreProjectSortMax5.length < 5) {
                                scoreProjectSortMax5.push(project_from[i].data[j].project[a])
                                scoreProjectSortMax5 = Array.from(new Set(scoreProjectSortMax5)) //去重
                            }
                        }
                    }
                }
            }
        }
    }

    if (scoreProjectSortMax5.length < 5) { // 偏颇5分
        for (let i in scoreProject_Object) {
            if (scoreProject_Object[i].scoreQ.toString(',').slice(0, 1) != type.id) {
                if (scoreProjectSortMax5.length < 5) {
                    scoreProjectSortMax5.push(scoreProject_Object[i].project_code)
                    scoreProjectSortMax5 = Array.from(new Set(scoreProjectSortMax5)) //去重
                }
            }
        }
    }

    if (scoreProjectSortMax5.length < 5) { // 核心3分
        let _scoreQ = []
        for (let i in scoreData) { // push符合条件的题目
            for (let j in scoreData[i]) {
                if (scoreData[i][j] === 3) {
                    if (i == type.id) {
                        _scoreQ.push(j)
                    }
                }
            }
        }
        // console.log(JSON.stringify(_scoreQ));
        for (let i in project_from) {
            for (let j in project_from[i].data) {
                for (let l in _scoreQ) {
                    if (j == _scoreQ[l]) {
                        for (let a in project_from[i].data[j].project) {
                            if (scoreProjectSortMax5.length < 5) {
                                scoreProjectSortMax5.push(project_from[i].data[j].project[a])
                                scoreProjectSortMax5 = Array.from(new Set(scoreProjectSortMax5)) //去重
                            }
                        }
                    }
                }
            }
        }
    }

    for (let j in scoreProjectSortMax5) { // pushName
        for (let i in project_code) {
            if (scoreProjectSortMax5[j] == i) {
                plan_ids.push(project_code[i])
            }
        }
    }

    // console.log(JSON.stringify(scoreProjectSortMax5));
    // console.log(JSON.stringify(plan_ids));
}

let dataInitialize = () => {
    $api.rmStorage('a1');
    $api.rmStorage('a2');
    $api.rmStorage('a3');
    $api.rmStorage('a4');
    $api.rmStorage('a5');
    $api.rmStorage('a6');
    $api.rmStorage('a7');
    $api.rmStorage('a8');
    $api.rmStorage('b1');
    $api.rmStorage('b2');
    $api.rmStorage('b3');
    $api.rmStorage('b4');
    $api.rmStorage('b5');
    $api.rmStorage('b6');
    $api.rmStorage('b7');
    $api.rmStorage('b8');
    $api.rmStorage('c1');
    $api.rmStorage('c2');
    $api.rmStorage('c3');
    $api.rmStorage('c4');
    $api.rmStorage('c5');
    $api.rmStorage('c6');
    $api.rmStorage('c7');
    $api.rmStorage('c8');
    $api.rmStorage('d1');
    $api.rmStorage('d2');
    $api.rmStorage('d3');
    $api.rmStorage('d4');
    $api.rmStorage('d5');
    $api.rmStorage('d6');
    $api.rmStorage('d7');
    $api.rmStorage('d8');
    $api.rmStorage('e1');
    $api.rmStorage('e2');
    $api.rmStorage('e3');
    $api.rmStorage('e4');
    $api.rmStorage('e5');
    $api.rmStorage('e6');
    $api.rmStorage('e7');
    $api.rmStorage('e8');
    $api.rmStorage('f1');
    $api.rmStorage('f2');
    $api.rmStorage('f3');
    $api.rmStorage('f4');
    $api.rmStorage('f5');
    $api.rmStorage('f6');
    $api.rmStorage('f7');
    $api.rmStorage('f8');
    $api.rmStorage('g1');
    $api.rmStorage('g2');
    $api.rmStorage('g3');
    $api.rmStorage('g4');
    $api.rmStorage('g5');
    $api.rmStorage('g6');
    $api.rmStorage('g7');
    $api.rmStorage('g8');
    $api.rmStorage('h1');
    $api.rmStorage('h2');
    $api.rmStorage('h3');
    $api.rmStorage('h4');
    $api.rmStorage('h5');
    $api.rmStorage('h6');
    $api.rmStorage('h7');
    $api.rmStorage('h8');
    $api.rmStorage('i1');
    $api.rmStorage('i2');
    $api.rmStorage('i3');
    $api.rmStorage('i4');
    $api.rmStorage('i5');
    $api.rmStorage('i6');
    $api.rmStorage('i7');
    $api.rmStorage('i8');
    $api.rmStorage('project_a1')
    $api.rmStorage('project_a2')
    $api.rmStorage('project_a3')
    $api.rmStorage('project_a4')
    $api.rmStorage('project_a5')
    $api.rmStorage('project_a6')
    $api.rmStorage('project_a7')
    $api.rmStorage('project_b1')
    $api.rmStorage('project_b2')
    $api.rmStorage('project_b3')
    $api.rmStorage('project_b4')
    $api.rmStorage('project_b5')
    $api.rmStorage('project_b6')
    $api.rmStorage('project_b7')
    $api.rmStorage('project_c1')
    $api.rmStorage('project_c2')
    $api.rmStorage('project_c3')
    $api.rmStorage('project_c4')
    $api.rmStorage('project_c5')
    $api.rmStorage('project_c6')
    $api.rmStorage('project_c7')
    $api.rmStorage('project_d1')
    $api.rmStorage('project_d2')
    $api.rmStorage('project_d3')
    $api.rmStorage('project_d4')
    $api.rmStorage('project_d5')
    $api.rmStorage('project_d6')
    $api.rmStorage('project_d7')
    $api.rmStorage('project_e1')
    $api.rmStorage('project_e2')
    $api.rmStorage('project_e3')
    $api.rmStorage('project_e4')
    $api.rmStorage('project_e5')
    $api.rmStorage('project_e6')
    $api.rmStorage('project_e7')
    $api.rmStorage('project_f1')
    $api.rmStorage('project_f2')
    $api.rmStorage('project_f3')
    $api.rmStorage('project_f4')
    $api.rmStorage('project_f5')
    $api.rmStorage('project_f6')
    $api.rmStorage('project_f7')
    $api.rmStorage('project_g1')
    $api.rmStorage('project_g2')
    $api.rmStorage('project_g3')
    $api.rmStorage('project_g4')
    $api.rmStorage('project_g5')
    $api.rmStorage('project_g6')
    $api.rmStorage('project_g7')
    $api.rmStorage('project_h1')
    $api.rmStorage('project_h2')
    $api.rmStorage('project_h3')
    $api.rmStorage('project_h4')
    $api.rmStorage('project_h5')
    $api.rmStorage('project_h6')
    $api.rmStorage('project_h7')
    $api.rmStorage('project_i2')
    $api.rmStorage('project_i3')
    $api.rmStorage('project_i4')
    $api.rmStorage('project_i5')
    $api.rmStorage('project_i6')
    $api.rmStorage('project_i7')
    $api.rmStorage('project_i8')

    $api.rmStorage('project_a2_checkbox')
    $api.rmStorage('project_f3_checkbox')
}