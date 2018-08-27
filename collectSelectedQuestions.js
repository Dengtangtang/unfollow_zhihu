// 'use strict';

// function collectSelectedQuestions() {
//     var selectedQuestions = new Array()

//     var inputs = document.getElementsByTagName('input');
//     var checkedboxs = new Array();
//     for (var i = 0; i < inputs.length; i++) {
//         var currInput = inputs[i];
//         if (currInput.getAttribute('name') === 'question') {
//             checkedboxs.push(currInput);
//         }
//     }

//     for (var i = 0; i < checkedboxs.length; i++) {
//         var currCheckbox = checkedboxs[i];
//         if (currCheckbox.checked) {
//             selectedQuestions.push(currCheckbox.value);
//         }
//     }
    
//     chrome.storage.sync.set({selectedQuestions: selectedQuestions}, function() {
//         alert('你勾选了' + selectedQuestions.length.toString() + '问题');
//     });
// }

// collectSelectedQuestions();