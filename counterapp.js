let count = 0;
function increase() { 
    count = count + 1

     document.getElementById("input").textContent = count

}
function decrease() {
    
     document.getElementById("input").textContent = count--

}
function reset() {
    let count = 0; 
    document.getElementById("input").textContent = count
}