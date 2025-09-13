
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}


const roles = ["Developer", "Analyst", "Tester", "Trader"];
let index = 0;
const roleEl = document.getElementById("role");

setInterval(() => {
  roleEl.classList.remove("fade-in");
  roleEl.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % roles.length;
    roleEl.textContent = roles[index];
    roleEl.classList.remove("fade-out");
    roleEl.classList.add("fade-in");
  }, 500);
}, 2500);
