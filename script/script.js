let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
  function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = 'fa fa-eye-slash showpwd';
    } else {
      x.type = "password";
      el.className = 'fa fa-eye showpwd';
    }
  }

  /*Scroll Reveal*/

  window.revelar = ScrollReveal({reset:true});

  revelar.reveal('.foto-reveal-1', {
    duration: 1500,
    distance: '90px',
    origin: 'left'
})

  revelar.reveal('.foto-reveal-2', {
    duration: 1500,
    distance: '90px',
    delay: 200,
    origin: 'left'
})

  revelar.reveal('.sessao-reveal-1', {
    duration: 1500,
    opacity: 0,
})

  revelar.reveal('.card-reveal-1', {
    duration: 1500,
    distance: '90px',
})

  revelar.reveal('.card-reveal-2', {
    duration: 1500,
    distance: '90px',
    delay: 200,
})

  revelar.reveal('.card-reveal-3', {
    duration: 1500,
    distance: '90px',
    delay: 400,
})

  revelar.reveal('.card-reveal-4', {
    duration: 1500,
    distance: '90px',
    delay: 600,
})

  revelar.reveal('.card-reveal-5', {
    duration: 1500,
    distance: '90px',
    delay: 800,
})

  revelar.reveal('.card-reveal-6', {
    duration: 1500,
    distance: '90px',
    delay: 1000,
})

  revelar.reveal('.card-reveal-7', {
    duration: 1500,
    distance: '90px',
    delay: 1200,
})

  revelar.reveal('.foto-reveal-3', {
    duration: 1500,
    opacity: 0
})

  revelar.reveal('.foto-reveal-4', {
    duration: 1500,
    distance: '300px',
    origin: 'left'
})

  revelar.reveal('.foto-reveal-5', {
    duration: 1500,
    distance: '300px',
    origin: 'right',
    delay: 200
})

  revelar.reveal('.sessao-reveal-2', {
    duration: 1500,
    distance: '90px',
    origin: 'left'
})

  revelar.reveal('.card-reveal-8', {
    duration: 1500,
    distance: '90px',
    origin: 'top'
})

  revelar.reveal('.card-reveal-9', {
    duration: 1500,
    distance: '90px',
    delay: 200,
    origin: 'top'
})

  revelar.reveal('.card-reveal-10', {
    duration: 1500,
    distance: '90px',
    delay: 400,
    origin: 'top'
})

  revelar.reveal('.card-reveal-11', {
    duration: 1500,
    distance: '90px',
    delay: 600,
    origin: 'top'
})

  revelar.reveal('.card-reveal-top', {
    duration: 1500,
    distance: '90px',
    origin: 'top'
})
  revelar.reveal('.card-reveal-bottom', {
    duration: 1500,
    distance: '90px',
    origin: 'bottom',
    delay: 200
})