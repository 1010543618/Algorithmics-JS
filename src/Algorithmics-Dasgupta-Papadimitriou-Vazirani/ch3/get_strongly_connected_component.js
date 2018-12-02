import reverse_graph from "./reverse_graph";
import dfs from "./dfs";
import explore from "./explore";
import _ from "lodash";
import delete_vertex from "./delete_vertex";

export default (G) => {
  let _G = _.cloneDeep(G),
    stc = [],
    gr_post = dfs(reverse_graph(G)).reduce((prev, curr) => [...prev, ...curr]).reverse();
    
  while (gr_post.length > 0) {
    let reachable = explore(_G, gr_post[0]);
    stc.push(reachable);
    gr_post = gr_post.filter(v => !reachable.includes(v));
    reachable.forEach((v) => {
      _G = delete_vertex(_G, v);
    })
  }

  return stc;
}