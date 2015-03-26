var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var clipboard = require("sdk/clipboard");

var contextMenu = require("sdk/context-menu");
var path=require("sdk/self").data.url("icon_48.png");
console.log(path);
 var menuItem = contextMenu.Item({
        image: path ,
        label: "Copy real link",
        context:  [contextMenu.SelectorContext("a[href]"),contextMenu.URLContext("*")], 
        contentScriptFile: require("sdk/self").data.url("check-node.js"),
        onMessage: function(data){
          var msg=data[0];
          var pageUrl=data[1]
          var testRE;
          console.log(pageUrl)
          if(pageUrl.match("http(s|):\/\/(www.)?google")){
            testRE = msg.match("url=([^&]*)&");
	      }
          else if(pageUrl.match("http(s|):\/\/(www.)?talkgadget.google")){
              testRE = msg.match("url\\?q=([^&]*)&");
	      }
          else if(pageUrl.match("http(s|):\/\/(www.)?facebook")){
            testRE = msg.match("u=([^&]*)&");
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

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png"
    //"32": "./icon-32.png",
    //"64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.mozilla.org/");
}
