import _ from "lodash";

export default (G, v) => {
    let _G = _.cloneDeep(G),
        reachable = [];

    function explore(G, v) {
        reachable.push(v);
        G[v].visited = true;
        G[v].forEach(d => {
            if (!G[d].visited) {
                explore(G, d);
            }
        });
    }
    
    explore(_G, v)

    return reachable;
}

