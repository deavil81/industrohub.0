const sheetURL = "https://script.google.com/macros/s/AKfycbxuqarRFEjIWfQjWta68JXrJo9udH9SJAYbr-vDcX-TwhXAYafVSxhfZ1A6oH_msNFLuw/exec";

fetch(sheetURL)
.then(res => res.json())
.then(data => {

  const table = document.getElementById("rfqTable");

  data.forEach(rfq => {

    const row = table.insertRow();

    row.insertCell(0).innerText = rfq.product;
    row.insertCell(1).innerText = rfq.category;
    row.insertCell(2).innerText = rfq.quantity;
    row.insertCell(3).innerText = rfq.location;

  });

});
