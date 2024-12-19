const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

const table = document.createElement('table');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
table.style.fontFamily = 'Arial, sans-serif';

const header = document.createElement('tr');
const headers = ['Название', 'Тикер', 'Цена', 'Изменение за 24 часа'];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.backgroundColor = 'purple';
    th.style.color = 'white';
    th.style.padding = '10px';
    th.style.border = '1px solid black';
    header.appendChild(th);
});
table.appendChild(header);

let counter = 1;

data.forEach(item => {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = item.name;
    row.appendChild(name);

    const ticker = document.createElement('td');
    ticker.textContent = item.ticker;
    row.appendChild(ticker);

    const value = document.createElement('td');
    value.textContent = item.value;
    row.appendChild(value);

    const change = document.createElement('td');
    change.textContent = item.change;
    if (item.change.startsWith('-')) {
      change.style.color = 'red';
    } else {
      change.style.color = 'green';
    }
    row.appendChild(change);

    if(counter%2!=0) {
        [name, ticker, value, change].forEach(cell => {
            cell.style.border = '1px solid black';
            cell.style.padding = '10px';
            cell.style.textAlign = 'center';
            cell.style.background = 'gray';
        });
    } else {
        [name, ticker, value, change].forEach(cell => {
            cell.style.border = '1px solid black';
            cell.style.padding = '10px';
            cell.style.textAlign = 'center';
        });
    }

    table.appendChild(row);
    counter++;
});

document.getElementById('table-container').appendChild(table);