const scriptURL = "https://script.google.com/macros/s/AKfycbz9VFwKdlJoX0KaQNQB4hbELExoaK2waTBYCgCY0eHqTf8sxkL9YkxGZnaLy6s7x34EXw/exec";

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
