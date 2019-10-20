function header() {
    var menuButton = document.querySelector('.menu-button');
    var headerMobile = document.querySelector('.header-mobile');
    var menuLinks = document.querySelectorAll('.header-mobile__link');
    var header = document.querySelector('.header');


    function addClass(object, classString) {
        if (object.className.indexOf(classString) > -1) return;
        object.className = object.className + ' ' + classString;
    }

    function dellClass(object, classString) {
        object.className = object.className.replace(' ' + classString, '');
    }

    function toggleMenu(object, classString) {
        if (object.className.indexOf(classString) === -1) {
            addClass(object, classString);
            document.querySelector('html').style.overflow = 'hidden';
        } else {
            dellClass(object, classString);
            document.querySelector('html').style.overflow = '';
        }
    }

    menuButton.addEventListener('click', function () {
        toggleMenu(headerMobile, 'header-mobile_active')
    });

    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {
            toggleMenu(headerMobile, 'header-mobile_active')
        });
    };


    function toggleHeader() {
        if (document.documentElement.scrollTop > 5) {
            addClass(header, 'header_active');
        } else {
            dellClass(header, 'header_active');
        }
    };

    toggleHeader();
    window.addEventListener('scroll', toggleHeader);


}


header()