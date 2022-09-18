# About & How To Use
This provides an adapter, `Tree`, which extends a `@zk-kit/incremental-merkle-tree IncrementalMerkleTree`. It uses Poseidon hash and can be constructed by supplying an array of its leaves. This makes it very easy to create an off-chain copy of an on-chain tree by supplying an array of the leaves:

```
const { Tree } = require("holo-merkle-utils");
const DEPTH = 5;
const leaves = [ 1, 2, 4, 69, 7, 130847023948123, 4, 0, 2 ];
const tree = Tree(DEPTH, leaves);
```

## Generating proofs
This generates a custom proof compatible with our circuits. This allows supplying the full path and indices to the circuit. (This circuit design was to make circuits much easier to write, not having to worry about multiplexers or direction selectors for a quinary Merkle tree)
```
tree.createProof(3); // Create proof of the leaf at index 3
tree.createSerializedProof(3); // Same but reformats outputs to be used for zokrates-js
tree.createCLISerializedProof(3); // Same but reformats outputs to be used for zokrates CLI
```