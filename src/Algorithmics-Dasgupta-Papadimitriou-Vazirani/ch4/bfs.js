export default (G, v) => {
    let Q = [v], visited = [],
        dist = {}, u;
    dist[v] = 0;

    while (Q.length > 0) {
        u = Q.shift();
        visited.push(u);
        G[u].forEach(rv => {
            if(visited.indexOf(rv) === -1){
                Q.push(rv);
                dist[rv] = dist[u] + 1;
            }
        });
    }

    return dist;
}