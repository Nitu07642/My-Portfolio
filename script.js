


const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  // toggle.classList.toggle('hidden');
});



AOS.init();
var typed = new Typed("#typed", {
  strings: [" Front Developer", "Frontend Enthusiast", "Web Developer", "Software Developer"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});



//  Start Skills circle progress part 
const circles = document.querySelectorAll('.circle-skill');

circles.forEach(circle => {
  const percent = circle.getAttribute('data-percent');
  const progress = circle.querySelector('.circle-progress');
  const text = circle.querySelector('.percentage');

  const radius = 115;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  progress.style.strokeDasharray = circumference;
  progress.style.strokeDashoffset = circumference;

  let current = 0;
  const speed = 20;

  const animate = setInterval(() => {
    if (current >= percent) {
      clearInterval(animate);
    } else {
      current++;
      let currOffset = circumference - (current / 100) * circumference;
      progress.style.strokeDashoffset = currOffset;
      text.textContent = current + "%";
    }
  }, speed);
});
//  end Skills circle progress part 



//  start form 


//  Initialize EmailJS with your public key
emailjs.init("u4y5f7UiKEFcXhtuP");

//  Form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_portfolio_07642", //  your service ID
    "template_msl0ays",        //  your template ID
    this                       //  the form itself
  ).then(function (response) {
    alert("Message sent successfully!");
    e.target.reset(); // Reset the form
  }, function (error) {
    console.error("FAILED...", error);
    alert("Failed to send message. Please try again.");
  });
});

//  end form
