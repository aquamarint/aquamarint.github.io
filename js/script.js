// Toggle class active
//Toggle view itu seperti saklar, membuat yang tidak ada menjadi ada, atau sebaliknya
const navbarNav = document.getElementsByClassName("navbar-nav")[0]; // Mengakses elemen pertama dengan kelas "navbar-nav"

// Ketika tombol hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // selain variabel 'hamburger' dan 'navbar' nav di klik
  // Klik pointer mouse ditandain dengan e.target
  //class pada variabel navbarnav yaitu 'active' akan dihilangkan
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function scroll() {
  var scrolls = document.querySelectorAll(".scroll");
  for (var i = 0; i < scrolls.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = scrolls[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      scrolls[i].classList.add("active");
    } else {
      scrolls[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scroll);

scroll();
