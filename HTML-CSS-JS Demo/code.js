// author: Sachin Rawat

// Targeting all Element
let billAmt = document.getElementById('bill-amt'),
reset = document.getElementById('reset-button'),
tipPercent;

function setPercent(percent, element) {
    tipPercent = percent;
    tipTag.innerText = `Tip Percentage ${percent}%`;
    tipTag.style.visibility = "visible";
    setColor(element);
}

function setColor(element) {
    element.style.backgroundColor = "#9fe8df";
    element.style.color = "hsl(183, 100%, 15%)";
}


// Tip percentage selection
const setFive = () => setPercent(5, five);

const setTen = () => setPercent(10, ten);

const setFifteen = () => setPercent(15, fifteen);

const setTwentyFive = () => setPercent(25, twentyFive);

const setFifty = () => setPercent(50, fifty);

// Custom Button clear and click functionality
custom.onclick = () => {
    custom.value = "";
    setColor(custom);
};

// Calculation on user number input
user.oninput = () => {
    let userVal = user.value;
    if(userVal == ""){
        userVal = 1;
        let tipAmt = (billAmt.value * tipPercent) / 100;
        console.log(tipAmt);
    }else if(userVal == 0){
       memError.style.visibility = "visible";
    }else{
        userVal = user.value;
        let tipAmt = (billAmt.value * tipPercent) / 100;
        let perTip = tipAmt / userVal,
        perAmt = billAmt.value / userVal,
        pertotal = perTip + perAmt;
        console.log(perTip, pertotal);
        tipAmt.innerText = `$${perTip}`;
        totalAmt.innerText = `$${pertotal}`;
    }
};

// Reset Button Functionality
reset.onclick = () => {
    location.reload();
};