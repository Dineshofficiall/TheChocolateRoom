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
// document.querySelector('.find-state').addEventListener('click', findMyState);




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
    document.getElementById("gst-bill").innerText = gst;

    // total
    
    if(price > 0){
        const total = price + delivery + gst;
        document.getElementById("total").innerText = total;
    }
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
    const gst = (5 / 100) * price;
    document.getElementById("gst-bill").innerText = gst;

    // total
    
    if(price > 0){
        const total = price + delivery + gst;
        document.getElementById("total").innerText = total;
    }
}


