// Directed Tree
export default class DTree {
    constructor(u) {
        let v = {
            parent: null,
            value: u,
            rank: 0
        }
        v.parent = v;
        return v;
    }

    static find(s) {
        s !== s.parent && (s.parent = this.find(s.parent));
        return s.parent;
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