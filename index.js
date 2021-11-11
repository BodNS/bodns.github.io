const umenieEst = document.getElementsByClassName('umenie_est');
const umenieNet = document.getElementsByClassName('umenie_net');
for (let i=0; i<umenieEst.length; i++) {
    umenieEst[i].style.width = String(70+Math.random()*10)+'%';
    umenieNet[i].style.width = String(100 - Number(umenieEst[i].style.width.substring(0, 2)))+'%';
}
    
function openDiv() {
    const openDiv = document.getElementById('work1');
    openDiv.style.display = 'inline-block';
}