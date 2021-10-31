var NotificationsView = Backbone.View.extend({


    initialize: function () {
        this.template = _.template($('#viewNotifications').html());
        this.$el.html(this.template());
        this.coll = new NotificationsCollection();
        this.listenTo(this.coll, "add", this.addOne);

        var counter = setInterval(() => {
            this.addObject(this.coll);
            $('.counter').html(this.coll.length);
            if (this.coll.length >= 10) clearInterval(counter);
        }, 1000);

    },

    addObject: function () {
        this.coll.add({});
    },

    addOne: function (model) {
        var view = new NotificationView({
            model: model
        });
        this.$('.notificationsList').append(view.render());
    },


});