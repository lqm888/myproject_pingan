var user = document.querySelector('.user');
var pass = document.querySelector('.pass');
var add = document.querySelector('.regist');
var num = document.querySelector('.num');
var email = document.querySelector('.email');

add.onclick = function (){
    if(user.value==""||pass.value==""||num.value==""||email.value==""){
        alert('请正确输入')
    }
    else{
        ajax({
            url: '../static/scripts/addlogin.php',
            type: 'get',
            data: 'act=add&user='+user.value+'&pass='+pass.value,
            succeed: function (d){
                var json = JSON.parse(d);
                alert(json.msg);
                if(json.msg=='注册成功'){
                    location.href='../views/login.html';
                }
            },
            failed: function (code){
                alert('提交失败');
            }
        });
    }

}