export default (G, v) => {
    let Q = [v], visited = [v],
        dist = {}, u;
    dist[v] = 0;

    while (Q.length > 0) {
        u = Q.shift();
        G[u].forEach(rv => {
            if(visited.indexOf(rv) === -1){
                visited.push(rv);
                Q.push(rv);
                dist[rv] = dist[u] + 1;
            }
        });
    }

    return dist;
}