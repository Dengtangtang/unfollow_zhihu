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

    for (var i = 0; i < selectedQuestions.length; i++) {
        var currSelectedQuestion = selectedQuestions[i];  // It is question id in fact.
        var delete_url = 'https://www.zhihu.com/api/v4/questions/' + currSelectedQuestion + '/followers';
        var request = new XMLHttpRequest();
        request.open('DELETE', delete_url, false);
        request.setRequestHeader('x-requested-with', 'fetch');
        request.onreadystatechange = function() {};
        request.send(null);
    }

    return true;
}

// If unfollow successfully, reload the current page.
// So i do not need to remove related DOM when delete successfully.
if (unfollowSelectedQuestions()) document.location.reload(true);;
