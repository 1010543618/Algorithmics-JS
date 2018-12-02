const _ = require("lodash");
export default (G: Object , el: Object) => {
    let _G = _.cloneDeep(G);
    for (const k in G) {
        if (G.hasOwnProperty(k)) {
            _G[k] = {};
            for (let i = 0; i < G[k].length; i++) {
                _G[k][G[k][i]] = {dist: +el[k][i]}
            }
        }
    }
    return _G;
}