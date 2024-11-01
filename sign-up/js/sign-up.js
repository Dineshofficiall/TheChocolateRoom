const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const emailId = document.getElementById("mail");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const city = document.getElementById("city");
const address = document.getElementById("address");



form.addEventListener('submit', validation => {
    validation.preventDefault();

    formValidation();
});

function formValidation(){
    const fullNameTrimed = fullName.value.trim();
    const emailIdTrimed = emailId.value.trim();
    const passwordTrimed = password.value.trim();
    const rePasswordTrimed  = rePassword.value.trim();
    const cityTrimed = city.value.trim();
    const addressTrimed = address.value.trim();

    // fullName
    if(fullNameTrimed === ''){
        setError(fullName, 'Input Cannot Be Empty');
    }else{
        setSuccess(fullName);
    }

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

    // rePassword
    if(rePasswordTrimed === ''){
        setError(rePassword, 'Re Passwords Cannot Be Empty');
    }else{
        if(passwordTrimed !== rePasswordTrimed){
            setError(rePassword, 'Passwords Are MisMatch');
        }else{
            setSuccess(rePassword);
        }
    }

    // city
    if(cityTrimed === ''){
      setError(city, 'Input Cannot Be Empty');
    }else{
        setSuccess(city);
    }

    // Address
    if(addressTrimed === ''){
      setError(address, 'Input Cannot Be Empty');
    }else{
        setSuccess(address);
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