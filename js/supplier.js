const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRGRI3CQpD0SKmXh_NAFup01vfjg3JSKavij6PA8fNvZrGfLhIXAlnbQ6H2d9S37_45aVPiu141vdF/pub?output=csv";

fetch(sheetURL)
  .then(response => response.text())
  .then(csv => {

    const rows = csv.split("\n").slice(1);
    const table = document.getElementById("rfqTable");

    rows.forEach(row => {

      if(row.trim() === "") return;

      const cols = row.split(",");

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${cols[1]}</td>
        <td>${cols[2]}</td>
        <td>${cols[4]}</td>
        <td>${cols[5]}</td>
      `;

      table.appendChild(tr);

    });

  });
