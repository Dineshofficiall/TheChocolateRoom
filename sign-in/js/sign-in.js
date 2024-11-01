const form = document.getElementById("form");
const emailId = document.getElementById("mail");
const password = document.getElementById("password");


form.addEventListener('submit', validation => {
    validation.preventDefault();

    formValidation();
});

function formValidation(){
    const emailIdTrimed = emailId.value.trim();
    const passwordTrimed = password.value.trim();
    
    // email-id
    if(emailIdTrimed === ''){
        setError(emailId, 'Mail-id Cannot Be Empty');
    }else if(!isEmail(emailIdTrimed)){
        setError(emailId,'Please Enter The Right Mail-id');
    }else{
        setSuccess(emailId);
    }

    function isEmail(email){
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    // password
    if(passwordTrimed === ''){
        setError(password, 'Password Cannot Be Empty');
    }else{
        setSuccess(password);
    }

    function setError(input, message){
        const formControll = input.parentElement;
        const small = formControll.querySelector('small');
        formControll.className = 'form-controll error';
        small.innerText = message;
    }

    function setSuccess(input){
        const formControll = input.parentElement;
        formControll.className = 'form-controll success';
    }
};