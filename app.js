document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav')
  const img = document.querySelector('.button-img')
  const btn = document.querySelector('#btnNav')

  btn.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    if (nav.classList.contains('nav-open')) {
      img.src = './images/icon-close-menu.svg'
    } else {
      img.src = './images/icon-hamburger.svg'
    }

    document.querySelector('.nav-overlay').addEventListener('click', () => {
      nav.classList.remove('nav-open')
      img.src = './images/icon-hamburger.svg'
    })
  })
})
