/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var rest_account = "https://gears.opswat.com/o/api/v2/account";
var rest_policy = "https://gears.opswat.com/o/api/v2/account/policy";
var rest_devices = "https://gears.opswat.com/o/api/v2/devices";
var rest_device_detail = "https://gears.opswat.com/o/api/v2/devices/";
var issueDeviceColor = '#FDA213';
var noIssueDeviceColor = '#87CEFA';
var backgroundColor = '#B9D3EE';

function GetAccount(){
    var token_code = document.getElementById("token_code").innerHTML;
    $.ajax({
        url: rest_account,
        data: {access_token : token_code},
        type: 'GET',
        success: function(data){
            alert("Account " + JSON.stringify(data));
        },
        error: function(error){
            alert('error ' + error);
        }
      });
}

function GetDevices()
{
    window.plugins.toast.showShortBottom("Getting devices list");
    window.scroll(0,0);
    document.getElementById("deviceSummery").style.display = 'none';
    var token_code = document.getElementById("token_code").innerHTML;
    //var testJson = '[{"hwid":"HGFGUYFUYF4","hostname":"atest4","nickname":"Mtest4","agent_version":"4.2.6.0","last_seen":"2014-07-18T08:59:00Z","machine_type":"vm","country":"Vietnam","active":1,"total_issue":10,"user_info":{"username":"haha","domain":"opswat"},"os_info":{"family":"Windows","name":"Windows 7 Ultimate","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"32-Bit","os_language":"52","user_password_set":"-1"},"network_info":[{"mac_addr":"00:1b:fc:37:cb:d3","ipv4_addr":"169.254.228.179","ipv6_addr":"fe80::d84b:d48e:8e84:e4b3"},{"mac_addr":"","ipv4_addr":"109.184.237.115","ipv6_addr":""}]},{"hwid":"HGFGUYFUYF7","hostname":"atest7","nickname":"Mtest7","agent_version":"4.2.6.0","last_seen":"2014-07-18T09:00:00Z","machine_type":"desktop","country":"Vietnam","active":1,"total_issue":10,"user_info":{"username":"haha","domain":"opswat"},"os_info":{"family":"Windows","name":"Windows 7 Ultimate","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"32-Bit","os_language":"52","user_password_set":"-1"},"network_info":[]},{"hwid":"HGFGUYFUYF8","hostname":"atest8","nickname":"Mtest8","agent_version":"4.2.6.0","last_seen":"2014-07-18T09:00:00Z","machine_type":"desktop","country":"Vietnam","active":1,"total_issue":10,"user_info":{"username":"haha","domain":"opswat"},"os_info":{"family":"Windows","name":"Windows 7 Ultimate","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"32-Bit","os_language":"52","user_password_set":"-1"},"network_info":[]},{"hwid":"HGFGUYFUYF6","hostname":"atest6","nickname":"Mtest6","agent_version":"4.2.6.0","last_seen":"2014-07-18T09:00:00Z","machine_type":"desktop","country":"Vietnam","active":1,"total_issue":8,"user_info":{"username":"marry","domain":"opswat"},"os_info":{"family":"Windows","name":"Windows 7 Ultimate","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"32-Bit","os_language":"52","user_password_set":"-1"},"network_info":[]},{"hwid":"HGFGUYFUYF10","hostname":"atest10","nickname":"Mtest10","agent_version":"4.2.6.0","last_seen":"2014-07-18T09:00:00Z","machine_type":"desktop","country":"Vietnam","active":1,"total_issue":7,"user_info":{"username":"awinn","domain":"OPSWAT"},"os_info":{"family":"Windows","name":"Windows 7 Enterprise","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"64-Bit","os_language":"20","user_password_set":"-1"},"network_info":[]},{"hwid":"HGFGUYFUYF9","hostname":"atest9","nickname":"atest9","agent_version":"4.2.6.0","last_seen":"2014-07-18T09:00:00Z","machine_type":"desktop","country":"Vietnam","active":1,"total_issue":7,"user_info":{"username":"awinn","domain":"OPSWAT"},"os_info":{"family":"Windows","name":"Windows 7 Enterprise","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"64-Bit","os_language":"20","user_password_set":"-1"},"network_info":[{"mac_addr":"a4:4e:31:37:2c:bd","ipv4_addr":"169.254.8.119","ipv6_addr":"fe80::2506:4fe3:1035:965"},{"mac_addr":"a4:4e:31:37:2c:bd","ipv4_addr":"169.254.9.101","ipv6_addr":""},{"mac_addr":"a4:4e:31:37:2c:bc","ipv4_addr":"192.168.1.70","ipv6_addr":"fe80::91d5:6de8:d1be:aadf"},{"mac_addr":"28:d2:44:22:9f:8b","ipv4_addr":"192.168.200.239","ipv6_addr":"fe80::5c24:8a80:3e7f:68d9"},{"mac_addr":"48:d2:24:0a:53:bd","ipv4_addr":"169.254.120.82","ipv6_addr":"fe80::f492:a746:77ee:7852"},{"mac_addr":"00:ff:e8:3a:8b:e5","ipv4_addr":"10.22.60.6","ipv6_addr":"fe80::dcf7:d4b9:e6e8:b5d5"}]},{"hwid":"HGFGUYFUYF1","hostname":"atest1","nickname":"Mtest1","agent_version":"4.2.6.0","last_seen":"2014-07-18T08:59:00Z","machine_type":"vm","country":"Vietnam","active":1,"total_issue":6,"user_info":{"username":"tantani","domain":"OPSWAT"},"os_info":{"family":"Windows","name":"Windows 7 Home Premium","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"64-Bit","os_language":"20","user_password_set":"-1"},"network_info":[{"mac_addr":"1c:4b:d6:89:43:82","ipv4_addr":"192.168.2.104","ipv6_addr":"fe80::58f1:7f0b:43d9:a836"},{"mac_addr":"48:5b:39:73:dd:4d","ipv4_addr":"192.168.2.106","ipv6_addr":"fe80::d0b7:6e87:bd58:e373"},{"mac_addr":"3e:4b:d6:89:43:82","ipv4_addr":"169.254.88.212","ipv6_addr":"fe80::8170:5dc2:55b1:58d4"}]},{"hwid":"HGFGUYFUYF2","hostname":"atest2","nickname":"Mtest2","agent_version":"4.2.6.0","last_seen":"2014-07-18T08:59:00Z","machine_type":"vm","country":"Vietnam","active":1,"total_issue":6,"user_info":{"username":"tantani","domain":"OPSWAT"},"os_info":{"family":"Windows","name":"Windows 7 Home Premium","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"64-Bit","os_language":"20","user_password_set":"-1"},"network_info":[]},{"hwid":"HGFGUYFUYF3","hostname":"atest3","nickname":"Mtest3","agent_version":"4.2.6.0","last_seen":"2014-07-18T08:59:00Z","machine_type":"vm","country":"Vietnam","active":1,"total_issue":6,"user_info":{"username":"tantani","domain":"OPSWAT"},"os_info":{"family":"Windows","name":"Windows 7 Home Premium","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"64-Bit","os_language":"20","user_password_set":"-1"},"network_info":[]},{"hwid":"KZ60M9CW7L1L218D","hostname":"xyz-PC","nickname":"xyz-PC","agent_version":"7.0.250.0","last_seen":"2014-07-18T02:48:00Z","machine_type":"vm","country":"Vietnam","active":1,"total_issue":6,"user_info":{"username":"Administrator","domain":"xyz-PC"},"os_info":{"family":"Windows","name":"Windows 7 Ultimate","vendor":"Microsoft Corp.","version":"6.1.7601","service_pack_version":"Service Pack 1","architecture":"64-Bit","os_language":"20","user_password_set":"-1"},"network_info":[{"mac_addr":"00:0c:29:f7:71:42","ipv4_addr":"192.168.32.128","ipv6_addr":"fe80::249d:8e6b:580e:46d6"}]}]';
    $.ajax({
        url: rest_devices,
        data: {access_token : token_code, limit: 25},
        type: 'GET',
        success: function(data){
            var devicesGotIssue = 0;
            var devices = "";
            for (i=0;i<data.length; ++i)
            {
                var machine_type = data[i].machine_type;
                var img = "";
                if (machine_type === "laptop")
                    img = "img/laptop-min.png";
                else if (machine_type === "desktop")
                    img = "img/desktop-min.png";
                else 
                    img = "img/vm-min.png"; 
                var hwid = data[i].hwid;
                if (data[i].total_issue > 0) {
                    devicesGotIssue += 1;
                    hwid+='_1';
                    devices += '<tr onclick="GetDeviceDetail(this.id)" id="'+ hwid + '"><td class="EachDevice">' + '<img src="' + img + '">' +data[i].hostname + '</td>' + '<td class="Issue">Issues: ' + data[i].total_issue +'</td></tr>';
                }
                else {
                    hwid += '_0';
                    devices += '<tr onclick="GetDeviceDetail(this.id)" id="'+ hwid + '"><td class="EachDevice">' + '<img src="' + img + '">' +data[i].hostname + '</td>' + '<td class="NoIssue">' + 'No issue' +'</td></tr>';
                }
                
            }
            document.getElementById("NonIssue").style.display = 'inherit';
            document.getElementById("Summery").style.display = 'inherit';
            document.getElementById("List").innerHTML = devices;
            document.getElementById("Summery").innerHTML = 'Devices have issues: ' + devicesGotIssue ;
            document.getElementById("NonIssue").innerHTML = 'Devices have no issues: ' + (data.length-devicesGotIssue) ;
            document.getElementById("background").style.visibility = 'visible';
            document.getElementById("backButton").style.visibility = 'hidden';
            document.getElementById("background").style.backgroundColor = backgroundColor;
        },
        error: function(error){
            alert('error ' + JSON.stringify(error));
        }
      });
    /*var data = JSON.parse(testJson);
    var devicesGotIssue = 0, devices = "";
    for (i=0;i<data.length; ++i)
    {
        if (data[i].total_issue > 0) {
           devicesGotIssue += 1;
        }
        var hwid = data[i].hwid;
        devices += '<tr class="Row" onclick="GetDeviceDetail(this.id)" id="'+ hwid + '"><td class="EachDevice">'+ data[i].hostname + '</td>' + '<td class="Issue">Issues: ' + data[i].total_issue +'</td></tr>';
    }
    */
}
function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

function GetDeviceDetail(id)
{
    window.plugins.toast.showShortBottom("Getting device's info");
    window.scroll(0,0);
    var token_code = document.getElementById("token_code").innerHTML;
    var splitId = id.split('_');
    var realId = splitId[0];
    var state = splitId[1];
    document.getElementById("deviceSummery").style.display = 'inherit';
    if (state === "1") {
        //color for issue device
        document.getElementById("deviceSummery").style.backgroundColor = issueDeviceColor;
    }
    //color for no issue device
    else document.getElementById("deviceSummery").style.backgroundColor = noIssueDeviceColor;
    var url = rest_device_detail + realId;
 
    $.ajax({
        url: url,
        data: {access_token : token_code},
        type: 'GET',
        success: function(data){
            var nickname = data.nickname;
            var machine_type = data.machine_type;
            var os_name = data.os_info.name;
            var child = GetElementInsideContainer('deviceSummery','deviceName');
            child.innerHTML = '<p>' + nickname + '</p><p>' + os_name + '</p>';
            child = GetElementInsideContainer('deviceSummery','image');
            if (machine_type === 'desktop')
                child.src = "img/desktop.png";
            else if (machine_type === 'laptop')
                child.src = 'img/laptop.png';
            else if (machine_type === 'vm')
                child.src = 'img/vm.png';
            else if (machine_type === 'server')
                child.src = 'img/server.jpg';
            var applications = data.applications;
            var endstring = "";
            for (i=0; i< applications.length; ++i) {
                // get each category
                var category = applications[i].category;
                var apps = applications[i].apps;
                var has_issue = applications[i].has_issue;
                endstring += '<tr class="Row"><td class="EachDevice"> '+ category +' </td>';
                var appstring ;
                if (has_issue > 0 || ( (category ==="Public File Sharing") && (apps.length === 0) ))
                    appstring = '<td  class="Issue">';
                else {
                    appstring = '<td  class="NoIssue">';
                }
                if (apps.length === 0 ) {
                    appstring += 'No application detected';
                }
                for (j=0; j<apps.length; ++j) {
                    appstring += apps[j].name + ' ';
                }
                appstring += '</td>';
                endstring += appstring + '</tr>';     
            }
            document.getElementById("List").innerHTML = endstring;
            document.getElementById("backButton").style.visibility = 'visible';
            document.getElementById("NonIssue").style.display = 'none';
            document.getElementById("Summery").style.display = 'none';
        },
        error: function(error){
            alert('error ' + JSON.stringify(error));
        }
    });
}