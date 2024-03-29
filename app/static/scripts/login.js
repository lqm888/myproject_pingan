var cvs = document.querySelector('.cvs'); //画纸
var ctx = cvs.getContext('2d'); //画笔

var img = new Image();
img.src = '../static/images/pic_su/canv.png';

img.onload = function () {
    ctx.beginPath();
    ctx.drawImage(img, 0, 0, 150, 50);
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


var user = document.querySelector('.user');
var pass = document.querySelector('.pass');
var login = document.querySelector('.login');
var change = document.querySelector('.change');
var ipt = document.querySelector('.testtxt');

change.onclick = function(){
    ipt.value="";
    box.innerHTML = randomCode(6);
    
}

login.onclick = function () {
    if(user.value==''||pass.value==''){
        alert('用户名和密码不能为空！');
    }
    else{
        // cons
        var ipt_low = ipt.value.toLowerCase();
        console.log(ipt_low,box.innerHTML.toLowerCase())
        if(ipt_low == box.innerHTML.toLowerCase()){
            ajax({
                url: '../static/data/addlogin.php',
                type: 'get',
                data: 'act=login&user=' + user.value + '&pass=' + pass.value,
                succeed: function (d) {
                    var json = JSON.parse(d);
                    console.log(json.msg);
                    console.log(typeof json.msg);
                    console.log(json.msg == '登陆成功');
                    if(json.msg == '登陆成功'){
                        localStorage.setItem("islogin","1");
                        localStorage.setItem("username",user.value);
                        alert("登陆成功");
                        location.href = "../views/index.html";
                    }
                },
                failed: function (code) {
                    alert('提交失败');
                }
            });
        }
        else{
            alert('请输入正确的验证码');
        }
    }
   
}