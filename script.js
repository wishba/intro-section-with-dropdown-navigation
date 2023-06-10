function toggleMenu() {
  document.getElementById('nav').classList.toggle('nav--opened')
  document.getElementById('opacityLow').classList.toggle('opacity__low--visible')
}

function toggleFeature() {
  document.getElementById('moreFeature').classList.toggle('nav__more--feature')
  document.getElementById('featureLink').classList.toggle('nav__feature--more')
  document.getElementById('featureArrow').classList.toggle('nav__feature--arrow')
}

function toggleCompany() {
  document.getElementById('moreCompany').classList.toggle('nav__more--company')
  document.getElementById('companyLink').classList.toggle('nav__company--more')
  document.getElementById('companyArrow').classList.toggle('nav__company--arrow')
}