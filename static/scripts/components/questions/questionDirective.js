angular.module('easyA').directive('question', function() {
   return {
       templateUrl: "/static/scripts/components/questions/questionView.html",
       scope: {
           details: '=details'
       }
   };
});