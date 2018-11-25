export default (str1, str2) => {
    let E = new Array(str1.length + 1);

    for (let i = 0; i < str1.length + 1; i++) {
        E[i] = new Array(str2.length + 1);
        E[i][0] = i;
    }

    for (let i = 1; i < str2.length + 1; i++) {
        E[0][i] = i;
    }

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            E[i][j] = Math.min(1 + E[i - 1][j], 1 + E[i][j - 1], (str1[i] == str2[j] ? 0 : 1) + E[i - 1][j - 1]);
        }
    }

    return E[str1.length][str2.length];

}