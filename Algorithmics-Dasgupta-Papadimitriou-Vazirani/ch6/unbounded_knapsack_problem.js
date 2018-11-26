export default (goods, W) => {
    let K = [0],
        max;
    for (let i = 1; i <= W; i++) {
        max = 0;
        goods.forEach((g, gi) => {
            if ((i >= g.w) && (K[i - g.w] + g.v) > max) {
                max = K[i - g.w] + g.v;
            }
        });
        K[i] = max;
    }
    return K[K.length - 1];
}