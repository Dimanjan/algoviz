
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
        this.parent="";
    }

    insert(currentNode, newValue) {
        if (currentNode === null) {
            
            currentNode = new Node(newValue);
            currentNode.parent=this.parent;
        } else if (newValue < currentNode.val) {
        console.log(currentNode.val)
        this.parent=currentNode.val;
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
        console.log(currentNode.val)
        this.parent=currentNode.val;

            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }

    insertBST(newValue) {
      console.log('inserting ' + newValue)
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
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
          console.log(currentNode.val,currentNode.parent);
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
var BST = new BinarySearchTree(6);

console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(10);
BST.insertBST(14);
//many more such insertions

// function to make random n insertBST

function randomInsert(BST,n){

    for(var i=0;i<n;i++){
        var random=Math.floor(Math.random()*n*1000);
        BST.insertBST(random);
    }
}
//randomInsert(BST,10);

let csvData="child,parent\n";
BST.forCSV(BST.root);
let stratify = d3.stratify()
    .id(d => d['child'])
    .parentId(d => d['parent'])
let links = d3.csvParse(csvData)
console.log(links)
let treeData = stratify(links) // this will be used to create tree using d3.tree()
