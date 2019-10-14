function home() {
    var menuLinks = document.querySelectorAll('[data-anchor]');
    var form = document.querySelector('.form');

    for (var i = 0; i < menuLinks.length; i++) {

        menuLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            var element = document.querySelector(this.hash);
            addLink(element);

        });
    };

    function addLink(object) {
        window.scrollTo(0, object.offsetTop - 50);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });
}

home()