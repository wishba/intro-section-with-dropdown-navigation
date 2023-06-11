<<<<<<< HEAD
function openNav() {
  document.getElementById('header').classList.add('header--open')
  document.getElementById('header-open').classList.add('header__open--invisible')
  document.getElementById('header-close').classList.add('header__close--visible')
  document.getElementById('header-section').classList.add('header__section--visible')
  document.getElementById('header-account').classList.add('header__account--visible')
}

function closeNav() {
  document.getElementById('header').classList.remove('header--open')
  document.getElementById('header-open').classList.remove('header__open--invisible')
  document.getElementById('header-close').classList.remove('header__close--visible')
  document.getElementById('header-section').classList.remove('header__section--visible')
  document.getElementById('header-account').classList.remove('header__account--visible')
}

function moreFeature() {
  document.getElementById('header-feature-arrow').classList.toggle('header__arrow--up')
  document.getElementById('header-feature').classList.toggle('header__feature--open')
}

function moreCompany() {
  document.getElementById('header-company-arrow').classList.toggle('header__arrow--up')
  document.getElementById('header-company').classList.toggle('header__company--open')
=======
function toggleMenu() {
  document.getElementById('nav').classList.toggle('nav--opened')
  document.getElementById('opacityLow').classList.toggle('opacity__low--visible')
}

function toggleFeature() {
  document.getElementById('featureMore').classList.toggle('menu__feature--opened')
  document.getElementById('featureLink').classList.toggle('menu__feature--link')
  document.getElementById('featureArrow').classList.toggle('menu__feature--arrow')
}

function toggleCompany() {
  document.getElementById('companyMore').classList.toggle('menu__company--opened')
  document.getElementById('companyLink').classList.toggle('menu__company--link')
  document.getElementById('companyArrow').classList.toggle('menu__company--arrow')
>>>>>>> b083b2403a23a0a241877344a49b1a0d808b9a1a
}