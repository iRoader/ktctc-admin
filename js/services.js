'use strict';

/* Services */


// Demonstrate how to register services
angular.module('app.services', [])

    //声明service的模块
    .factory('httpApiService',['$http', '$timeout', '$state',
        function($http, $timeout, $state){
            var sendRequest = function(options){
                options = options || {};
                var METHOD = options.method || 'POST',
                    GATEWAY = options.gateway || 'http://api.ktctc.com:8090/http_gate_api';

                options.access_token = "15112345678" ;

                return $http({
                    method: METHOD,
                    url: GATEWAY,
                    data:JSON.stringify(options.data),
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(function(result){
                    console.log(result)

                })
            }
            return {
                sendRequest:sendRequest
            }
        }])

    //登陆验证
    .factory('userService', ['state', function($state){
        var users = localStorage.getItem(options.data.access_token);

        if(!users){
            $state.go('login');
        }
    }])