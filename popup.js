'use strict';

var init = document.getElementById('init');
var collect = document.getElementById('collect');
var unfollow = document.getElementById('unfollow');

var first_init = true

init.onclick = function() {
    if (first_init) {
        chrome.runtime.sendMessage({init: true, collect: false, unfollow: false});
        first_init = false;
    }
}
collect.onclick = function() {
    chrome.runtime.sendMessage({init: false, collect: true, unfollow: false});
}
unfollow.onclick = function() {
    chrome.runtime.sendMessage({init: false, collect: false, unfollow: true});
}