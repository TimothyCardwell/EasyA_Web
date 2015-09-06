angular.module('easyA').controller('NavbarController', function($window, NavbarService, SecurityService) {
    this.user;
    this.registerForm = {
        firstname: "",
        lastname: "",
        emailAddress: "",
        username: "",
        password: ""
    };

    this.loginForm = {
        screenname: "",
        password: ""
    };

    this.login = function() {
        var _this = this;
        SecurityService.login(this.loginForm.screenname, this.loginForm.password)
            .then(function(data) {
                $window.location.reload();
            }, function(err) {
                // TODO Display appropriate error message
                console.error(err);
            });
    };

    this.logout = function() {
        var _this = this;
        SecurityService.logout()
            .then(function(data) {
                $window.location.reload();
            }, function(err) {
                // TODO Display appropriate error message
                console.error(err);
            });
    };

    this.register = function() {
        console.log("Register!");
        /*var _this = this;

        if(this.registerUserValid()) {
            NavbarService.registerUser(this.registerUser).
                success(function(data, status, headers, config) {
                    _this.user = data[0].fields;
                }).
                error(function(data, status, headers, config) {
                    console.debug("FAILURE!");
                    console.debug(data);
                    console.debug(status);
                    console.debug(headers);
                    console.debug(config);
                });
        } else {
            console.debug("User is not valid");
        }*/
    };

    this.clearRegisterForm = function() {
        console.log("Clear register form!");
    };

    this.clearLoginForm = function() {
        console.log("Clear login form!");
    };

    // Get the user from the security service
    if(SecurityService.isLoggedIn()) {
        var _this = this;
        NavbarService.getUser()
            .then(function(response) {
                _this.user = {
                    firstname: response.data.firstname
                }
            }, function(err) {
                console.error(err);
            });
    }
});