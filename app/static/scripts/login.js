var cvs = document.querySelector('.cvs');//画纸
var ctx = cvs.getContext('2d');//画笔

var img = new Image();
img.src = '../static/images/canv.png';

img.onload = function (){
    ctx.beginPath();
    ctx.drawImage(img,0,0,150,50);
    


    ctx.closePath();


}

function randomCode(n) {
    var arr = [];
    // arr.length = n;
    for (var i = 0; i < n; i++) {
        arr[i] = 1;
    }
    // console.log(arr);
    for (var i in arr) {
        do {
            var ascii = Math.round(Math.random() * (122 - 48) + 48);
        } while (ascii > 57 && ascii < 65 || ascii > 90 & ascii < 97);
        arr[i] = String.fromCharCode(ascii);
    }
    return arr.join('');

}

var box = document.querySelector('.yanztxt');
box.innerHTML = randomCode(6);

