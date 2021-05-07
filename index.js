/** Given a binary tree, find its minimum depth.
 * @param {TreeNode} root
 * @param {number} level
 * @param {number} minLevel
 * @return {number}
 */
const minDepth = (root, level = 0, minLevel = 0) => {
    let min = minLevel
    if (!root || Object.keys(root).length === 0) {
        return min
    }
    level++
    if (typeof root.val === 'number' && !root.left && !root.right) {
        if (min === 0) {
            min = level
        } else if (min > level) {
            min = level
        }
    }
    if (root.left) {
        min = minDepth(root.left, level, min)
    }
    if (root.right) {
        min = minDepth(root.right, level, min)
    }
    return min
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, currentSum = 0, result = false) {
    let sum = currentSum
    let match = result
    if (!root || Object.keys(root).length === 0) {
        return targetSum === sum
    }

    // add root.val to currentSum
    sum = sum + root.val

    // if we hit a leaf then check against target
    if (typeof root.val === 'number' && !root.left && !root.right) {
        return targetSum === sum ? true : result
    }
    if (root.left) {
        match = hasPathSum(root.left, targetSum, sum, match)
    }
    if (root.right) {
        match = hasPathSum(root.right, targetSum, sum, match)
    }
    return match
}

/* 
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.count = 0;
  };
};
*/
// Function Declaration, named function, hoised and loaded before execution
function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

// Function Expression, unamed function, stored as variable, not hoised
const breadthFirstInsert = (tree, value, insert) => {
    if (tree == null) {
        return insert(value)
    }

    let queue = [tree]
    let done = false

    // loop till we find null node
    while (queue.length > 0 && !done) {
        let item = queue.shift()
        let val = item && item.value

        if (item == null) {
            item = insert(value)
            done = true
            continue
        }
        // keep searching, move on to next node
        if (val == null) {
            continue
        }
        if (item.left == null) {
            item.left = insert(value)
            done = true
            continue
        } else if (item.right == null) {
            item.right = insert(value)
            done = true
            continue
        }
        if (item.left != null) {
            queue.push(item.left)
        }
        if (item.right != null) {
            queue.push(item.right)
        }
    }

    return tree
}

//var array = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const binarySearchTreeUnordered = (array) => {
    if (!array) {
        return null
    }
    return array.reduce(
        (t, v) =>
            t ? breadthFirstInsert(t, v, (val) => new Node(val)) : new Node(v),
        null
    )
}

function BinarySearchTreeTraditional() {
    this.root = null
    this.add = (val) => {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root

        const addNode = (side) => {
            if (!current[side]) {
                current[side] = newNode
                return this
            }
            current = current[side]
        }

        while (true) {
            if (val === current.val) {
                return this
            }
            if (val < current.val) addNode('left')
            else addNode('right')
        }
    }
    this.smallest = () => {
        let current = this.root
        let found = 0
        while (current && current.val) {
            if (current.left != null) {
                current = current.left
            } else {
                found = current.val
                current = null
            }
        }
        return found
    }
    this.largest = () => {
        let current = this.root
        let found = 0
        while (current && current.val) {
            if (current.right != null) {
                current = current.right
            } else {
                found = current.val
                current = null
            }
        }
        return found
    }
}

module.exports = {
    minDepth,
    hasPathSum,
    binarySearchTreeUnordered,
    BinarySearchTreeTraditional,
}
