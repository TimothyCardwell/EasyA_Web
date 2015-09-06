angular.module('easyA').factory('NavbarService', function($http, SecurityService) {
    var service = {};

    service.getUser = function() {
        var userToken = SecurityService.getUserToken();
        return $http.get('/account/user');
    };

    service.registerUser = function(registrationForm) {
        console.log("In navbarService!");
        /*
        // TODO Get the CSRF Token into the cookies
        var csrfToken = this.retrieveCSRFToken();
        var request = {
            method: 'POST',
            url: './register',
            headers: {
                'X-CSRFToken': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param(data)
        };
        return $http(request);
        */
    }

    return service;
});