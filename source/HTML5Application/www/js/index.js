/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var token;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);
    }
};


// https://gears.opswat.com/o/oauth/authorize
function clickFunction()
{
    var url, code;
    document.getElementById("background").style.visibility = 'visible';
    var auth_url = "https://gears.opswat.com/o/oauth/authorize";
    var redirect = "https://opswat.com";
    var login_url = auth_url + '?' + $.param({
        client_id : "ISY97K1VYPEC6IAN6UEUCLMSUXESP2EVA8QFE7Q5X5JNQPHP",
        redirect_uri: redirect,
        response_type: "code"
    });
    var loginWindow = window.open(login_url, '_blank', 'location=yes');
    window.onload = function (){
        window.scrollTo(2000,0);
    };
    $(loginWindow).on('loadstart', function(e) {
        url = e.originalEvent.url;
        if (url.indexOf(redirect) >= 0)
        {
            code = url.split("code=")[1];
            if (code)
            {
                document.getElementById("code").innerHTML = code;
                loginWindow.close();
                GetTokenCode(code);
            }
        }
    });
}

// token_code d75b5a76-d19b-46ec-8731-d189eadedb96
function GetTokenCode(code)
{
    code = document.getElementById("code").innerHTML;
    var token_url = "https://gears.opswat.com/o/oauth/token" ;
    var param = {
                client_id: "ISY97K1VYPEC6IAN6UEUCLMSUXESP2EVA8QFE7Q5X5JNQPHP",
                client_secret: "OBYF3KY16I627IIT7NMW5NJ1ZC73D95J9WIH6BRMGMCLDL7D",
                grant_type: "authorization_code",
                redirect_uri: "https://opswat.com",
                code: code
    };
    var token_code;
    if (code) {
    $.ajax({
        url: token_url,
        data: param,
        type: 'POST',
        success: function(data){
            token_code = data.access_token;
            token = data;
            document.getElementById("token_code").innerHTML = token_code;
            document.getElementById('login').style.display = 'none';
            GetDevices();
        },
        error: function(error){
            alert('error ' + error);
        }
      });
    }
    
}
