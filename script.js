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
}