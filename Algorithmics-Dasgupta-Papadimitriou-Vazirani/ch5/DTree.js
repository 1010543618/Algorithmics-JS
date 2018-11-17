// Directed Tree
export default class DTree {
    constructor(u) {
        return {
            parent: null,
            value: u,
            rank: 0
        }
    }

    static find(s) {
        while (s.parent !== null) s = s.parent;
        return s;
    }

    static union(s1, s2) {
        let rs1 = this.find(s1),
            rs2 = this.find(s2)
        if (rs1 == rs2) {
            return
        }
        if (rs1.rank > rs2.rank) {
            rs2.parent = rs1;
        } else {
            rs1.parent = rs2;
            rs1.rank == rs2.rank && rs2.rank++;
        }
    }
}