async function _mergeArrays(a, b) {
    const c = []
  
    while (a.length && b.length) {
      c.push(a[0] < b[0] ? a.shift() : b.shift())
    }
  
    //if we still have values, let's add them at the end of `c`
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
    console.log(c)
    return c
  }
  
async function mergeSort(a){
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = await mergeSort(a_l)
    const sorted_r = await mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    await mergeSort(BARS);
});