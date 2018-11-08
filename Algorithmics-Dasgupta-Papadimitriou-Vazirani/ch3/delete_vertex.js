import _ from "lodash";

export default (G, v) => {
  let _G = _.cloneDeep(G)
  for (let gv in _G) {
    if (gv == v) {
      delete(_G[gv]);
    } else {
      _G[gv].forEach((rv, i) => {
        rv == v && _G[gv].splice(i, 1);
      });
    }
  }
  return _G;
}