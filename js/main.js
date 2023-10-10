const bars = document.querySelector('.nav__bars')
const navItems = document.querySelectorAll('.nav__item')
const menu = document.querySelector('.nav__menu')
const body = document.querySelector('body')

const showMenu = () => {
	bars.classList.toggle('nav__bars--active')
	menu.classList.toggle('nav__menu--active')
}

const closeMenu = () => {
	menu.classList.remove('nav__menu--active')
	bars.classList.remove('nav__bars--active')
	blockBody()
}

const blockBody = () => {
	if(body.getAttribute('data-block') === 'unlocked'){
		body.setAttribute('data-block', 'blocked')
	}else{
		body.setAttribute('data-block', 'unlocked')
	}
}

bars.addEventListener('click', blockBody)
bars.addEventListener('click', showMenu)
navItems.forEach(function (element) {
	element.addEventListener('click', closeMenu)
})
