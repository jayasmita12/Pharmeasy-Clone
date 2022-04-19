
function submit(){
    window.location.href = '/html/signin.html';
}

function signinPage(){
    window.location.href = '/html/signin.html';
}
 
// button functionning

var createAccBtn = document.querySelector('.createAccBtn');
var loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || [];
createAccBtn.addEventListener('click',function(){
    var errorBox = document.querySelector('.errorBox');
    var nameErr = document.querySelector('.nameErr');
    var emailErr = document.querySelector('.emailErr');
    var passErr = document.querySelector('.passErr');
    var rePassErr = document.querySelector('.rePassErr');
    var passShortErr = document.querySelector('.passShortErr');
 
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var reEnterPass = document.querySelector('#reEnterPass').value;
    
    if(name.length && email.length && password.length && reEnterPass.length)
    {
        if(password.length < 6)
        {
            // alert('Your password is too short');
            errorBox.style.display = 'block';
            nameErr.style.display = 'none';
            emailErr.style.display = 'none';
            passErr.style.display = 'none';
            rePassErr.style.display = 'none';
            passShortErr.style.display = 'block'; 
        }
        else if(reEnterPass !== password)
        {
            // alert('Password must match');
            errorBox.style.display = 'block';
            passErr.style.display = 'none';
            nameErr.style.display = 'none';
            emailErr.style.display = 'none';
            rePassErr.style.display = 'block';
            passShortErr.style.display = 'none';

        }
        else
        {
            var obj = {name: name, email: email, password: password};
            loginInfo.push(obj);
            localStorage.setItem('loginInfo',JSON.stringify(loginInfo));
            alert('Account created Successfully');
            window.location.href = '/html/signin.html';
            name.value = '';
            email.value = '';
            password.value = '';
            reEnterPass.value = '';
        }
    }
    
    else if(!name.length && !email.length && !password.length && !reEnterPass.length){
        // alert('Please Fill all the filelds');

        errorBox.style.display = 'block';
        nameErr.style.display = 'block';
        emailErr.style.display = 'block';
        passErr.style.display = 'block';
        passShortErr.style.display = 'none';


    }
    else if(name.length === 0){
        // alert('Please Enter Your Name');
        errorBox.style.display = 'block';
        nameErr.style.display = 'block';
        emailErr.style.display = 'none';
        passErr.style.display = 'none';
        rePassErr.style.display = 'none';
        passShortErr.style.display = 'none';

        
    }
    else if(email.length === 0){
        // alert('Please Enter Your email');
        errorBox.style.display = 'block';
        emailErr.style.display = 'block';
        nameErr.style.display = 'none';
        passErr.style.display = 'none';
        rePassErr.style.display = 'none';
        passShortErr.style.display = 'none';


    }
    else if(password.length === 0){
        // alert('Please Enter Your password');
        errorBox.style.display = 'block';
        passErr.style.display = 'block';
        nameErr.style.display = 'none';
        emailErr.style.display = 'none';
        rePassErr.style.display = 'none';
        passShortErr.style.display = 'none';



    }
    else if(reEnterPass.length === 0){
        // alert('Password must match');
        errorBox.style.display = 'block';
        passErr.style.display = 'none';
        nameErr.style.display = 'none';
        emailErr.style.display = 'none';
        rePassErr.style.display = 'block';
        passShortErr.style.display = 'none';

    }
    else{
        alert('Please Fill all the filelds');
    }
});