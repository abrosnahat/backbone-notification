var NotificationView = Backbone.View.extend({
    events: {
        'click .deleteNotification': 'deleteRow',
    },

    initialize: function () {
        this.template = _.template($('#viewNotification').html());
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    },

    deleteRow: function () {
        this.model.destroy();
        $('.counter').html($('.counter').html() - 1);
    },

});