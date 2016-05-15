(function () {
    'use strict';
    
    angular
        .module('app.videochat', [])
        .controller('VideoChatController', VideoChatController);
    
    VideoChatController.$inject =  ['$scope', ‘$log’’];
    
    function VideoChatController($scope, $log) {
        var vm = this;
    }
})();