async function preOrderPrint(currentNode) {

    if (currentNode!==null) {
        await sleep(TIME.delay);
        console.log(currentNode.val);
        setColor(currentNode.val,COLOR.finalised);
        await preOrderPrint(currentNode.leftChild);

        await preOrderPrint(currentNode.rightChild);

    }
}
async function run(){
    sleep(TIME.delay);
    await preOrderPrint(BST.root);
}
run();