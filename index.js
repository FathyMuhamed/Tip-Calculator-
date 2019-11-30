document.querySelector('.totalTip').style.display = 'none';
let buttonClick = document.getElementById('calculat');

let calculatTip = () => {
    let billAmount = document.getElementById('billAmount').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numPeople = document.getElementById('totalPeople').value;
    if (billAmount === '' || serviceQuality == 0) {
        window.alert('Please enter some value to get this baby up and running');
        return;
    }

    if (numPeople === '' || numPeople <= 1) {
        numPeople = 1;
        document.getElementById('each').style.display = 'none';
    }
    else {
        document.getElementById('each').style.display = 'block';
    }
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.querySelector('.totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
};

buttonClick.onclick = () => calculatTip();


