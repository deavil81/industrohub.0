const scriptURL =https://script.google.com/macros/s/AKfycbxuqarRFEjIWfQjWta68JXrJo9udH9SJAYbr-vDcX-TwhXAYafVSxhfZ1A6oH_msNFLuw/exec;

document.getElementById("rfqForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const formData = new FormData(this);

  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => {
    alert("RFQ submitted successfully!");
    document.getElementById("rfqForm").reset();
  })
  .catch(error => {
    alert("Error submitting RFQ");
  });

});

