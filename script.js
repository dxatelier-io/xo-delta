function showLetter() {
  const name = document.getElementById("username").value.trim();
  if (!name) {
    alert("Please enter your name first 🌸");
    return;
  }

  const welcomeBox = document.getElementById("welcome-box");
  const letter = document.getElementById("letter");
  const message = document.getElementById("personal-message");

  message.innerHTML = `
    Dear <strong>${name}</strong>,<br><br>
    Welcome to <em>DX Atelier ∆</em>.  
    I’m truly grateful that you’re here, stepping into this little world of words I’ve built.  
    May every page you turn remind you that your feelings matter, your story matters,  
    and above all—<strong>you matter</strong>.  
    <br><br>
    With warmth and sincerity,<br>
    The Author
  `;

  welcomeBox.style.display = "none";
  letter.classList.remove("hidden");
}

function goLibrary() {
  window.location.href = "library.html"; // halaman berikutnya
}
