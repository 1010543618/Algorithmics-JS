/**
 * 分治整数乘法算法
 * @param  {number} x 被乘数，整数，大于等于0
 * @param  {number} y 乘数，整数，大于等于0
 * @returns {number} 相乘结果
 */
export default (x, y) => {
    function multiply(x, y) {
        var xl, xr, yl, yr, p1, p2, p3, n, nl, nr;
        n = Math.max(x.toString(2).length, y.toString(2).length);

        // 一位的时候x*y和x&y一样
        if (n == 1) return x & y;

        nl = Math.ceil(n / 2);
        nr = Math.floor(n / 2);

        xl = x >> nr;
        xr = x - (xl << nr);
        yl = y >> nr;
        yr = y - (yl << nr);
        p1 = multiply(xl, yl);
        p2 = multiply(xr, yr);
        p3 = multiply(xl + xr, yl + yr);

        /**
         * 左移的位数要在纸上写几遍把握一下（书上p1左移n位当n为偶数才能成立）
         * 算数运算符优先级大于位移运算符
         * 如：110 * 111 = ((11 << 1) + 0) * ((11 << 1) + 1)
         *  = [(11 * 11 << 2)] + [11 * 1 + 11 * 0 << 1]                 + [0 * 1]
         *  = [p1 << 2]        + [((11 + 0) * (11 + 1) - p1 - p2) << 1] + [p2]
         *  = [p1 << 2]        + [(p3 - p1 - p2) << 1]                  + [p2]
         * 这个式子中n为3，nr为Math.floor(3 / 2)等于1
         */
        return (p1 << (nr << 1)) + ((p3 - p1 - p2) << nr) + p2;
    }

    return multiply(x, y);
}