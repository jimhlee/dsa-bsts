import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val):
 * Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  const newNode = new BNodeNum(val = val);
  const root = bst.root;

  if (root === null) bst.root = newNode;
  // check left and right nodes
  if (root && !root.right) {
    root.right = newNode;
  } else if (root && !root.left) {
    root.left = newNode;
  }

  // insertRecur();

  // if has both, check the children's left and right nodes
}

export { insertRecur };

