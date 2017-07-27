angular.module('app').factory('listFactory', function () {
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'Todo'
        },
        {
            id: 2,
            listName: 'Doing'
        },
        {
            id: 3,
            listName: 'Done'
        }
    ];

    service.getLists = function () {
        console.log('service', service);
        return lists;
    };

    service.addList = function (listName) {
        lists.push({
            id: _.uniqueId('list_'),
            listName: listName
        });
    };

    service.removeList = function (list) {
        return _.pull(lists, list);
    };

    return service;
});