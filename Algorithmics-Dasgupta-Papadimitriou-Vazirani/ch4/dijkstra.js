import _ from "lodash";

export default (G, el, v) => {
    let dist = {},
        prev = {},
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
        // 用d堆更高效
        for (let i = H.length - 1; i >= 1; i--) {
            H[i].v < H[i - 1].v && ([H[i], H[i - 1]] = [H[i - 1], H[i]]);
        }
        u = H.shift().k;
        G[u].forEach((rv, i) => {
            new_l = dist[u] + +el[u][i];
            // 新路径比旧路径短
            if (dist[rv] > new_l) {
                dist[rv] = new_l;
                prev[rv] = u;

                let cn = H.find(d => d.k == rv);
                cn ? cn.v = dist[rv] : H.push({
                    k: rv,
                    v: dist[rv]
                });
            }
        });
    }

    console.log(prev);
    return dist;
}