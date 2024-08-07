var count = 0;
function increase (){
    count++
    document.getElementById('num').innerHTML= count
}
function decrease (){
    count--
    document.getElementById('num').innerHTML= count
}
function reset() {
    count = 0;
    document.getElementById('num').textContent = count;
}