import DTree from './DTree';

export default (G, w) => {
    let _G = {},
        dtree = {},
        weight = [];

    for (const k in G) {
        _G[k] = [];
        dtree[k] = new DTree(k);
        G[k].forEach((v, i) => {
            weight.push({
                e: [k, v],
                w: +w[k][i]
            })
        });
    }

    weight.sort((x, y) => x.w - y.w)
        .forEach(d => {
            if (DTree.find(dtree[d.e[0]]) != DTree.find(dtree[d.e[1]])) {
                _G[d.e[0]].push(d.e[1]);
                DTree.union(dtree[d.e[0]], DTree.find(dtree[d.e[1]]));
            }
        });

    return _G;

}