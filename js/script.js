const scriptURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRGRI3CQpD0SKmXh_NAFup01vfjg3JSKavij6PA8fNvZrGfLhIXAlnbQ6H2d9S37_45aVPiu141vdF/pub?output=csv";

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


