export default (G) => {
    var forest = [],
        tree = [];
    for (let v in G) {
        if (!G[v].visited) {
            explore(G, v);
            forest.push(tree);
            tree = [];
        }
    }

    return forest;

    function explore(G, v) {
        tree.push(v);
        G[v].visited = true;
        G[v].forEach(d => {
            if (!G[d].visited) {
                explore(G, d);
            }
        });
    }
}