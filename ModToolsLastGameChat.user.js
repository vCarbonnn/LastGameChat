// ==UserScript==
// @name         Mod Tools Last Game Chat
// @author	 	 Carbon
// @version      0.4
// @description  Small and helpful enhancement to Chat in TagPro Mod Tools
// @updateURL    https://github.com/vCarbonnn/LastGameChat/raw/master/ModToolsLastGameChat.user.js
// @include      http://tagpro-*.koalabeast.com/moderate/*
// ==/UserScript==

var restoreID;
var restoreIP;
var matchVar = 0;

if ((window.location.pathname.indexOf("chat") > -1)||(window.location.pathname.indexOf("userid") > -1)) {
    $(".buttons").append("<button id='lastGameChat' class='small' onclick='lastGameChat()'>Last Game Chat</button>");
    document.getElementById("lastGameChat").addEventListener('click',function () {
         var filterIP = document.getElementById("filterIP").value;
         var filterUserId = document.getElementById("filterUserId").value;
         if (filterIP.match(/\S/)) {
			 matchVar = 1;
			 restoreIP = filterIP;
             document.getElementById("filterIP").value = "";
             document.getElementById("filterUserId").value = "";
             document.getElementById("filterDisplayName").value = "";
             document.getElementById("filterGameId").value = $('a[class ="dynamicFilter ipchecked"]')[0].innerText;
             document.getElementById("filterButton").click();
         }
		 else if (filterUserId.match(/\S/)) {
			 matchVar = 2;
			 restoreID = filterUserId;
             document.getElementById("filterIP").value = "";
             document.getElementById("filterUserId").value = "";
             document.getElementById("filterDisplayName").value = "";
             document.getElementById("filterGameId").value = $('a[class ="dynamicFilter ipchecked"]')[0].innerText;
             document.getElementById("filterButton").click();
         }
		$(".buttons").append("<button id='restoreChat' class='small' onclick='restoreChat()'>Restore Chat</button>");
		document.getElementById("restoreChat").addEventListener('click',function () {
			 document.getElementById("filterDisplayName").value = "";
             document.getElementById("filterGameId").value = "";
			 if(matchVar==1) {
				 document.getElementById("filterIP").value = restoreIP;
				 document.getElementById("filterUserId").value = "";
			 }
			 else if(matchVar==2) {
				 document.getElementById("filterUserId").value = restoreID;
				 document.getElementById("filterIP").value = "";
			 }
			document.getElementById("restoreChat").outerHTML='';
             document.getElementById("filterButton").click();
		});
     });
}

if (window.location.pathname.indexOf("users") > -1) {
        document.getElementById("filterName").onkeypress = function(e) {
            var event = e || window.event;
            var charCode = event.which || event.keyCode;

            if ( charCode == '13' ) {
                document.getElementById("filterHours").value = "whenever";
                document.getElementById("filterButton").click();
                return false;
            }
        };
}
