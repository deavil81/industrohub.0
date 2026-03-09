const scriptURL = "https://script.google.com/macros/s/AKfycbxuqarRFEjIWfQjWta68JXrJo9udH9SJAYbr-vDcX-TwhXAYafVSxhfZ1A6oH_msNFLuw/exec";

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("rfqForm");

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(response => {
      document.getElementById("successMessage").style.display = "block";
      form.reset();
    })
    .catch(error => {
      alert("Error submitting RFQ");
      console.error(error);
    });

  });

});

