const scriptURL = "https://script.google.com/macros/s/AKfycbyB2vTegPXTJI9EAQjbzQg1JhfXVtaa7pBivaLLEsPLJsj6VREe9bIq8sDrUhJwp-M5VQ/exec";

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("rfqForm");

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {

      document.getElementById("successMessage").style.display = "block";

      form.reset();

    })
    .catch(error => {

      alert("Error submitting RFQ");
      console.error(error);

    });

  });

});

