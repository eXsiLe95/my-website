$(() => {

    const page: JQuery = $('.page');
    const menuToggle: JQuery = $('.menu_toggle');
    const content: JQuery = $('.content');

    menuToggle.on('click', () => {
        page.toggleClass('shazam');
    });

    content.on('click', () => {
        page.removeClass('shazam');
    })

});
