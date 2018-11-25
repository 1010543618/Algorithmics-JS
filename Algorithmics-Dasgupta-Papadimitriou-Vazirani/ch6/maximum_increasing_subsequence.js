export default (arr) => {
    let info = [{
            len: 1,
            prv: -1
        }],
        result = [];
    
    // 动态规划
    for (let i = 1; i < arr.length; i++) {
        let len = 1,
            prv = -1;
        info.forEach((d, ii) => {
            d.len >= len && arr[ii] < arr[i] && (len = d.len + 1, prv = ii);
        })

        info.push({
            len,
            prv
        })
    }

    // 生成结果
    result[0] = 0;
    for (let i = 0; i < info.length; i++) {
        info[result[0]].len < info[i].len && (result[0] = i);
    }

    while (info[result[result.length - 1]].prv !== -1) {
        result.push(info[result[result.length - 1]].prv);
    }

    return result.reverse();

}