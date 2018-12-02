import _ from "lodash";

export default (G) => {
    let _G = _.cloneDeep(G),
        forest = [],
        tree = [];

    function explore(G, v) {
        G[v].visited = true;
        G[v].forEach(d => {
            if (!G[d].visited) {
                explore(G, d);
            }
        });
        // 出栈
        tree.push(v);
    }

    for (let v in _G) {
        if (!_G[v].visited) {
            explore(_G, v);
            forest.push(tree);
            tree = [];
        }
    }
    
    return forest;
}

