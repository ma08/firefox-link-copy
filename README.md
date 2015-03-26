##Google Search, Facebook Chat and Hangouts(in Gmail)- Link Copy - (For Firefox)

[Get this on Mozilla's Addon space](https://addons.mozilla.org/en-US/firefox/addon/copy-real-url/)

To install manually, just press `Ctrl+O (Cmd+O for Mac)` and open the `.xpi`
file.

To build the `.xpi` from source, download the addon sdk for firefox and
run `<path to cfx> xpi`

This is just a firefox version of [chrome-link-copy](https://github.com/ma08/chrome-link-copy)

I was fed up of the redirection urls google gives on its search results - making it a chore to copy the link address.
As I am now using firefox as the default broswer, I decided to write the firefox
version of this add on

A tiny extension for `Firefox` to make copying links from google pain free.
Generally when you right click a link on google search and select
`Copy Link Address`, the url copied is google's redirecting url and not the original url.
It looks like this `https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCMQFjAB&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLed_Zeppelin&ei=DFHnU8_mK4Hi8AXqpIDAAg&usg=AFQjCNHIjSJNblTZM7fbhcTkrPNp14SnKw&sig2=L95WqCRVToubyMsGNnBFWg&bvm=bv.72676100,d.dGc`

So I introduced an extra option in the contextmenu for google search links, `Copy real link`, using this you can copy the original link without any alteration.

Using this extension, the copied link is this
`http://en.wikipedia.org/wiki/Led_Zeppelin`

Works for Google Search, Google Images, Facebook Chat, Hangouts in Gmail

I will put in a more appealing README later when I find the time/energy.

![alt tag](http://i.imgur.com/ZrOPC6f.png)
![alt tag](http://i.imgur.com/hYMumRm.png)
![alt tag](http://i.imgur.com/7R8STq9.png)
![alt tag](http://i.imgur.com/rYPk8UY.png)
