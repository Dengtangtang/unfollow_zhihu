'use strict';

// Define the rule.
var rule1 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                // hostEquals: 'zhihu.com',
                schemes: ['https'],
                hostContains: 'zhihu',
                pathPrefix: '/people',
                pathSuffix: 'questions'
            }
        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
}


chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({selectedQuestions: new Array()}, function() {
        console.log('An empty array is set.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    });
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.init === true) {
        chrome.tabs.executeScript({
            file: 'prepareCheckbox.js'
        });
    }

    if (message.collect === true) {
        chrome.tabs.executeScript({
            file: 'collectSelectedQuestions.js'
        });
    }

    if (message.unfollow === true) {
        chrome.tabs.executeScript({
            file: 'unfollowSelectedQuestions.js'
        });
    }
});
