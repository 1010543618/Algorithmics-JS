export default (G, v)=>{
    // 复制
    let _G = Object.assign({}, G), reachable = [];
    
    explore(_G, v)

    return reachable;

    function explore(G,v){
        reachable.push(v);
        G[v].visited = true;
        G[v].forEach(d => {
            if(!G[d].visited){
                explore(G,d);
            }
        });
    }
    
}