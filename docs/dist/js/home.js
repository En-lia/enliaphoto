function home() {

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    var menuLinks = document.querySelectorAll('[data-anchor]');
    var aboutMe = document.querySelector('.about-me');
    var aboutMeContainer = document.querySelector('.about-me__container');

    var form = document.querySelector('.form');
    var overlayModal = document.querySelector('.overlay-modal');
    var modalButton = document.querySelector('.modal__button');
    var formInput = document.querySelectorAll('.form__input');
    var formAction = "https://script.google.com/macros/s/AKfycbztmeQbKK8NpUiOs2FCZNuzXR4ZWKCUFV90Cm0S/exec";


    function addClass(object, classString) {
        if (object.className.indexOf(classString) > -1) return;
        object.className = object.className + ' ' + classString;
    }

    function dellClass(object, classString) {
        object.className = object.className.replace(' ' + classString, '');
    }

    function addLink(object) {
        window.scrollTo(0, object.offsetTop - 50);
    }

    function toggleAboutMe() {
        var windowBottom = window.scrollY + window.innerHeight;
        var aboutMeShowLine = aboutMe.offsetTop + aboutMe.offsetHeight / 100 * 50;

        if (windowBottom > aboutMeShowLine && window.scrollY < aboutMeShowLine) {
            addClass(aboutMeContainer, 'about-me__container_active');
        }

        if (window.scrollY > aboutMeShowLine || windowBottom < aboutMeShowLine) {
            dellClass(aboutMeContainer, 'about-me__container_active');
        }
    }

    function checkInput(object) {
        var isFormCorrect = true;
        for (var i = 0; i < object.length; i++) {
            if (object[i].value.length === 0) {
                isFormCorrect = false;
            }
        }
        return isFormCorrect;
    }

    for (var i = 0; i < menuLinks.length; i++) {

        menuLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            var element = document.querySelector(this.hash);
            addLink(element);

        });
    }


    function sendForm() {
        if (checkInput(formInput) === false) {
            alert('Не все поля заполнены');
            return;
        }

        var request = new XMLHttpRequest();
        request.open('POST', formAction, true);

        var data = new FormData(form); // создается обьект формы на основе HTML формы
        // data.append('anyFieldName', 'anyValue'); -- метод append позволяет добавлять поля через JS

        request.onreadystatechange = function () {   //когда у запроса меняется состояние
            if (request.readyState === 4) {
                if (request.status === 200) {
                    addClass(overlayModal, 'overlay-modal_active');
                } else if (request.status > 0) {
                    alert('Ошибка сервера!')
                }
            }
        };
        request.onerror = function () {
            alert('Ошибка связи с интернетом!')
        };

        request.send(data); // отпправка запроса с переданной формой
    }


    form.addEventListener('submit', function (event) {
        event.preventDefault();   //блокирует отправку формы
        sendForm();
    });


    modalButton.addEventListener('click', function () {
        dellClass(overlayModal, 'overlay-modal_active');
    });

    window.addEventListener('scroll', toggleAboutMe);
}


home();

