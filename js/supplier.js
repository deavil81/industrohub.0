const sheetURL = "https://script.google.com/macros/s/AKfycbxuqarRFEjIWfQjWta68JXrJo9udH9SJAYbr-vDcX-TwhXAYafVSxhfZ1A6oH_msNFLuw/exec";

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

  })
  .catch(error => console.error("Error loading RFQs:", error));
