const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRGRI3CQpD0SKmXh_NAFup01vfjg3JSKavij6PA8fNvZrGfLhIXAlnbQ6H2d9S37_45aVPiu141vdF/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(csv => {

const rows = csv.split("\n").slice(1).reverse();
const container = document.getElementById("liveRFQs");

rows.slice(0,6).forEach(row => {

if(row.trim() === "") return;

const cols = row.split(",");

const product = cols[1];
const category = cols[2];
const quantity = cols[4];
const location = cols[5];


const card = document.createElement("div");

card.className = "rfq-card";

card.innerHTML = `
<div class="rfq-title">${product}</div>

<div class="rfq-info">
<span>📦 ${category}</span>
<span>⚖️ ${quantity}</span>
<span>📍 ${location}</span>
</div>

<div class="rfq-action">
<a href="rfq.html">Send Quote</a>
</div>
`;

container.appendChild(card);

});

});
