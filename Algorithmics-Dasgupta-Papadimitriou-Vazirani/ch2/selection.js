/**
 * 找出数组中第k小的元素的值
 * @param  {Array<number>} arr 待查找的数组
 * @param  {number} k 大于等于0，小于数组长度的整数
 */
export default (arr, k) => {
    function selection(arr, k) {
        let v = Math.floor((arr[0] + arr[arr.length - 1]) / 2),
            sl = [],
            sv = [],
            sr = [];
        arr.forEach(d => {
            d < v ? sl.push(d) : d == v ? sv.push(d) : sr.push(d);
        });
    
        if (sl.length >= k) {
            // k <= sl.length
            return selection(sl, k)
        } else if (sl.length + sv.length >= k) {
            // sl.length < k <= sl.length + sv.length
            return v;
        } else {
            // k > sl.length + sv.length
            return selection(sr, k - sl.length - sv.length)
        }
    }

    return selection(arr, k);
}