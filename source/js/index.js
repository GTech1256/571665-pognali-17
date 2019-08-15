var mobileMenu = document.querySelector('.mobile-menu');
var menuBurger = document.querySelector('.top-bar__toggle-btn');
var topBar = document.querySelector('.top-bar');
var logo = document.querySelector('.logo__img');

var activeClassOfMobileMenu = 'mobile-menu_open'
var activeClassOfTopBar = 'top-bar_open'
var fixedClassOfTopBar = 'top-bar_position-fixed'
var menuBurgerTypeClose = 'top-bar__toggle-btn_type_close'
var logoPaths = {
  open : 'img/logo-mobile-blue@1x.png',
  close: 'img/logo-mobile-white@1x.png'
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
    topBar.classList.remove(fixedClassOfTopBar);
    logo.src = logoPaths.close;
    return
  }

  // OPEN
  mobileMenu.classList.add(activeClassOfMobileMenu);
  menuBurger.classList.add(menuBurgerTypeClose);
  topBar.classList.add(activeClassOfTopBar);
  topBar.classList.add(fixedClassOfTopBar);
  logo.src = logoPaths.open;
}

menuBurger.classList.remove('top-bar__toggle-btn_hidden');
revertMobileMenu()


menuBurger.addEventListener('click', function (evt) {
  evt.preventDefault();

  revertMobileMenu();
})
