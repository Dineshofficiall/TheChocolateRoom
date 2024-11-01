const findMyState = () => {
    const status = document.querySelector('.status');

    const success = (position) =>{
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            const state = data.principalSubdivision;
            const city = data.locality;
            status.textContent = `${city}, ${state}`;
        })
    
    };
    
    const error = () => {
        status.textContent = 'Unable to retrieve your location';
    };

    navigator.geolocation.getCurrentPosition(success, error);
};




const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const emailId = document.getElementById("mail");
const address = document.getElementById("address");
const phoneNumber = document.getElementById("contact-number");
const typeMember = document.getElementById("members");



form.addEventListener('submit', validation => {
    validation.preventDefault();

    formValidation();
});

function formValidation(){
    const fullNameTrimed = fullName.value.trim();
    const emailIdTrimed = emailId.value.trim();
    const addressTrimed = address.value.trim();
    const phoneNumberTrimed = phoneNumber.value.trim();


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


    // phoneNumber
    if(phoneNumberTrimed === ''){
      setError(phoneNumber, 'Input Cannot Be Empty');
    }else{
        setSuccess(phoneNumber);
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

    if((fullNameTrimed !== '') && (addressTrimed !== '') && (emailIdTrimed !== '') && (phoneNumberTrimed !== '')){
        if(isEmail(emailIdTrimed)){
            alert("Form Success Pay to Confirm Your Booking");
        }
        else{
            alert("Please Correct The Email-Id");
        }
    }
    else{
        alert("Please Fill The Form");
    }
    
};



// kart

function deleteTag() {
    const tags = document.querySelectorAll(".kart");
    const itemTot = document.getElementById("item-total");
    const deliveryFee = document.getElementById("delivery-fee");
    const gst = document.getElementById("gst-bill");
    const total = document.getElementById("total");
    tags.forEach(tag => tag.remove());
    itemTot.remove();
    deliveryFee.remove();
    gst.remove();
    total.remove();
}

function decreament(){
    let quantity = Number(document.getElementById("qnty").innerText);
    if (quantity > 0){
        quantity -= 1;
        

        //item-tot
        // item-tot
        const price = Number(document.getElementById("default-price").innerText) * quantity; 
        document.getElementById("item-total").innerText = price;

        // Delivery
        const delivery = Number(document.getElementById("delivery-fee").innerText);
        
        // gst
        const gst = (5 / 100) * price;
        document.getElementById("gst-bill").innerText = gst;

        // total
        
        if(price > 0){
            const total = price + delivery + gst;
            document.getElementById("total").innerText = total;
        } 
        if(quantity == 0){
            const totalQuantity = 0;
            document.getElementById("total").innerText = totalQuantity;
        }
    }
    // else if(quantity == 0){
    //     price = 0;
    // }
    document.getElementById("qnty").innerText = quantity;
}
function increament(){
    let quantity = Number(document.getElementById("qnty").innerText);
    quantity += 1;
    document.getElementById("qnty").innerText = quantity;

    //item-tot
    // item-tot
    const price = Number(document.getElementById("default-price").innerText) * quantity; 
    document.getElementById("item-total").innerText = price;

    // Delivery
    const delivery = Number(document.getElementById("delivery-fee").innerText);
    
    // gst
    const gst = (5 / 100) * price;
    const roundedGST = gst.toFixed(2);
    document.getElementById("gst-bill").innerText = roundedGST;

    // total
    
    if(price > 0){
        const total = price + delivery + gst;
        document.getElementById("total").innerText = total;
    }
}

// price push
function usrPriceNonPush(){
    const userplans = document.getElementById("plansName").innerText;
    document.getElementById("content-name").innerText = userplans;

    const userPrice = Number(document.getElementById("user-price").innerText);
    document.getElementById("default-price").innerText = userPrice;
}

function usrPriceVegPush(){
    const userplans2 = document.getElementById("plansName1").innerText;
    document.getElementById("content-name").innerText = userplans2;

    const userprice2 = document.getElementById("user-price1").innerText;
    document.getElementById("default-price").innerText = userprice2;
}

// Price Updated to item tot
function updatedPrice(){

    // getting qnty
    let quantity = Number(document.getElementById("qnty").innerText);

    // item-tot
    const defaultprice = Number(document.getElementById("default-price").innerText) * quantity;
    let price = defaultprice;
    if(quantity == 0){
        price = 0;
    }else if(quantity == 1){
        price = defaultprice;
    }
    document.getElementById("item-total").innerText = price;
    
    // Delivery
    const delivery = Number(document.getElementById("delivery-fee").innerText);
    
    // gst
    const gst =(5 / 100) * price;
    document.getElementById("gst-bill").innerText = gst;

    // total
    
    if(price > 0){
        const total = price + delivery + gst;
        document.getElementById("total").innerText = total;
    }
}

function payTag(){
    if(paymentSuccess()){
        alert("Payment Success We Will Send The Table No, Id No Please Be Wait");
    }
    else{
        alert("Failed Payment");
    }
}

function paymentSuccess(){
    if(true){
        alert("Payment Success We Will Send The Table No, Id No Please Be Wait");
    }
}