const menuOpen = () => document.getElementById('headerMenu').classList.add('header__menu--opened')
const menuClose = () => document.getElementById('headerMenu').classList.remove('header__menu--opened')

const feature = document.getElementById('moreFeatures')
const moreFeature = () => {
  if (feature.className === 'header__more') {
    feature.classList.add('header__more--open')
  } else if (feature.className === 'header__more header__more--open') {
    feature.classList.remove('header__more--open')
  }
}

const company = document.getElementById('moreCompany')
const moreCompany = () => {
  if (company.className === 'header__more') {
    company.classList.add('header__more--open')
  } else if (company.className === 'header__more header__more--open') {
    company.classList.remove('header__more--open')
  }
}