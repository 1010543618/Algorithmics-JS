export default (G, con) => {
    con.forEach(c => {
        if (!G[c[0]].find(c[1]) && !G[c[1]].find(c[0])) {
            return false;
        }
    });
    return true;
}