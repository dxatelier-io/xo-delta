const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");

const loginScreen = document.getElementById("loginScreen");
const loadingScreen = document.getElementById("loadingScreen");
const notification = document.getElementById("notification");
const letterWindow = document.getElementById("letterWindow");
const letterContent = document.getElementById("letterContent");

loginBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name) {
    loginScreen.style.display = "none";
    loadingScreen.style.display = "flex";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      notification.style.display = "block";
    }, 5000);

    notification.addEventListener("click", () => {
  notification.style.display = "none";
  letterWindow.style.display = "flex";
  letterContent.innerHTML = `
    <h1>Hello, ${name}.</h1>
    <p>
      If you’re reading this, I just want you to know—you’re welcome here.  
      Whether you came because you’re curious, or maybe because some of these words feel familiar to you,  
      I’m grateful you stopped by.  
    </p>
    <p>
      Sometimes life feels heavy, doesn’t it?  
      Like we’re carrying stories and heartbreaks that no one else sees.  
      But even in those moments, please remember: you are not alone.  
      Every word I wrote here carries a piece of my heart,  
      and maybe it can be a reminder that your feelings matter too.  
    </p>
    <p>
      So take your time, read as much or as little as you need.  
      Let these pages be a quiet place for you to rest, to feel, to breathe.  
      And if today feels like too much—please know that you’ve already made it this far,  
      and that itself is something to be proud of.  
    </p>
    <p>
      Thank you, truly, for being here.  
      I hope in some way, these words bring you a little comfort,  
      the same way writing them helped me heal.  
    </p>
    <p class="signature">— With warmth, always.</p>
  `;
});
