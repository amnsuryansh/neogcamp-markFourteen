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
    else {
        outputE1.innerText = "No pain no gain and no gain no pain";
    }
    
}

function clickHandler() {
    var ip = Number(initialPrice.Value);
    var sqty = Number(stocksQuantity.Value);
    var cur = Number(currentPrice.Value);

    calculateProfitAndLoss(ip,sqty,cur);

}

tellMeBtn.addEventListener('click', clickHandler);
