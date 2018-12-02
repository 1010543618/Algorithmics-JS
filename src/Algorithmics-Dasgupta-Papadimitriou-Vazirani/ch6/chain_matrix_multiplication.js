export default (mat) => {
    let C = new Array(mat.length),
        min;
    for (let i = 0; i < C.length; i++) {
        C[i] = new Array(mat.length);
        C[i][i] = {
            cost: 0,
            size: mat[i]
        };
    }

    for (let j = 1; j < C.length; j++) {
        for (let i = j - 1; i >= 0; i--) {
            min = {
                cost: C[i][i].cost + C[i + 1][j].cost + C[i][i].size[0] * C[i][i].size[1] * C[i + 1][j].size[1],
                size: [C[i][i].size[0], C[i + 1][j].size[1]]
            };
            for (let k = i + 1; k < j; k++) {
                let cost = C[i][k].cost + C[k + 1][j].cost + C[i][k].size[0] * C[i][k].size[1] * C[k + 1][j].size[1];
                if (min.cost > cost) {
                    min = {
                        cost,
                        size: [C[i][k].size[0], C[k + 1][j].size[1]]
                    };
                }
            }
            C[i][j] = min;
        }
    }
    return C[0][mat.length - 1];
};