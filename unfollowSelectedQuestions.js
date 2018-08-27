'use strict';


function collectSelectedQuestions() {
    var selectedQuestions = new Array();
    var inputs = document.getElementsByTagName('input');
    var checkedboxs = new Array();
    for (var i = 0; i < inputs.length; i++) {
        var currInput = inputs[i];
        if (currInput.getAttribute('name') === 'question') {
            checkedboxs.push(currInput);
        }
    }

    for (var i = 0; i < checkedboxs.length; i++) {
        var currCheckbox = checkedboxs[i];
        if (currCheckbox.checked) {
            selectedQuestions.push(currCheckbox.value);
        }
    }
    
    return selectedQuestions;
}


function unfollowSelectedQuestions() {
    var selectedQuestions = collectSelectedQuestions();
    if (!selectedQuestions.length) {
        alert('你还未勾选要取关的问题');
        return false;
    }

    var questionListItems = document.getElementsByClassName('List-item');
    var ListItemMapper = {};
    
    for (var j = 0; j < questionListItems.length; j++) {
        var currListItem = questionListItems[j];
        var currContentItem = currListItem.childNodes[0];
        var data = currContentItem.getAttribute('data-za-extra-module');
        var jsonData = JSON.parse(data);
        var token = jsonData["card"]["content"]["token"];
        ListItemMapper[token] = currListItem;
    }

    for (var i = 0; i < selectedQuestions.length; i++) {
        let currSelectedQuestion = selectedQuestions[i];  // It is question id in fact.
        let delete_url = 'https://www.zhihu.com/api/v4/questions/' + currSelectedQuestion + '/followers';
        let request = new XMLHttpRequest();
        request.open('DELETE', delete_url, true);
        request.setRequestHeader('x-requested-with', 'fetch');
        request.onreadystatechange = function() {
            // if (this.readyState == 4) {
            //     var removedNode = ListItemMapper[currSelectedQuestion];
            //     removedNode.parentNode.removeChild(removedNode);
            // }
        };
        request.send(null);
    }

    return true;
}

// If unfollow successfully, reload the current page.
// So i do not need to remove related DOM when delete successfully.
if (unfollowSelectedQuestions()) document.location.reload(true);;
