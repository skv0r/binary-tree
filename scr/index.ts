class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        console.log(`${value} Добавлен!`);
    }
}

class BinarySearchTree {
    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    add(value: number): void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else if (this.search(value)) {
            console.warn(`Значение ${value} уже в дереве, пропуск...`);
        } else {
            this.addRecursion(this.root, value);
        }
    }

    private addRecursion(node: TreeNode, value: number): void {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                this.addRecursion(node.left, value);
            }
        } else if (value > node.value) {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                this.addRecursion(node.right, value);
            }
        }
    }

    search(value: number): boolean {
        return this.searchRecursion(this.root, value);
    }

    private searchRecursion(node: TreeNode | null, value: number): boolean {
        if (node === null) return false;
        if (value === node.value) return true;
        return value < node.value
            ? this.searchRecursion(node.left, value)
            : this.searchRecursion(node.right, value);
    }

    printTree(): void {
        this.printTreeRecursively(this.root, "", true);
    }

    private printTreeRecursively(node: TreeNode | null, indent: string, last: boolean): void {
        if (node !== null) {
            console.log(indent + (last ? "R---- " : "L---- ") + node.value);
            indent += last ? "     " : "|    ";
            this.printTreeRecursively(node.left, indent, false);
            this.printTreeRecursively(node.right, indent, true);
        }
    }
}


const bst = new BinarySearchTree();
const valuesToAdd = [10, 15, 15, 3, 7, 12, 18, 1, 2, 4, 6, 8, 9, 11, 13, 14, 16, 17, 19, 20];

for (const value of valuesToAdd) {
    bst.add(value);
}

console.log("Бинарное дерево поиска:");
bst.printTree();
