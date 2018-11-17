import DTree from './DTree';

export default (G, w) => {
    let _G = {},
        dtree = {},
        weight = [];

    for (const k in G) {
        _G[k] = [];
        dtree[k] = new DTree(k);
        G[k].forEach(v => {
            // arrow head/tail
            weight.push({
                at: k,
                ah: v,
                w: w[k][v]
            })
        });
    }

    weight.short((x, y) => x > y)
        .forEach(d => {
            if (DTree.find(dtree[d.at]) != DTree.find(dtree[d.ah])) {
                _G[d.at].push(d.ah);
                DTree.union(dtree[d.at], DTree.find(dtree[d.ah]));
            }
        });

    return _G;

}