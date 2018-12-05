import get_distance from "../ch6/get_distance";

let explore = (dist: object, source: string, sink: string):(string[]|any) => {
    const _ = require("lodash");
    let _dist = _.cloneDeep(dist),
        route = [source];
    var explore = (v) => {
        if(route[route.length - 1] === sink) return true;
        for (const cur_v in _dist[v]) {
            // 当前边未访问，当前顶点不在路径中，有剩余流量
            if (!_dist[v][cur_v].visited && route.indexOf(cur_v) === -1 && _dist[v][cur_v].dist > 0) {
                route.push(cur_v);

                _dist[v][cur_v].visited = true;

                if(explore(cur_v)){
                    return true;
                }else{
                    route.pop();
                }
            }
        }
    }

    return explore(source)? route : false;
}

export default (G: Object, el: Object, source: string, sink: string) => {

    let dist = get_distance(G, el),
        vertexs = Object.keys(dist),
        max_flow = 0,
        route = [];

    for (const key in dist) {
        if (dist.hasOwnProperty(key)) {
            vertexs.forEach(d => {
                dist[key][d] || (dist[key][d] = {
                    dist: 0
                });
            })
        }
    }

    while ((route = explore(dist, source, sink)) !== false) {
        let min = dist[route[0]][route[1]].dist,
            cur_v, prev_v;
        for (let i = 1; i < route.length - 1; i++) {
            min = Math.min(min, dist[route[i]][route[i + 1]].dist);
        }

        while ((cur_v = route.pop()) !== source) {
            prev_v = route[route.length - 1];
            dist[prev_v][cur_v].dist -= min;
            dist[cur_v][prev_v].dist += min;
        }

        max_flow += min;
    }

    return max_flow;
}