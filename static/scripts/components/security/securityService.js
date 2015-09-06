angular.module('easyA').factory('SecurityService', function($http, $cookies) {
    var service = {};
    var _csrfToken;
    var _userToken;

    // Look for cookies onLoad
    console.log($cookies.getAll());
    _csrfToken = $cookies.get('csrftoken');
    _userToken = $cookies.get('usertoken');
    if(!_csrfToken) {
        throw "CSRF Token not present!";
    }

    service.isLoggedIn = function() {
        if(_userToken) {
            return true;
        } else {
            return false;
        }
    };

    service.getUserToken = function () {
        return _userToken;
    };

    service.getCsrfToken = function() {
        return _csrfToken;
    };

    // TODO Remove these callbacks http://www.bennadel.com/blog/2612-using-the-http-service-in-angularjs-to-make-ajax-requests.htm
    service.login = function(username, password) {
        var request = $http.get('/account/login')
            .then(function(data) {
                console.log("In securityservice promise");
                _userToken = $cookies.get('usertoken');
            }, function(err) {
                console.error(err);
            });

        return request;
    };

    service.logout = function() {
        var request = $http.get('/account/logout').
            then(function(response) {
                _userToken = null;
            }, function(err) {
                console.error(err);
            });

        return request;
    };

    return service;
});