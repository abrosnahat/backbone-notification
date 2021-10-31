// создаем объект
var app = app || {};

$(function () {

    app.notificationsView = new NotificationsView({
        el: '#notifications'
    })

    $('.notification-button').click(function() {
        $('.modal-content').show();
    });

    $('.close-button').click(function() {
        $('.modal-content').hide();
    });

});