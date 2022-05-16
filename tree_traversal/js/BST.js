
class Node {
    constructor(value) {
        this.val = value;
        this.parent="";
        this.leftChild = null;
        this.rightChild = null;
    }

}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
        this.parent=""; // for tracking the parent of the current node for the CSV file
        this.queue = [this.root]; //for breadth first traversal
    }

    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
            currentNode.parent=this.parent;
        } else if (newValue < currentNode.val) {
        this.parent=currentNode.val;
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
        this.parent=currentNode.val;

            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }

    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }

    breadthFirstPrint() {
        while (this.queue.length > 0) {
            let currentNode = this.queue.shift();
            if (currentNode.leftChild !== null) {
                this.queue.push(currentNode.leftChild);
            }
            if (currentNode.rightChild !== null) {
                this.queue.push(currentNode.rightChild);
            }
        }
    }
    
    preOrderPrint(currentNode) {
        if (currentNode !== null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }

    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.val);
            this.inOrderPrint(currentNode.rightChild);
        }
    }

    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.val);
        }
    }

    forCSV(currentNode) {
        if (currentNode!==null) {
          if (currentNode.val==BST.root.val){
            csvData+='num'+currentNode.val+','+currentNode.parent+'\n';

          } else {
          csvData+='num'+currentNode.val+','+'num'+currentNode.parent+'\n';

          }
            this.forCSV(currentNode.leftChild);
            this.forCSV(currentNode.rightChild);


        }
    }

}
let treeData1=[6,4,9,2,5,8,12,10,14];
var BST = new BinarySearchTree(treeData1[0]);
treeData1.splice(1).forEach(element => {
    BST.insertBST(element);
});

let csvData="child,parent\n";
BST.forCSV(BST.root);
let stratify = d3.stratify()
    .id(d => d['child'])
    .parentId(d => d['parent'])
let links = d3.csvParse(csvData)
let treeData = stratify(links) // this will be used to create tree using d3.tree()
