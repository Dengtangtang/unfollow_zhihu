'use strict';


// Util for easy insert element node after specified element node.
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


function prepareCheckbox() {
    var questionTitles = document.getElementsByClassName('QuestionItem-title');
    for (var i = 0; i < questionTitles.length; i++) {
        var currQuestionTitle = questionTitles[i];
        var currQuestionATag = currQuestionTitle.getElementsByTagName('a')[0];
        var currQuestionHrefSplit = currQuestionATag['href'].split('/');
        var currQuestionId = currQuestionHrefSplit[currQuestionHrefSplit.length - 1];
        // var form = document.createElement('form');
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', 'question');
        checkBox.setAttribute('value', currQuestionId);
        insertAfter(checkBox, currQuestionATag);
    }
}

prepareCheckbox();
