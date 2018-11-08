import _ from "lodash";

export default (G, v) => {
    let Q = [v],
        dist = {}, u;
    dist[v] = 0;

    while (Q.length > 0) {
        u = Q.shift();
        G[u].forEach(rv => {
            Q.push(rv);
            dist[rv] = dist[u] + 1;
        });
    }

    return dist;
}