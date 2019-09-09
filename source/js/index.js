var mobileMenu = document.querySelector('.mobile-menu');
var menuBurger = document.querySelector('.top-bar__toggle-btn');
var topBar = document.querySelector('.top-bar');
var logo = document.querySelector('.logo__img');

// catalog.html controls
var countryPickerBar = document.querySelector('.country-picker-bar');
var countryPickerBtn = document.querySelector('.country-picker__close-btn-wrapper');
var countryPickerControl = document.querySelector('.companions-country-filter__country-picker-control');

var activeClassOfMobileMenu = 'mobile-menu_open'
var activeClassOfTopBar = 'top-bar_open'
var activeClassOfCountryPickerControl = 'companions-country-filter__country-picker-control_active'
var fixedClassOfTopBar = 'top-bar_position-fixed'
var menuBurgerTypeClose = 'top-bar__toggle-btn_type_close'
var logoPaths = {
  open : 'img/logo-mobile-blue@1x.png',
  close: 'img/logo-mobile-white@1x.png'
}

function isScrollOnTop() {
  return window.scrollY == 0;
}

function revertCatalogBar(evt) {

  var isNotClearClick = evt.path.some(function (node) {
    return node.classList && node.classList.contains('country-picker__name-words')
  })

  if (isNotClearClick) {
    return;
  }
  evt.preventDefault();

  //country-picker__name-words
  // CLOSE
  if (countryPickerControl.classList.contains(activeClassOfCountryPickerControl)) {
    countryPickerControl.classList.remove(activeClassOfCountryPickerControl)
    return
  }

  // OPEN
  countryPickerControl.classList.add(activeClassOfCountryPickerControl)
}

function revertMobileMenu() {
  var isMenuBurgerTypeClose = menuBurger.classList.contains(menuBurgerTypeClose);
  var isMobileMenuOpen = mobileMenu.classList.contains(activeClassOfMobileMenu);
  var isTopBarOpen = topBar.classList.contains(activeClassOfTopBar);

  if (
    isMenuBurgerTypeClose &&
    isMobileMenuOpen &&
    isTopBarOpen
  ) {
    // CLOSE
    mobileMenu.classList.remove(activeClassOfMobileMenu);
    menuBurger.classList.remove(menuBurgerTypeClose);
    topBar.classList.remove(activeClassOfTopBar);
    logo.src = logoPaths.close;

    if(isScrollOnTop()) {
      topBar.classList.remove(fixedClassOfTopBar);
    }

    return
  }

  // OPEN
  mobileMenu.classList.add(activeClassOfMobileMenu);
  menuBurger.classList.add(menuBurgerTypeClose);
  topBar.classList.add(activeClassOfTopBar);
  logo.src = logoPaths.open;
  topBar.classList.add(fixedClassOfTopBar);
/*
  if(isScrollOnTop()) {

  }
  */
}

menuBurger.classList.remove('top-bar__toggle-btn_hidden');
revertMobileMenu()

// --EVENTS--
menuBurger.addEventListener('click', function (evt) {
  evt.preventDefault();

  revertMobileMenu();
})

document.addEventListener('scroll', function(evt) {
  var isFixedTopBar = topBar.classList.contains(fixedClassOfTopBar)
  var isOpenTopBar = topBar.classList.contains(activeClassOfTopBar)

  if (!isScrollOnTop() && !isFixedTopBar) {
    topBar.classList.add(fixedClassOfTopBar)
    return;
  }

  if (isScrollOnTop() && isFixedTopBar && !isOpenTopBar) {
    topBar.classList.remove(fixedClassOfTopBar)
    return;
  }
})

if (countryPickerBar) {
  countryPickerBar.addEventListener('click', revertCatalogBar);
  countryPickerBtn.addEventListener('click', revertCatalogBar);
}
