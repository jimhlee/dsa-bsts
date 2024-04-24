import { BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  if (!node) {
    return null;
  }

  if (node.val === val){
    return node;
  }

  if (val < node.val) {
    return findRecursively(node.left, val);
  } else {
    return findRecursively(node.right, val)
  }
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {
  // Check value against the root's value, if the value is lower then loop
  // through the left side, else loop through right side

  if (!node) {
    return null;
  }

  while (node) {
    if (node.val === val) {
      return node;
    }

    (val < node.val) ?
      node = node.left :
      node = node.right;
  }

  return null;
}

export { findRecursively, find };