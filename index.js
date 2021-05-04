/** Given a binary tree, find its minimum depth.
 * @param {TreeNode} root
 * @param {number} level
 * @param {number} minLevel
 * @return {number}
 */
const minDepth = (root, level = 0, minLevel = 0) => {
  let min = minLevel;
  if (!root || Object.keys(root).length === 0) {
    return min;
  }
  level++;
  if (typeof root.val === "number" && !root.left && !root.right) {
    if (min === 0) {
      min = level;
    } else if (min > level) {
      min = level;
    }
  }
  if (root.left) {
    min = minDepth(root.left, level, min);
  }
  if (root.right) {
    min = minDepth(root.right, level, min);
  }
  return min;
};

module.exports = {
  minDepth
};
