'use strict';


function unfollowSelectedQuestions() {
    var questionListItems = document.getElementsByClassName('List-item');
    var ListItemMapper = {};
    
    for (var j = 0; j < questionListItems.length; j++) {
        var currListItem = questionListItems[j];
        var currContentItem = currListItem.childNodes[0];
        var data = currContentItem.getAttribute('data-za-extra-module');
        var jsonData = JSON.parse(data);
        console.log(jsonData);
        var token = jsonData["card"]["content"]["token"];
        console.log(token);
        ListItemMapper[token] = currListItem;
    }

    chrome.storage.sync.get('selectedQuestions', function(data) {
        var selectedQuestions = data.selectedQuestions;
        if (selectedQuestions.length <= 0) {
            alert('You have no selected questions.')
            return false;
        }

        for (var i = 0; i < selectedQuestions.length; i++) {
            let currSelectedQuestion = selectedQuestions[i];  // It is question id in fact.
            let delete_url = 'https://www.zhihu.com/api/v4/questions/' + currSelectedQuestion + '/followers';
            let request = new XMLHttpRequest();
            request.open('DELETE', delete_url, true);
            request.setRequestHeader('x-requested-with', 'fetch');
            request.onreadystatechange = function() {
                if (this.readyState == 4) {
                    // Remove corresponding element node.
                    var removedNode = ListItemMapper[currSelectedQuestion];
                    removedNode.parentNode.removeChild(removedNode);
                }
            };
            request.send(null);
        }

    });
}

unfollowSelectedQuestions();