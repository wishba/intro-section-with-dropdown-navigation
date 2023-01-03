const menu = document.getElementById('headerMenu')
const menuOpen = () => {
  menu.classList.add('header__menu--opened')
}
const menuClose = () => {
  menu.classList.remove('header__menu--opened')
}


const feature = document.getElementById('moreFeatures')
const moreFeature = () => {
  feature.classList.toggle('header__more--open')
}
const hoverInFeature = () => {
  feature.classList.add('header__more--open')
}
const hoverOutFeature = () => {
  feature.classList.remove('header__more--open')
}


const company = document.getElementById('moreCompany')
const moreCompany = () => {
  company.classList.toggle('header__more--open')
}
const hoverInCompany = () => {
  company.classList.add('header__more--open')
}
const hoverOutCompany = () => {
  company.classList.remove('header__more--open')
}


document.addEventListener('click', function (event) {
  if (event.target.classList.contains('header__menu') && event.target.classList.contains('header__menu--opened')) {
    event.target.classList.remove('header__menu--opened')
  }
})