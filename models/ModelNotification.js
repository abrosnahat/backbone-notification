
//создаем прототип нашего объекта или модели
var NotificationModel = Backbone.Model.extend({
    defaults: {
        name: 'Добавлен новый лэндинг',
        description: 'Лэндинг 7 (адапт.) для оффера Rich skin 9 EUR TR - средство для омоложения'
    },
   
});

var NotificationsCollection = Backbone.Collection.extend({
    model: NotificationModel
});

