export default (G, con) => {
    for (let i = 0; i < con.length; i++) {
        const c = con[i];
        if (G[c[0]] && !G[c[0]].find(d => d == c[1]) && G[c[1]] && !G[c[1]].find(d => d == c[0])) {
            return false;
        }
    }
    return true;
}