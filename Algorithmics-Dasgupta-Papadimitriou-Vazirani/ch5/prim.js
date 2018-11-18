export default (G, w) => {
    let _G = {},
        H = [],
        weight = [];
    
    for (const k in G) {
        _G[k] = [];
        H.push({
            k,
            cost: Number.MAX_VALUE,
            prev: null
        });
        G[k].forEach((v, i) => {
            weight.push({
                e: [k, v],
                w: +w[k][i]
            })
        });
    }

    // 遍历全部节点
    while (H.length > 0) {
        for (let i = H.length - 1; i >= 1; i--) {
            H[i].cost < H[i - 1].cost && ([H[i], H[i - 1]] = [H[i - 1], H[i]]);
        }
        let v = H.shift();

        if (v.prev !== null) {
            _G[v.prev].push(v.k)
        }

        weight.filter(d => d.e[0] == v.k).forEach((cw) => {
            let hv = H.filter(d => cw.e[1] == d.k)[0];
            if (hv && hv.cost > cw.w) {
                hv.cost = cw.w;
                hv.prev = v.k;
            }
        })

        weight.filter(d => d.e[1] == v.k).forEach((cw) => {
            let hv = H.filter(d => cw.e[0] == d.k)[0];
            if (hv && hv.cost > cw.w) {
                hv.cost = cw.w;
                hv.prev = v.k;
            }
        })

    }

    return _G;
}