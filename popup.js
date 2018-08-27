'use strict';

var unfollow = document.getElementById('unfollow');

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.runtime.sendMessage({init: true, unfollow: false});
});
unfollow.onclick = function() {
    chrome.runtime.sendMessage({init: false, unfollow: true});
    window.close();
}
