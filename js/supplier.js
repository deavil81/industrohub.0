const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQRGRI3CQpD0SKmXh_NAFup01vfjg3JSKavij6PA8fNvZrGfLhIXAlnbQ6H2d9S37_45aVPiu141vdF/pub?output=csv";

fetch(sheetURL)
.then(response => response.text())
.then(data => {

const rows = data.split("\n").slice(1).reverse();

const container = document.getElementById("rfqTable");

rows.forEach(row => {

if(!row.trim()) return;

const cols = row.split(",");

const product = cols[1] || "N/A";
const category = cols[2] || "N/A";
const quantity = cols[4] || "N/A";
const location = cols[5] || "N/A";
const date = cols[0];

const card = document.createElement("div");
card.className = "rfq-card";

card.innerHTML = `
<h3>${product}</h3>

<p class="rfq-meta">📅 Posted: ${date}</p>

<p><strong>Category:</strong> ${category}</p>
<p><strong>Quantity:</strong> ${quantity}</p>
<p><strong>Location:</strong> ${location}</p>

<a class="btn-primary" href="rfq.html">Send Quote</a>
`;

container.appendChild(card);

});

})
.catch(error => {
console.log("RFQ Load Error:", error);
});