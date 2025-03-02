class TreeNode {
    
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    add(value: number) : void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.addRecursion(this.root, value)
        }
    }

    private addRecursion (node: TreeNode, value: number) : TreeNode {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } 
            
            else {
                this.addRecursion(node.left, value)
            }
        }

        else if (value > node.value) {
            if (node.right ===  null) {
                node.right = new TreeNode(value);
            }

            else {
                this.addRecursion(node.right, value)
            }
        }

        return node;
    }

    search(value: number) : boolean {
        return this.searchRecursion(this.root, value);
    }

    private searchRecursion(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        } if (value === node.value) {
            return true
        }
        return value < node.value ? this.searchRecursion(node.left, value) : this.searchRecursion(node.right, value);
    }

    printTree() : void {
        this.printTreeRecursion(this.root, "", true);
    }

    private printTreeRecursion(node: TreeNode | null, indent: string, last: boolean): void {
        if (node !== null) {
            console.log(indent + (last ? "R---- " : "L---- ") + node.value);
            indent += last ? "     " : "|    ";
            this.printTreeRecursion(node.left, indent, false);
            this.printTreeRecursion(node.right, indent, true);
        }
    }
}

const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(18);
bst.add(1);
bst.add(2);
bst.add(4);
bst.add(6);
bst.add(8);
bst.add(9);
bst.add(11);
bst.add(13);
bst.add(14);
bst.add(16);
bst.add(17);
bst.add(19);
bst.add(20);

console.log("Бинарное дерево поиска:");
bst.printTree();