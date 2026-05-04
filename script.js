function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

function submitForm(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;

  alert("Thank you " + name + "! Your message has been sent.");
}
