export default (arr)=>{
    var al = {};
    arr.forEach(d => {
        al[d[0]] = d.substr(1).split('');
    });
    return al;
}