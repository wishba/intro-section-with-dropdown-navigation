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
}