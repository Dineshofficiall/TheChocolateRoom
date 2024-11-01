let value = 623;
    setInterval( () => {
        value += 7;
        document.getElementById("customerRatings").innerText = value;
    }, 2000)