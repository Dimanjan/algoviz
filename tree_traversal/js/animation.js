async function breadthFirstPrint(tree) {
    while (tree.queue.length > 0) {
        let currentNode = tree.queue.shift();

        await sleep(TIME.delay);
        console.log(currentNode.val);
        setColor(currentNode.val,COLOR.finalised);

        if (currentNode.leftChild !== null) {
            tree.queue.push(currentNode.leftChild);
        }
        if (currentNode.rightChild !== null) {
            tree.queue.push(currentNode.rightChild);
        }
    }
}

async function preOrderPrint(currentNode) {

    if (currentNode!==null) {
        await sleep(TIME.delay);
        console.log(currentNode.val);
        setColor(currentNode.val,COLOR.finalised);

        await preOrderPrint(currentNode.leftChild);
        await preOrderPrint(currentNode.rightChild);

    }
}
async function inOrderPrint(currentNode) {

    if (currentNode!==null) {
        await inOrderPrint(currentNode.leftChild);

        await sleep(TIME.delay);
        console.log(currentNode.val);
        setColor(currentNode.val,COLOR.finalised);

        await inOrderPrint(currentNode.rightChild);

    }
}
async function postOrderPrint(currentNode) {

    if (currentNode!==null) {
        await preOrderPrint(currentNode.leftChild);
        await preOrderPrint(currentNode.rightChild);

        await sleep(TIME.delay);
        console.log(currentNode.val);
        setColor(currentNode.val,COLOR.finalised);
    }
}
async function run(){
    sleep(TIME.delay);
    //await preOrderPrint(BST.root);
    await breadthFirstPrint(BST)
}
run();