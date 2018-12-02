const tape = require("tape");
const construct_adjacency_list = require("../construct_adjacency_list");
tape(__filename, ((test) => {
    test.deepEqual(
        construct_adjacency_list(['ABCD', 'BAFE', 'CAF', 'DAGH', 'EBIJ', 'FBIJ', 'FBC', 'GDH', 'HDG', 'IEJ', 'JEI', 'KL', 'LK']), {
            "A": ["B", "C", "D"],
            "B": ["A", "F", "E"],
            "C": ["A", "F"],
            "D": ["A", "G", "H"],
            "E": ["B", "I", "J"],
            "F": ["B", "C"],
            "G": ["D", "H"],
            "H": ["D", "G"],
            "I": ["E", "J"],
            "J": ["E", "I"],
            "K": ["L"],
            "L": ["K"]
        }
    );
    test.deepEqual(
        construct_adjacency_list(['S|10|8', 'A2', 'B11', 'C3', 'D|-1|', 'E|-2|', 'F|-4||-1|', 'G1']), {
            "S": ["10", "8"],
            "A": ["2"],
            "B": ["1", "1"],
            "C": ["3"],
            "D": ["-1"],
            "E": ["-2"],
            "F": ["-4", "-1"],
            "G": ["1"]
        }
    );
    test.end();
}));