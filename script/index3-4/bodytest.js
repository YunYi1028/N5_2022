let arrayAnswer = [] // 题目答案
let answerId = 0 // 题目id
let answerCacheId = 0 // 答案缓存id[有多个答案缓存需要id]
let answerCache = $api.getStorage('answerCache') ? $api.getStorage('answerCache') : [] // 答案缓存

answerCacheInit()
function answerCacheInit() {
    if (answerCache.length != 0) {
        for (let i = 0; i < answerCache.length; i++) {
            if (!answerCache[i] || !answerCache[i].user) break;
            if (answerCache[i].user.id == JSON.parse($api.getStorage('user_info')).id) { // 如果人匹配
                arrayAnswer = answerCache[i].answer
                answerId = answerCache[i].answerId
                answerCacheId = i
                break;
            } else {
                answerCacheId = answerCache.length
            }
        }
    }
    // console.log(answerCacheId);
    // console.log(JSON.stringify(answerCache[answerCacheId]));
}

/**
 * 设置缓存分数
 * @param {标签[a,b,c,d,e,f,g,h,i]} title 
 * @param {题目[1-8]} topic 
 * @param {得分[1,3,5]} score 
 */
function setScoreStorage(title, topic, score, type) {
    $api.setStorage(`${title}${topic}`, score);
    $api.setStorage(`project_${title}${topic}`, score);
    // console.log(title, topic, score, type);
    if (type) { // 如果为多选
        let str = `${title}${topic}`
        let score = 1
        if (type.length < 4) {
            score = 3
        } else {
            score = 5
        }
        $api.setStorage(`${title}${topic}`, score);
        $api.setStorage(`project_${title}${topic}`, score);
        let symptom = []
        switch (str) {
            case 'a2':
                for (let i in type) {
                    switch (type[i]) {
                        case '0':
                            type[i] = 'e'
                            symptom.push('背部卫阳不足') 
                            break
                        case '1':
                            type[i] = 'd'
                            symptom.push('腹部湿寒气重')
                            break
                        case '2':
                            type[i] = 'c'
                            symptom.push('腰肾卫阳之气不足')
                            break
                        case '3':
                            type[i] = 'f'
                            symptom.push('臀部寒湿阳气不足')
                            break
                        case '4':
                            type[i] = 'i'
                            symptom.push('关节微循环差')
                            break
                    }
                }
                break
            case 'f3':
                for (let i in type) {
                    switch (type[i]) {
                        case '0':
                            type[i] = 'b'
                            symptom.push('脑部血、氧供给不足')
                            break
                        case '1':
                            type[i] = 'e'
                            symptom.push('肩背气血不畅')
                            break
                        case '2':
                            type[i] = 'd'
                            symptom.push('寒湿郁结于腹')
                            break
                        case '3':
                            type[i] = 'i'
                            symptom.push('关节寒湿重')
                            break
                        case '4':
                            type[i] = 'c'
                            symptom.push('劳伤积损')
                            break
                        case '5':
                            type[i] = 'f'
                            symptom.push('臀部寒湿淤堵、血液循环不畅')
                            break
                    }
                }
                break
        }
        $api.setStorage(`project_${title}${topic}_checkbox`, type);
        $api.setStorage(`project_${title}${topic}_symptom`, symptom);
    } else {
        let str = `${title}${topic}${score}`
        // console.log(str);
        switch (str) {
            case 'a41':
                $api.setStorage(`i5`, 5);
                $api.setStorage(`project_i5`, 5);
                break
            case 'a43':
                $api.setStorage(`i5`, 3);
                $api.setStorage(`project_i5`, 3);
                break
            case 'a45':
                $api.setStorage(`i5`, 1);
                $api.setStorage(`project_i5`, 1);
                break
            case 'a51':
                $api.setStorage(`c5`, 1);
                $api.setStorage(`project_c5`, 1);
                break
            case 'a53':
                $api.setStorage(`c5`, 3);
                $api.setStorage(`project_c5`, 3);
                break
            case 'a55':
                $api.setStorage(`c5`, 5);
                $api.setStorage(`project_c5`, 5);
                break
            case 'b41':
                $api.setStorage(`f7`, 1);
                $api.setStorage(`project_f7`, 1);
                break
            case 'b43':
                $api.setStorage(`f7`, 3);
                $api.setStorage(`project_f7`, 3);
                break
            case 'b45':
                $api.setStorage(`f7`, 5);
                $api.setStorage(`project_f7`, 5);
                break
            case 'b81':
                $api.setStorage(`c8`, 1);
                $api.setStorage(`project_c8`, 1);
                break
            case 'b83':
                $api.setStorage(`c8`, 3);
                $api.setStorage(`project_c8`, 3);
                break
            case 'b85':
                $api.setStorage(`c8`, 5);
                $api.setStorage(`project_c8`, 5);
                break
            case 'c11':
                $api.setStorage(`i2`, 5);
                $api.setStorage(`project_i2`, 5);
                break
            case 'c13':
                $api.setStorage(`i2`, 3);
                $api.setStorage(`project_i2`, 3);
                break
            case 'c15':
                $api.setStorage(`i2`, 1);
                $api.setStorage(`project_i2`, 1);
                break
            case 'c71':
                $api.setStorage(`i3`, 5);
                $api.setStorage(`project_i3`, 5);
                break
            case 'c73':
                $api.setStorage(`i3`, 3);
                $api.setStorage(`project_i3`, 3);
                break
            case 'c75':
                $api.setStorage(`i3`, 1);
                $api.setStorage(`project_i3`, 1);
                break
            case 'f61':
                $api.setStorage(`i8`, 5);
                $api.setStorage(`project_i8`, 5);
                break
            case 'f63':
                $api.setStorage(`i8`, 3);
                $api.setStorage(`project_i8`, 3);
                break
            case 'f65':
                $api.setStorage(`i8`, 1);
                $api.setStorage(`project_i8`, 1);
                break
            case 'h11':
                $api.setStorage(`i4`, 5);
                $api.setStorage(`project_i4`, 5);
                break
            case 'h13':
                $api.setStorage(`i4`, 3);
                $api.setStorage(`project_i4`, 3);
                break
            case 'h15':
                $api.setStorage(`i4`, 1);
                $api.setStorage(`project_i4`, 1);
                break
            case 'i71':
                openWin()
                break
            case 'i73':
                openWin()
                break
            case 'i75':
                openWin()
                break
        }
    }

    // console.log(JSON.stringify([`${title}${topic}`]));
    let arrayAnswerPush = 1 // 如果为1就是push，为0就是覆盖
    for (let i in arrayAnswer) {
        if (arrayAnswer[i].name == `${title}${topic}`) {
            arrayAnswerPush = 0
            if (!type) {
                let str = `${title}${topic}${score}`
                console.log(str);
                switch (str) {
                    case 'a41':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i5') {
                                arrayAnswer[j][`i5`] = 5
                                arrayAnswer[j][`project_i5`] = 5
                            }
                        }
                        break
                    case 'a43':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i5') {
                                arrayAnswer[j][`i5`] = 3
                                arrayAnswer[j][`project_i5`] = 3
                            }
                        }
                        break
                    case 'a45':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i5') {
                                arrayAnswer[j][`i5`] = 1
                                arrayAnswer[j][`project_i5`] = 1
                            }
                        }
                        break
                    case 'a51':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'c5') {
                                arrayAnswer[j][`c5`] = 1
                                arrayAnswer[j][`project_c5`] = 1
                            }
                        }
                        break
                    case 'a53':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'c5') {
                                arrayAnswer[j][`c5`] = 3
                                arrayAnswer[j][`project_c5`] = 3
                            }
                        }
                        break
                    case 'a55':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'c5') {
                                arrayAnswer[j][`c5`] = 5
                                arrayAnswer[j][`project_c5`] = 5
                            }
                        }
                        break
                    case 'b41':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'f7') {
                                arrayAnswer[j][`f7`] = 1
                                arrayAnswer[j][`project_f7`] = 1
                            }
                        }
                        break
                    case 'b43':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'f7') {
                                arrayAnswer[j][`f7`] = 3
                                arrayAnswer[j][`project_f7`] = 3
                            }
                        }
                        break
                    case 'b45':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'f7') {
                                arrayAnswer[j][`f7`] = 5
                                arrayAnswer[j][`project_f7`] = 5
                            }
                        }
                        break
                    case 'b81':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'c8') {
                                arrayAnswer[j][`c8`] = 1
                                arrayAnswer[j][`project_c8`] = 1
                            }
                        }
                        break
                    case 'b83':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'c8') {
                                arrayAnswer[j][`c8`] = 3
                                arrayAnswer[j][`project_c8`] = 3
                            }
                        }
                        break
                    case 'b85':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'c8') {
                                arrayAnswer[j][`c8`] = 5
                                arrayAnswer[j][`project_c8`] = 5
                            }
                        }
                        break
                    case 'c11':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i2') {
                                arrayAnswer[j][`i2`] = 5
                                arrayAnswer[j][`project_i2`] = 5
                            }
                        }
                        break
                    case 'c13':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i2') {
                                arrayAnswer[j][`i2`] = 3
                                arrayAnswer[j][`project_i2`] = 3
                            }
                        }
                        break
                    case 'c15':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i2') {
                                arrayAnswer[j][`i2`] = 1
                                arrayAnswer[j][`project_i2`] = 1
                            }
                        }
                        break
                    case 'c71':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i3') {
                                arrayAnswer[j][`i3`] = 5
                                arrayAnswer[j][`project_i3`] = 5
                            }
                        }
                        break
                    case 'c73':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i3') {
                                arrayAnswer[j][`i3`] = 3
                                arrayAnswer[j][`project_i3`] = 3
                            }
                        }
                        break
                    case 'c75':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i3') {
                                arrayAnswer[j][`i3`] = 1
                                arrayAnswer[j][`project_i3`] = 1
                            }
                        }
                        break
                    case 'f61':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i8') {
                                arrayAnswer[j][`i8`] = 5
                                arrayAnswer[j][`project_i8`] = 5
                            }
                        }
                        break
                    case 'f63':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i8') {
                                arrayAnswer[j][`i8`] = 3
                                arrayAnswer[j][`project_i8`] = 3
                            }
                        }
                        break
                    case 'f65':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i8') {
                                arrayAnswer[j][`i8`] = 1
                                arrayAnswer[j][`project_i8`] = 1
                            }
                        }
                        break
                    case 'h11':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i4') {
                                arrayAnswer[j][`i4`] = 5
                                arrayAnswer[j][`project_i4`] = 5
                            }
                        }
                        break
                    case 'h13':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i4') {
                                arrayAnswer[j][`i4`] = 3
                                arrayAnswer[j][`project_i4`] = 3
                            }
                        }
                        break
                    case 'h15':
                        for (let j in arrayAnswer) {
                            if (arrayAnswer[j].name == 'i4') {
                                arrayAnswer[j][`i4`] = 1
                                arrayAnswer[j][`project_i4`] = 1
                            }
                        }
                        break

                }
                arrayAnswer[i] = {
                    name: `${title}${topic}`,
                    [`${title}${topic}`]: parseInt(score),
                    [`project_${title}${topic}`]: parseInt(score)
                }
            } else {
                arrayAnswer[i] = {
                    name: `${title}${topic}`,
                    [`${title}${topic}`]: parseInt(score),
                    [`project_${title}${topic}`]: parseInt(score),
                    [`project_${title}${topic}_checkbox`]: $api.getStorage(`project_${title}${topic}_checkbox`),
                }
            }
        }
    }
    if (arrayAnswerPush == 1) {
        if (!type) {
            let arrayAnswerPrams = {}
            let str = `${title}${topic}${score}`
            switch (str) {
                case 'a41':
                    arrayAnswerPrams.name = 'i5'
                    arrayAnswerPrams[`i5`] = 5
                    arrayAnswerPrams[`project_i5`] = 5
                    break
                case 'a43':
                    arrayAnswerPrams.name = 'i5'
                    arrayAnswerPrams[`i5`] = 3
                    arrayAnswerPrams[`project_i5`] = 3
                    break
                case 'a45':
                    arrayAnswerPrams.name = 'i5'
                    arrayAnswerPrams[`i5`] = 1
                    arrayAnswerPrams[`project_i5`] = 1
                    break
                case 'a51':
                    arrayAnswerPrams.name = 'c5'
                    arrayAnswerPrams[`c5`] = 1
                    arrayAnswerPrams[`project_c5`] = 1
                    break
                case 'a53':
                    arrayAnswerPrams.name = 'c5'
                    arrayAnswerPrams[`c5`] = 3
                    arrayAnswerPrams[`project_c5`] = 3
                    break
                case 'a55':
                    arrayAnswerPrams.name = 'c5'
                    arrayAnswerPrams[`c5`] = 5
                    arrayAnswerPrams[`project_c5`] = 5
                    break
                case 'b41':
                    arrayAnswerPrams.name = 'f7'
                    arrayAnswerPrams[`f7`] = 1
                    arrayAnswerPrams[`project_f7`] = 1
                    break
                case 'b43':
                    arrayAnswerPrams.name = 'f7'
                    arrayAnswerPrams[`f7`] = 3
                    arrayAnswerPrams[`project_f7`] = 3
                    break
                case 'b45':
                    arrayAnswerPrams.name = 'f7'
                    arrayAnswerPrams[`f7`] = 5
                    arrayAnswerPrams[`project_f7`] = 5
                    break
                case 'b81':
                    arrayAnswerPrams.name = 'c8'
                    arrayAnswerPrams[`c8`] = 1
                    arrayAnswerPrams[`project_c8`] = 1
                    break
                case 'b83':
                    arrayAnswerPrams.name = 'c8'
                    arrayAnswerPrams[`c8`] = 3
                    arrayAnswerPrams[`project_c8`] = 3
                    break
                case 'b85':
                    arrayAnswerPrams.name = 'c8'
                    arrayAnswerPrams[`c8`] = 5
                    arrayAnswerPrams[`project_c8`] = 5
                    break
                case 'c11':
                    arrayAnswerPrams.name = 'i2'
                    arrayAnswerPrams[`i2`] = 5
                    arrayAnswerPrams[`project_i2`] = 5
                    break
                case 'c13':
                    arrayAnswerPrams.name = 'i2'
                    arrayAnswerPrams[`i2`] = 3
                    arrayAnswerPrams[`project_i2`] = 3
                    break
                case 'c15':
                    arrayAnswerPrams.name = 'i2'
                    arrayAnswerPrams[`i2`] = 1
                    arrayAnswerPrams[`project_i2`] = 1
                    break
                case 'c71':
                    arrayAnswerPrams.name = 'i3'
                    arrayAnswerPrams[`i3`] = 5
                    arrayAnswerPrams[`project_i3`] = 5
                    break
                case 'c73':
                    arrayAnswerPrams.name = 'i3'
                    arrayAnswerPrams[`i3`] = 3
                    arrayAnswerPrams[`project_i3`] = 3
                    break
                case 'c75':
                    arrayAnswerPrams.name = 'i3'
                    arrayAnswerPrams[`i3`] = 1
                    arrayAnswerPrams[`project_i3`] = 1
                    break
                case 'f61':
                    arrayAnswerPrams.name = 'i8'
                    arrayAnswerPrams[`i8`] = 5
                    arrayAnswerPrams[`project_i8`] = 5
                    break
                case 'f63':
                    arrayAnswerPrams.name = 'i8'
                    arrayAnswerPrams[`i8`] = 3
                    arrayAnswerPrams[`project_i8`] = 3
                    break
                case 'f65':
                    arrayAnswerPrams.name = 'i8'
                    arrayAnswerPrams[`i8`] = 1
                    arrayAnswerPrams[`project_i8`] = 1
                    break
                case 'h11':
                    arrayAnswerPrams.name = 'i4'
                    arrayAnswerPrams[`i4`] = 5
                    arrayAnswerPrams[`project_i4`] = 5
                    break
                case 'h13':
                    arrayAnswerPrams.name = 'i4'
                    arrayAnswerPrams[`i4`] = 3
                    arrayAnswerPrams[`project_i4`] = 3
                    break
                case 'h15':
                    arrayAnswerPrams.name = 'i4'
                    arrayAnswerPrams[`i4`] = 1
                    arrayAnswerPrams[`project_i4`] = 1
                    break

            }
            arrayAnswer.push({
                name: `${title}${topic}`,
                [`${title}${topic}`]: parseInt(score),
                [`project_${title}${topic}`]: parseInt(score)
            })
            // console.log(JSON.stringify(arrayAnswer));
            if (Object.keys(arrayAnswerPrams).length != 0) {
                arrayAnswer.push(arrayAnswerPrams)
            }
        } else {
            arrayAnswer.push({
                name: `${title}${topic}`,
                [`${title}${topic}`]: parseInt(score),
                [`project_${title}${topic}`]: parseInt(score),
                [`project_${title}${topic}_checkbox`]: $api.getStorage(`project_${title}${topic}_checkbox`),
            })
        }
        answerId += 1
    } else {

    }

    answerCache[answerCacheId] = {
        user: JSON.parse($api.getStorage('user_info')),
        answer: arrayAnswer,
        answerId,
        save_record_params: {}
    }
    // console.log(JSON.stringify(answerCache[answerCacheId].answer));
    $api.setStorage('answerCache', answerCache)
}

function openWin() {
    /* 显示tab => tab_bar */
    api.sendEvent({
        name: 'set_tabBar_css',
        extra: {
            params: 'show',
        }
    })
    set_tabBar('index3-5', 'notab')
    api.closeFrame('index3-4')
    api.closeFrame('index3-3')
}

/* 体质切向计算 */
let type = {
    title: '偏颇体质',
    type: '',
    score: '',
    id: '',
    sub_type: [],
}
let a = ''
let b = ''
let c = ''
let d = ''
let e = ''
let f = ''
let g = ''
let h = ''
let i = ''

function score() {
    // let ap = parseInt($api.getStorage('a1')) + parseInt($api.getStorage('a2')) + parseInt($api.getStorage('a3')) + parseInt($api.getStorage('a4')) + parseInt($api.getStorage('a5')) + parseInt($api.getStorage('a6')) + parseInt($api.getStorage('a7'));
    // let bp = parseInt($api.getStorage('b1')) + parseInt($api.getStorage('b2')) + parseInt($api.getStorage('b3')) + parseInt($api.getStorage('b4')) + parseInt($api.getStorage('b5')) + parseInt($api.getStorage('b6')) + parseInt($api.getStorage('b7')) + parseInt($api.getStorage('b8'));
    // let cp = parseInt($api.getStorage('c1')) + parseInt($api.getStorage('c2')) + parseInt($api.getStorage('c3')) + parseInt($api.getStorage('c4')) + parseInt($api.getStorage('c5')) + parseInt($api.getStorage('c6')) + parseInt($api.getStorage('c7')) + parseInt($api.getStorage('c8'));
    // let dp = parseInt($api.getStorage('d1')) + parseInt($api.getStorage('d2')) + parseInt($api.getStorage('d3')) + parseInt($api.getStorage('d4')) + parseInt($api.getStorage('d5')) + parseInt($api.getStorage('d6')) + parseInt($api.getStorage('d7')) + parseInt($api.getStorage('d8'));
    // let ep = parseInt($api.getStorage('e1')) + parseInt($api.getStorage('e2')) + parseInt($api.getStorage('e3')) + parseInt($api.getStorage('e4')) + parseInt($api.getStorage('e5')) + parseInt($api.getStorage('e6'));
    // let fp = parseInt($api.getStorage('f1')) + parseInt($api.getStorage('f2')) + parseInt($api.getStorage('f3')) + parseInt($api.getStorage('f4')) + parseInt($api.getStorage('f5')) + parseInt($api.getStorage('f6')) + parseInt($api.getStorage('f7'));
    // let gp = parseInt($api.getStorage('g1')) + parseInt($api.getStorage('g2')) + parseInt($api.getStorage('g3')) + parseInt($api.getStorage('g4')) + parseInt($api.getStorage('g5')) + parseInt($api.getStorage('g6')) + parseInt($api.getStorage('g7'));
    // let hp = parseInt($api.getStorage('h1')) + parseInt($api.getStorage('h2')) + parseInt($api.getStorage('h3')) + parseInt($api.getStorage('h4')) + parseInt($api.getStorage('h5')) + parseInt($api.getStorage('h6')) + parseInt($api.getStorage('h7'));
    // let ip = parseInt($api.getStorage('i1')) + parseInt($api.getStorage('i2')) + parseInt($api.getStorage('i3')) + parseInt($api.getStorage('i4')) + parseInt($api.getStorage('i5')) + parseInt($api.getStorage('i6')) + parseInt($api.getStorage('i7')) + parseInt($api.getStorage('i8'));
    let ap = 0, bp = 0, cp = 0, dp = 0, ep = 0, fp = 0, gp = 0, hp = 0, ip = 0
    console.log('//////////score/////////');
    console.log(answerCacheId);
    console.log(JSON.stringify(answerCache[answerCacheId]));
    for (let i in answerCache[answerCacheId].answer) {
        if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'a') {
            ap += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'b') {
            bp += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'c') {
            cp += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'd') {
            dp += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'e') {
            ep += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'f') {
            fp += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'g') {
            gp += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'h') {
            hp += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        } else if (answerCache[answerCacheId].answer[i].name.substring(0, 1) == 'i') {
            ip += answerCache[answerCacheId].answer[i][answerCache[answerCacheId].answer[i].name]
        }
    }
    console.log(ap, bp, cp, dp, ep, fp, gp, hp, ip);
    // 转化分数=[（原始分-条目数）/（条目数×4）] ×100 
    a = ((ap - 7) / (7 * 4)) * 100;
    b = ((bp - 8) / (8 * 4)) * 100;
    c = ((cp - 8) / (8 * 4)) * 100;
    d = ((dp - 8) / (8 * 4)) * 100;
    e = ((ep - 6) / (6 * 4)) * 100;
    f = ((fp - 7) / (7 * 4)) * 100;
    g = ((gp - 7) / (7 * 4)) * 100;
    h = ((hp - 7) / (7 * 4)) * 100;
    i = ((ip - 8) / (8 * 4)) * 100;
    a = parseInt(a.toFixed(0));
    b = parseInt(b.toFixed(0));
    c = parseInt(c.toFixed(0));
    d = parseInt(d.toFixed(0));
    e = parseInt(e.toFixed(0));
    f = parseInt(f.toFixed(0));
    g = parseInt(g.toFixed(0));
    h = parseInt(h.toFixed(0));
    i = parseInt(i.toFixed(0));
    console.log(a, b, c, d, e, f, g, h, i);

    acheckboth();


}

function acheckboth() {
    if (i >= 60 && a < 30 && b < 30 && c < 30 && d < 30 && e < 30 && f < 30 && g < 30 && h < 30) { // 平和体质转化分≧60分 && 其他8种体质转化分均﹤30分
        type.title = '平和体质'
        type.sub_type.push({
            id: 'i',
            score: i,
            name: "平和质"
        });
    } else if (i >= 60 && a < 40 && b < 40 && c < 40 && d < 40 && e < 40 && f < 40 && g < 40 && h < 40) { // 基本平和体质转化分≧60分 && 其他8种体质转化分均﹤40分
        type.title = '平和体质'
        type.sub_type.push({
            id: 'i',
            score: i,
            name: "平和质"
        });
    }
    // 倾向体质转化分>29
    if (a > 29) {
        type.sub_type.push({
            id: 'a',
            score: a,
            name: "阳虚质"
        });
    }
    if (b > 29) {
        type.sub_type.push({
            id: 'b',
            score: b,
            name: "阴虚质"
        });
    }
    if (c > 29) {
        type.sub_type.push({
            id: 'c',
            score: c,
            name: "气虚质"
        })
    }
    if (d > 29) {
        type.sub_type.push({
            id: 'd',
            score: d,
            name: "痰湿质"
        })
    }
    if (e > 29) {
        type.sub_type.push({
            id: 'e',
            score: e,
            name: "湿热质"
        })
    }
    if (f > 29) {
        type.sub_type.push({
            id: 'f',
            score: f,
            name: "血瘀质"
        })
    }
    if (g > 29) {
        type.sub_type.push({
            id: 'g',
            score: g,
            name: "特禀质"
        })
    }
    if (h > 29) {
        type.sub_type.push({
            id: 'h',
            score: h,
            name: "气郁质"
        })
    }

    if (type.sub_type == [] || type.sub_type == '' || type.sub_type == undefined || type.sub_type == null || type.sub_type.length < 0) {
        if (a > 1) {
            type.sub_type.push({
                id: 'a',
                score: a,
                name: "阳虚质"
            });
        }
        if (b > 1) {
            type.sub_type.push({
                id: 'b',
                score: b,
                name: "阴虚质"
            });
        }
        if (c > 1) {
            type.sub_type.push({
                id: 'c',
                score: c,
                name: "气虚质"
            })
        }
        if (d > 1) {
            type.sub_type.push({
                id: 'd',
                score: d,
                name: "痰湿质"
            })
        }
        if (e > 1) {
            type.sub_type.push({
                id: 'e',
                score: e,
                name: "湿热质"
            })
        }
        if (f > 1) {
            type.sub_type.push({
                id: 'f',
                score: f,
                name: "血瘀质"
            })
        }
        if (g > 1) {
            type.sub_type.push({
                id: 'g',
                score: g,
                name: "特禀质"
            })
        }
        if (h > 1) {
            type.sub_type.push({
                id: 'h',
                score: h,
                name: "气郁质"
            })
        }
    }

    if (type.sub_type == [] || type.sub_type == '' || type.sub_type == undefined || type.sub_type == null) return
    type.sub_type.sort(sortScore);
    type.type = type.sub_type[0].name
    type.score = type.sub_type[0].score
    type.id = type.sub_type[0].id
    type.sub_type.splice(0, 1)
    // console.log(JSON.stringify(type));

    let str_title = type.title
    let str_type = type.type
    let str_score = type.score
    symptom.push(str_type)

    let str = ``
    for (let i = 0; i < type.sub_type.length; i++) {
        if (i < 4) {
            scoreArray.push(type.sub_type[i].name)
            symptom.push(type.sub_type[i].name)
            if (i + 1 == type.sub_type.length || i == 4) {
                str += `<span>${type.sub_type[i].name}</span>`
            } else {
                str += `<span>${type.sub_type[i].name}</span>&nbsp;&nbsp;&nbsp;/`
            }
        }
    }

    if (str_type == '平和质' && str_score == 100 && a == 0 && b == 0 && c == 0 && d == 0 && e == 0 && f == 0 && g == 0 && h == 0) { // 典型平和质
        $('#corporeity-wrapper').html(`<div class="corporeity-text">通过本次[体质检测]，您属于典型的<span class="span2">${str_title}</span></div>
                                        <div class="corporeity-text"><span>${str_type}(${str_score}分)</span></div>
                                        <div class="corporeity-text">遵循四季养可长期保持平和质</div>
                                    </div>`)

    } else if (str_type == '平和质' && a < 30 && b < 30 && c < 30 && d < 30 && e < 30 && f < 30 && g < 30 && h < 30) { // 是平和质
        str = str ? '同时还需调善' + str : ''
        $('#corporeity-wrapper').html(`<div class="corporeity-text">通过本次[体质检测]，您属于<span class="span2">${str_title}</span></div>
                                        <div class="corporeity-text"><span>${str_type}(${str_score}分)</span></div>
                                        <div class="corporeity-text">${str}</div>
                                    </div>`)
    } else if (str_type == '平和质' && a < 40 && b < 40 && c < 40 && d < 40 && e < 40 && f < 40 && g < 40 && h < 40) { // 基本是平和质
        str = str ? '同时还需调善' + str : ''
        $('#corporeity-wrapper').html(`<div class="corporeity-text">通过本次[体质检测]，您属于<span class="span2">${str_title}</span></div>
                                        <div class="corporeity-text">体质重点倾向于<span>${str_type}(${str_score}分)</span></div>
                                        <div class="corporeity-text">${str}</div>
                                    </div>`)
    } else { // 偏颇体质
        str = str ? '同时还兼有' + str : ''
        $('#corporeity-wrapper').html(`<div class="corporeity-text">通过本次[体质检测]，您属于<span class="span2">${str_title}</span></div>
                                        <div class="corporeity-text">体质重点偏颇倾向于<span>${str_type}(${str_score}分)</span><span style="font-size:6px;padding: 0 0 0 5px;color: #666666;font-family: 'OPPOSans-M';"></span></div>
                                        <div class="corporeity-text">${str}</div>
                                    </div>`)
    }

}

/* 根据分数（Score）排序 */
function sortScore(a, b) {
    return b.score - a.score
}