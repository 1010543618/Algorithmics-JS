export default (goods, W) => {
    let K = new Array(W + 1);

    for (let i = 0; i < W + 1; i++) {
        K[i] = new Array(goods.length + 1);
        K[i][0] = 0; 
    }

    K[0].fill(0)

    for (let g_i = 1; g_i < goods.length + 1; g_i++) {
        // 物品编号从0开始，这里要-1
        const g = goods[g_i - 1];
        for (let w = 1; w < W + 1; w++) {
            // 判断最优
            K[w][g_i] = w >= g.w ? Math.max(K[w][g_i - 1], K[w - g.w][g_i - 1] + g.v) : K[w][g_i - 1];
        }
    }

    return K[W][goods.length];
}