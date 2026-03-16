const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQRGRI3CQpD0SKmXh_NAFup01vfjg3JSKavij6PA8fNvZrGfLhIXAlnbQ6H2d9S37_45aVPiu141vdF/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(csv => {

const rows = csv.split("\n").slice(1).reverse();
const container = document.getElementById("rfqTable");

rows.forEach(row => {

if(row.trim() === "") return;

const cols = row.split(",");

const product = cols[1];
const category = cols[2];
const quantity = cols[4];
const location = cols[5];

const card = document.createElement("div");

card.className = "rfq-card";

card.innerHTML = `
<h3>${product}</h3>
<p><strong>Category:</strong> ${category}</p>
<p><strong>Quantity:</strong> ${quantity}</p>
<p><strong>Location:</strong> ${location}</p>
<a class="btn-primary" href="rfq.html">Send Quote</a>
`;

container.appendChild(card);

});

});