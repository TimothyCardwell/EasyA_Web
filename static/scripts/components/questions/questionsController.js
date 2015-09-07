angular.module('easyA').controller("QuestionsController", function() {
    this.tagFilter;
    this.title = "Sample Title";
    this.questionList = [{
        id: 1,
        name: "Calculus 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit urna nec est blandit",
        price: "$15.00",
        tagList: ['america', 'math', 'tim'],
        loaded: false
    },{
        id: 2,
        name: "Ancient Roman History",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit urna nec est blandit",
        price: "$5.00",
        tagList: ['history', 'rome'],
        loaded: false
    },{
        id: 3,
        name: "Bio-Chemistry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit urna nec est blandit",
        price: "$25.00",
        tagList: ['america', 'chemistry'],
        loaded: false
    }];

    this.baseQuestionList = this.questionList;

    this.filter = function() {
        if(!this.tagFilter) {
            this.questionList = this.baseQuestionList;
            return;
        }
        this.questionList = [];
        for(var i = 0; i < this.baseQuestionList.length; i++) {
            if(this.baseQuestionList[i].tagList.indexOf(this.tagFilter) >= 0) {
                this.questionList.push(this.baseQuestionList[i]);
            }
        }
    };

    this.loadDetails = function(question) {
        if(question.loaded) {
            return;
        }
        question.loaded = true;
    };
});