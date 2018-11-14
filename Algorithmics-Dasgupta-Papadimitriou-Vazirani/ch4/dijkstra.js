import _ from "lodash";

export default (G, el, v) => {
    let dist = {},
        prev = {},
        H = [],
        H_l = 0,
        u, new_l;

    _.forIn(el, (v, k) => {
        dist[k] = Number.MAX_VALUE
    });
    dist[v] = 0;

    H.push({
        k: v,
        v: 0
    });
    H_l++;

    while (H_l > 0) {
        // 用d堆更高效
        for (let i = H_l - 1; i >= 1; i--) {
            H[i].v < H[i - 1].v && ([H[i], H[i - 1]] = [H[i - 1], H[i]]);
        }
        u = H[0].k;
        H[0].v = Number.MAX_VALUE;
        H_l--;
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
                H_l++;
            }
        });
    }

    console.log(prev);
    return dist;
}