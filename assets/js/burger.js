document.querySelector('#open-menu').addEventListener('click', () => {
  const aside = document.querySelector('aside')
  const toggle = aside.classList.toggle('active')
  const openMenu = document.querySelector('#open-menu')
  console.log(toggle)
  if (toggle) {
    openMenu.src = '/assets/images/close.png'
  } else {
    openMenu.src = '/assets/images/menu-burger.png'
  }
})
