import _ from "lodash";

export default (G, el, v) => {
    let dist = {},
        prev = {},
        H = [],
        new_l;

    _.forIn(el, (v, k) => {
        dist[k] = Number.MAX_VALUE;
        H.push(k);
    });
    dist[v] = 0;

    while (H.length > 0) {
        H.shift();
        for(let u in G){
            G[u].forEach((rv, i) => {
                new_l = dist[u] + +el[u][i];
                // 新路径比旧路径短
                if (dist[rv] > new_l) {
                    dist[rv] = new_l;
                    prev[rv] = u;
                }
            });
        }
    }

    console.log(prev);
    return dist;
}