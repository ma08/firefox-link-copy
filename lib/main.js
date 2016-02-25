var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var clipboard = require("sdk/clipboard");

var { MatchPattern } = require("sdk/util/match-pattern");
/*var pattern1 = new MatchPattern(/http(s|):\/\/(www\.)?google.<]);
var pattern2 = new MatchPattern(/http(s|):\/\/(www\.)?facebook.<]);
var pattern3 = new MatchPattern(/http(s|):\/\/(www\.)?hangouts.google.<]);
var pattern4 = new MatchPattern(/http(s|):\/\/(www\.)?search.yahoo.<]);
*/
var contextMenu = require("sdk/context-menu");
var path=require("sdk/self").data.url("icon_48.png");
var menuItem = contextMenu.Item({
    //icon: path ,
    label: "Copy real link",
    //context:  [contextMenu.SelectorContext("a[href]"),contextMenu.URLContext([pattern1,patter2,pattern3,pattern4])],
    context:  [contextMenu.SelectorContext("a[href]"),contextMenu.URLContext([/http(s|):\/\/(www\.)?google.*/,
                                                            /http(s|):\/\/(www\.)?facebook.*/,
                                                            /http(s|):\/\/(www\.)?hangouts\.google.*/,
                                                            /http(s|):\/\/(www\.)?search\.yahoo.*/
                                                        ])],
    contentScriptFile: require("sdk/self").data.url("check-node.js"),
    onMessage: function(data){
        var msg=data[0];
        var pageUrl=data[1]
        var testRE;
        if(pageUrl.match("http(s|):\/\/(www.)?google")){
            testRE = msg.match("url=([^&]*)&");
        }
        else if(pageUrl.match("http(s|):\/\/(www.)?hangouts\.google")){
            testRE = msg.match("url\\?q=([^&]*)&");
        }
        else if(pageUrl.match("http(s|):\/\/(www.)?facebook")){
            testRE = msg.match("u=([^&]*)&");
        }
        else if(pageUrl.match("http(s|):\/\/(www.)?search\.yahoo")){
            testRE = msg.match("RU=([^\/]*)\/");
        }
        var str=msg;
        console.log(msg)
        //testRE = msg.match("url=([^&]*)&");
        if(testRE){
            str=decodeURIComponent(testRE[1]);
        }
        clipboard.set(str);
        console.log(str)
    }
});
