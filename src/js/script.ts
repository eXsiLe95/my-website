$(() => {

    const page: JQuery = $('.page');
    const menuToggle: JQuery = $('.menu_toggle');
    const content: JQuery = $('.content');
    const menuItems: JQuery = $('.menu_items > li');

    menuToggle.on('click', () => {
        page.toggleClass('shazam');
    });

    content.on('click', () => {
        page.removeClass('shazam');
    });

    menuItems.on('click', () => {
        page.removeClass('shazam');
    });

});
