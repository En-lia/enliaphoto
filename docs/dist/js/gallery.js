function site() {
    var category = document.location.search;
    var sliderContainer = document.querySelector(".fotorama");
    var titleContainer = document.querySelector(".title__text");
    var headerContainer = document.querySelector(".header__container");
    // console.dir(titleContainer.innerHTML);

    var pictureLovestory = [
        '1(1).jpg',
        '1(2).jpg',
        '1(3).jpg',
        '1(4).jpg',
        '1(5).jpg',
        '1(6).jpg',
        '1(7).jpg',
        '1(8).jpg',
        '1(9).jpg',
        '1(10).jpg',
        '1(11).jpg',
        '1(12).jpg',
        '1(13).jpg',
        '1(14).jpg',
        '1(15).jpg',
        '1(16).jpg',
        '1(17).jpg',
        '1(18).jpg',
        '1(19).jpg',
        '1(20).jpg',
        '1(21).jpg',
        '2(1).jpg',
        '2(2).jpg',
        '2(3).jpg',
        '2(4).jpg',
        '2(5).jpg',
        '2(6).jpg',
        '2(7).jpg',
        '2(8).jpg',
        '2(9).jpg',
        '2(10).jpg',
        '2(11).jpg',
        '2(12).jpg',
        '2(13).jpg',
        '2(14).jpg',
        '2(15).jpg',
        '2(16).jpg',
        '2(17).jpg',
        '2(18).jpg',
        '2(19).jpg',
        '2(20).jpg',
        '2(21).jpg',
        '2(22).jpg',
        '2(23).jpg',
        '2(24).jpg',
        '2(25).jpg',
        '3(1).jpg',
        '3(2).jpg',
        '3(3).jpg',
        '3(4).jpg',
        '3(5).jpg',
        '3(6).jpg',
        '3(7).jpg',
        '3(8).jpg',
        '3(9).jpg',
        '3(10).jpg',
        '4(1).jpg',
        '4(2).jpg',
        '4(3).jpg',
        '4(4).jpg',
        '4(5).jpg',
        '4(6).jpg',
        '4(7).jpg',
        '4(9).jpg',
        '4(8).jpg',
        '4(10).jpg',
        '4(11).jpg',
    ];

    var picturePortraits = [
        '1(1).jpg',
        '1(2).jpg',
        '1(3).jpg',
        '1(4).jpg',
        '1(5).jpg',
        '1(6).jpg',
        '1(7).jpg',
        '1(8).jpg',
        '1(9).jpg',
        '2(1).jpg',
        '2(2).jpg',
        '2(3).jpg',
        '2(4).jpg',
        '2(5).jpg',
        '2(6).jpg',
        '3(1).jpg',
        '3(2).jpg',
        '3(3).jpg',
        '3(4).jpg',
        '4(1).jpg',
        '4(2).jpg',
        '4(3).jpg',
        '4(4).jpg',
        '4(5).jpg',
        '5(1).jpg',
        '5(2).jpg',
        '5(3).jpg',
        '5(4).jpg',
        '5(5).jpg',
        '5(6).jpg',
        '5(7).jpg',
        '5(8).jpg',
        '6(1).jpg',
        '6(2).jpg',
        '6(3).jpg',
        '6(4).jpg',
        '6(5).jpg',
        '6(6).jpg',
        '6(7).jpg',
        '6(8).jpg',
        '6(9).jpg',
    ];

    var pictureWeddings = [
        '1(1).jpg',
        '1(2).jpg',
        '1(3).jpg',
        '1(4).jpg',
        '1(6).jpg',
        '1(7).jpg',
        '1(8).jpg',
        '1(9).jpg',
        '1(10).jpg',
        '1(12).jpg',
        '1(13).jpg',
        '1(14).jpg',
        '1(15).jpg',
        '1(16).jpg',
        '1(17).jpg',
        '1(18).jpg',
        '1(19).jpg',
        '2(1).jpg',
        '2(2).jpg',
        '2(3).jpg',
        '2(4).jpg',
        '2(5).jpg',
        '2(6).jpg',
        '2(8).jpg',
        '2(9).jpg',
        '2(10).jpg',
        '2(11).jpg',
        '2(12).jpg',
        '2(13).jpg',
        '2(14).jpg',
    ];

    var pictureMaternity = [
        '1(1).jpg',
        '2(1).jpg',
        '2(2).jpg',
        '2(3).jpg',
        '2(4).jpg',
        '2(5).jpg',
        '2(6).jpg',
        '2(7).jpg',
        '2(8).jpg',
        '2(9).jpg',
        '2(10).jpg',
        '2(11).jpg',
        '3(1).jpg',
        '3(2).jpg',
        '3(3).jpg',
        '3(4).jpg',
        '3(5).jpg',
        '3(6).jpg',
        '3(7).jpg',
        '3(8).jpg',
    ];

    var pictureFamilies = [
        '1(1).jpg',
        '1(2).jpg',
        '1(3).jpg',
        '1(4).jpg',
        '1(5).jpg',
        '1(6).jpg',
        '1(7).jpg',
        '1(8).jpg',
        '1(9).jpg',
        '1(10).jpg',
        '2(1).jpg',
        '2(2).jpg',
        '2(3).jpg',
        '2(4).jpg',
        '2(5).jpg',
        '2(6).jpg',
        '2(7).jpg',
        '2(8).jpg',
        '2(9).jpg',
        '2(10).jpg',
        '2(11).jpg',
        '2(12).jpg',
        '2(13).jpg',
        '2(14).jpg',
        '2(15).jpg',
    ];

    var categoriesArray = ['?category=lovestory', '?category=portraits', '?category=weddings', '?category=maternity', '?category=families'];

    var headerLinks = [
        {
            link: '?category=lovestory',
            title: 'Лавстори'
        },
        {
            link: '?category=portraits',
            title: 'Портреты'
        },
        {
            link: '?category=weddings',
            title: 'Свадьбы'
        },
        {
            link: '?category=maternity',
            title: 'В ожидании'
        },
        {
            link: '?category=families',
            title: 'Семейная'
        }
    ];

    function createTitle(title) {
        titleContainer.innerHTML = title;
    };

    function createSlider(array, folder) {
        var allImg = "";
        for (var i = 0; i < array.length; i++) {
            var img = "<img src=/assets/img/" + folder + "/" + array[i] + ">";
            allImg += img;
        }
        sliderContainer.innerHTML = allImg;
    };

    function createHeader(exclude) {
        var newHeaderLinks = headerLinks.filter(function (element) {
            return element !== exclude;
        });

        var allHeaderLines = '';
        for (var i = 0; i <= newHeaderLinks.length; i++) {
            if (i === 2) {
                var headerLine = '<a href="/photography" class="header__link">Главная</a>';
                allHeaderLines += headerLine;
            } else if (i < 2) {
                headerLine = '<a href="/photography/gallery/' + newHeaderLinks[i].link + '" class="header__link">' + newHeaderLinks[i].title + '</a>';
                allHeaderLines += headerLine;
            } else {
                headerLine = '<a href="/photography/gallery/' + newHeaderLinks[i - 1].link + '" class="header__link">' + newHeaderLinks[i - 1].title + '</a>';
                allHeaderLines += headerLine;
            }
        }
        headerContainer.innerHTML = allHeaderLines;
    }

    function getLucky() {
        category = categoriesArray[Math.round(Math.random() * (categoriesArray.length - 1))];
        checkCategory();
    };

    function checkCategory() {
        switch (category) {
            case '?category=lovestory':
                createHeader(headerLinks[0]);
                createTitle('ЛАВСТОРИ | LOVESTORY');
                createSlider(pictureLovestory, 'lovestory');
                break;
            case '?category=portraits':
                createHeader(headerLinks[1]);
                createTitle('ПОРТРЕТЫ | PORTAITS');
                createSlider(picturePortraits, 'portraits');
                break;
            case '?category=weddings':
                createHeader(headerLinks[2]);
                createTitle('СВАДЬБЫ | WEDDINGS');
                createSlider(pictureWeddings, 'weddings');
                break;
            case '?category=maternity':
                createHeader(headerLinks[3]);
                createTitle('В ОЖИДАНИИ | MATERNITY');
                createSlider(pictureMaternity, 'maternity');
                break;
            case '?category=families':
                createHeader(headerLinks[4]);
                createTitle('СЕМЕЙНАЯ | FAMILIES');
                createSlider(pictureFamilies, 'families');
                break;
            case '?category=get_lucky':
                getLucky();
                break;
        }
    };

    checkCategory();
}

site();