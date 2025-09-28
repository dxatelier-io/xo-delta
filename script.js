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
    Every book is a garden of feelings, and this one blooms only because you’ve decided to open it. May these words be a gentle hand on your shoulder, reminding you that you are seen, you are felt, and you are enough.  
    <br><br>
    With tenderness,<br>
    The Author
  `;

  welcomeBox.style.display = "none";
  letter.classList.remove("hidden");
}

function goLibrary() {
  window.location.href = "library.html"; // halaman berikutnya
}
