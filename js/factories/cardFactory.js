angular.module('app').factory('cardFactory', function () {
    var service = {};

    var cards = [
        {
            id: 1,
            list_id: 1,
            description: 'Fix bug in player'
        },
        {
            id: 2,
            list_id: 1,
            description: 'Add feature with D3'
        },
        {
            id: 3,
            list_id: 3,
            description: 'Learn AngularJS'
        }
    ];

    service.getCards = function (list) {
        return _.filter(cards, { list_id: list.id });
    };

    service.createCard = function (list, cardDescription) {
        cards.push({
            id: _.uniqueId('card_'),
            description: cardDescription,
            list_id: list.id
        });
    };

    return service
});