/**
 * 使用未经优化的计算和插值方法，计算多项式A(x)*B(x)的系数
 * @param  {Array<number>} Ax 多项式A(x)的系数
 * @param  {Array<number>} Bx 多项式B(x)的系数
 * @returns {Array<number>} 多项式A(x)*B(x)的系数
 */
export default (Ax, Bx) => {
    let d,
        am = [], //增广矩阵 augmented matrix
        Cx = [];

    if (Ax.length > Bx.length) {
        d = Ax.length - 1;
        Bx[Ax.length - 1] = 0;
        while (Bx.push(0) != Ax.length);
    } else if (Bx.length > Ax.length) {
        d = Bx.length - 1;
        while (Ax.push(0) != Bx.length);
    } else {
        d = Ax.length - 1;
    }

    // 计算增广矩阵（O(n^2)）
    for (let i = 0; i < 2 * d + 1; i++) { // 循环2*d + 1次
        let x = 1,
            Av = 0,
            Bv = 0;
        am[i] = [];
        for (var j = 0; j < 2 * d + 1; j++) { // 循环2*d + 1次
            if (j < d + 1) {
                Av += Ax[j] * x;
                Bv += Bx[j] * x;
            }
            am[i][j] = x;
            x *= i;
        }

        am[i][j] = Av * Bv;
    }

    // 之后就是用增广矩阵求非齐次线性方程组了（O(n^3)，比直接乘都复杂了）

    // 1.三角阵
    for (let i = 0; i < 2 * d; i++) {
        for (let j = i + 1; j < 2 * d + 1; j++) {
            let ratio = am[j][i] / am[i][i]
            am[j] = am[j].map((v, index) => {
                return v - ratio * am[i][index]
            })
        }
    }

    // 2.对角阵
    for (let i = 2 * d; i > 0; i--) {
        for (let j = i - 1; j > -1; j--) {
            let ratio = am[j][i] / am[i][i]
            am[j] = am[j].map((v, index) => {
                return v - ratio * am[i][index]
            })
        }
    }

    // 3.单位阵（思想）
    for (let i = 0; i < 2 * d + 1; i++) {
        Cx[i] = Math.round(am[i][2 * d + 1] / am[i][i]);
    }

    return Cx;
}

