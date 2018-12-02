export default (arr) => {
    var al = {};
    arr.forEach(d => {
        let ca = d.substr(1).split(''),
            c = '',
            buf = '',
            is_start = false,
            vs = [];

        while ((c = ca.shift()) !== undefined) {
            if (c == "|") {
                if (is_start) {
                    vs.push(buf);
                    buf = '';
                    is_start = false;
                } else {
                    is_start = true;
                }
            } else {
                is_start ? buf += c : vs.push(c);
            }
        };

        al[d[0]] = vs;
        vs = [];
    });

    return al;
}