import _ from "lodash";

export default (G, el, v) => {
    let dist = {},
        prev = {},
        // 感觉这个优先队列没有什么用，最后还是所有点遍历一遍
        H = [],
        u, new_l;

    _.forIn(el, (v, k) => {
        dist[k] = Number.MAX_VALUE
    });
    dist[v] = 0;

    H.push({
        k: v,
        v: 0
    });

    while (H.length > 0) {
        u = H.shift().k;
        G[u].forEach((rv, i) => {
            new_l = dist[u] + +el[u][i];
            // 新路径比旧路径短
            if (dist[rv] > new_l) {
                dist[rv] = new_l;
                prev[rv] = u;
                H.push({
                    k: rv,
                    v: dist[rv]
                });
            }
        });
        H.sort((a, b) => a.v > b.v);
    }

    return dist;
}