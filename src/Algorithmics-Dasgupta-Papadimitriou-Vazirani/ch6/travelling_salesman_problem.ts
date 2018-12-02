import get_distance from "./get_distance";
export default (G: Object, el: Object, start: string) => {
    let C: Object = {
            [start]: {}
        },
        S: Array < string > = [start],
        dist = get_distance(G, el);
    for (const v in G) {
        if (v != start) {
            S.forEach(d => {
                S.push(d + v);
                C[d + v] = {};
            })
        }
    }
    S.shift();
    C[start][start] = 0;

    S.forEach(s => { // 1.s集合中
        C[s][start] = Number.MAX_VALUE;
        for (let i = 0; i < s.length; i++) {
            const cur_v = s[i]; // 2.走到cur_v
            if (cur_v != start) {
                let arr = [];
                for (let j = 0; j < s.length; j++) {
                    const temp_v = s[j];
                    if (temp_v != cur_v) {
                        arr.push(C[s.replace(cur_v, '')][temp_v] + dist[cur_v][temp_v].dist);
                    }
                }
                C[s][cur_v] = Math.min(...arr); // 3.的最短路径
            }
        }
    })

    let arr = [],
        lastC = C[S[S.length - 1]];
    for (const c in lastC) {
        c != start && arr.push(lastC[c] + dist[c][start].dist);
    }

    return Math.min(...arr);

}