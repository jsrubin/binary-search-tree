const {
    BinarySearchTreeTraditional,
    binarySearchTreeUnordered,
    hasPathSum
} = require('./index');

const binarySearchTree = (init) => {
    let tree = new BinarySearchTreeTraditional(init);
    console.log('\nBinary Search Tree');
    console.log(JSON.stringify(tree, undefined, 2));
};

const binarySearchTreeBFI = (init) => {
    let tree = binarySearchTreeUnordered(init);
    console.log('\nBinary Search Tree - Unordered Breath First Insert');
    console.log(JSON.stringify(tree, undefined, 2));
};

// binarySearchTree([10, 4, 4, 8]);
// binarySearchTreeBFI([10, 4, 4, 8]);

let tree = binarySearchTreeUnordered([
    5,
    4,
    8,
    11,
    null,
    13,
    4,
    7,
    2,
    null,
    null,
    null,
    1
]);
console.log(hasPathSum(tree, 22) === true && 'pass'); // true

tree = binarySearchTreeUnordered([1, 2, 3]);
console.log(hasPathSum(tree, 5) === false && 'pass'); // false
console.log(hasPathSum(tree, 4) === true && 'pass'); // true
console.log(hasPathSum(tree, 3) === true && 'pass'); // true

tree = binarySearchTreeUnordered([
    5,
    4,
    8,
    11,
    null,
    13,
    4,
    7,
    2,
    null,
    null,
    null,
    1
]);
console.log(hasPathSum(tree, 22) === true && 'pass'); // true

tree = binarySearchTreeUnordered([]);
console.log(hasPathSum(tree, 0) === false && 'pass'); // false
