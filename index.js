function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
  
    emailjs
      .sendForm(
        'service_u8d17mo',
        'template_9xi94j8',
        event.target,
        'd4_eGziFVhGB_BmRW'
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on dennisaryaneghtedari@gmail.com "
        );
      });
  }
  
  let isModalOpen = false;
  function toggleModal() {
     
      if (isModalOpen) {
          isModalOpen = false;
          return document.body.classList.remove("modal--open")
      }
      isModalOpen = true;
      document.body.classList += " modal--open"
  
  }
  
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
     document.body.classList.remove('modal--open')
    }
  })
  



  const menu_btn = document.querySelector('.menu__btn')
  const times = document.querySelector('.times')
  const hamburger = document.querySelector('.hamburger')
  const placement = document.querySelector('.menu')
  const menu__links = document.querySelector('.menu__links')

  menu_btn.addEventListener("click", () => {
    placement.classList.toggle('menu__active')
    times.classList.toggle('times')
    hamburger.classList.toggle('hamburger_inactive')


  
  })


menu__links.addEventListener("click", () =>{
  placement.classList.toggle('menu__active')
  times.classList.toggle('times')
  hamburger.classList.toggle('hamburger_inactive')
})