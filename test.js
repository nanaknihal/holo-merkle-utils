const { assert } = require("console");
const { Tree } = require("./MerkleTreeAdapter.js");

// Very minimal test
const tree = Tree(5,[1,2,69]);
assert(tree.root == 4006393791711629584372014797818107887861430424986554045487852535682172597819n)
console.log(tree.toJSON())