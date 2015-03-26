self.on("click",function(node,data){
    console.log('bbbbbbbbbb')
    console.log(node.href)
    self.postMessage(node.href);
});
self.on("context", function(node){
    console.log('aaaaaaa')
    console.log(node.href)
    if(node.href && node.href.match(/^https?:\/\/(\w+\.)*stackoverflow\.com(\/.*)?$/))return true;  //show in context menu if return value is true.
});
