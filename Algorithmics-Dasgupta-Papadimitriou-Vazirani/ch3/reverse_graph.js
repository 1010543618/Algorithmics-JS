export default (G) => {
  let _GR = {};

  for (let v in G) {
    _GR[v] = [];
  }

  for (let v in G) {
    G[v].forEach(reachable_v => {
      _GR[reachable_v].push(v);
    });
  }

  return _GR;
}