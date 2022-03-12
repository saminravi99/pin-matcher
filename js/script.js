document.getElementById("generate-btn").addEventListener("click", function() {
    let pinNum = Math.floor(Math.random() * 10000) + "";
    if(pinNum.length < 4) {
        pinNum = Math.floor(Math.random() * 10000) + "";
    }
    if(pinNum.length = 4) {
        document.getElementById("pin-input").value = pinNum;
    }
});

document.getElementById("calc-body").addEventListener("click", function(event) {

    let previousPinDigit = document.getElementById("submit-pin-input").value;
    let digit = event.target.innerText;
    let finalPinInput = previousPinDigit + digit;

    if(digit == "C") {
        document.getElementById("submit-pin-input").value = "";
    }else if( digit == "<"){
        document.getElementById("submit-pin-input").value = previousPinDigit.slice(0, -1);
    }else if(digit == "Submit"){
        document.getElementById("submit-pin-input").value = "";
    }else if (finalPinInput.length <= 4){
        document.getElementById("submit-pin-input").value = finalPinInput;
    }else {
        document.getElementById("submit-pin-input").value = finalPinInput.slice(0, -1);
    }
});

document.getElementById("submit-btn").addEventListener("click", function() {
    if(document.getElementById("submit-pin-input").value == document.getElementById("pin-input").value) {
        document.getElementById("fail-notify").style.display = "none";
        document.getElementById("success-notify").style.display = "block";
        document.getElementById("submit-pin-input").value = "";
    }
    else {

        document.getElementById("success-notify").style.display = "none";
        document.getElementById("fail-notify").style.display = "block";
        document.getElementById("submit-pin-input").value = "";

        let failTryCount = document.getElementById("fail-try-count").innerText;
        let newFailTryCount = parseInt(failTryCount) - 1;

        if(newFailTryCount > 0){
            document.getElementById("fail-try-count").innerText = newFailTryCount;
        }
        if(newFailTryCount == 0){
            document.getElementById("submit-pin-input").disabled = true;
            document.getElementById("submit-btn").disabled = true;
            let disableButtons = document.getElementsByClassName("button");
            for(let i = 0; i < disableButtons.length; i++) {
                disableButtons[i].style.cursor = "auto";
            }
            document.getElementById("fail-try-count").innerText = 0;
        }
    }
});