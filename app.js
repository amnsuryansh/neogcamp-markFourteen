const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const tellMeBtn = document.querySelector('#submit-btn');
const outputE1 = document.querySelector('#output-box');

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputE1.innerText = "Hey, the loss is "+loss+" and the percent is "+lossPercentage+"%";
    }
    else if (current>initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputE1.innerText = "Hey, the profit is "+profit+" and the percent is "+profitPercentage+"%";
    }
    else if(current==initial) {
        outputE1.innerText = "No pain no gain and no gain no pain";
    }
    
    
}

function clickHandler() {
    console.log("clicked");
    var ip = Number(initialPrice.value);
    console.log(ip);
    var sqty = Number(stocksQuantity.value);
    console.log(sqty);
    var cur = Number(currentPrice.value);
    console.log(cur);
    calculateProfitAndLoss(ip,sqty,cur);

}

tellMeBtn.addEventListener('click',clickHandler);
