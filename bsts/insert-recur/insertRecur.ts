import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val):
 * Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {

  function _insertRecur(node: BNodeNum, val: number): void {
    if (val < node.val) {
      if (!node.left) {
        node.left = new BNodeNum(val);
      } else {
        _insertRecur(node.left, val)
      }
    } else {
      if (!node.right) {
        node.right = new BNodeNum(val);
      } else {
        _insertRecur(node.right, val)
      }
  }
}

  if (bst.root === null) {
    bst.root = new BNodeNum(val);
  } else {
    _insertRecur(bst.root, val)
  }
}

export { insertRecur };

