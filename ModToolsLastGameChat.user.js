// ==UserScript==
// @name         Mod Tools Last Game Chat
// @author	 	 Carbon
// @version      2.1
// @description  Small and helpful enhancement to Chat in TagPro Mod Tools
// @updateURL    https://github.com/vCarbonnn/LastGameChat/raw/master/ModToolsLastGameChat.user.js
// @include      http://tagpro-*.koalabeast.com/moderate/chat*
// ==/UserScript==

var active = false;
var filterIP;
var filterUserId;

$(".buttons").append("<button id='lastGameChat' class='small'>Last Game Chat</button>");
document.getElementById("lastGameChat").addEventListener('click',function () {
    active = !active;
    if(active) {
        filterIP = document.getElementById("filterIP").value;
    	filterUserId = document.getElementById("filterUserId").value;
    	getLastGameChat();
    } else {
        getRestoredChat();
    }
});

function getLastGameChat() {
    try {
        document.getElementById("filterGameId").value = document.getElementById("reportRows").children[0].children[0].innerText;
        document.getElementById("filterIP").value = "";
        document.getElementById("filterUserId").value = "";
        document.getElementById("filterDisplayName").value = "";
        document.getElementById("filterButton").click();
        document.getElementById("lastGameChat").innerText = "Restore Chat";
    } catch(err) {
        document.getElementById("lastGameChat").innerText = "Too Fast";
    }
}

function getRestoredChat() {
    document.getElementById("filterIP").value = filterIP;
    document.getElementById("filterUserId").value = filterUserId;
    document.getElementById("filterGameId").value = "";
    document.getElementById("filterDisplayName").value = "";
    document.getElementById("filterButton").click();
    document.getElementById("lastGameChat").innerText = "Last Game Chat";
}
