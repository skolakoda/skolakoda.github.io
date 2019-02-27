In the sad old days, it was common for JavaScripters to create animation or game loops that looked something like this:

function drawStuff() {  
  // draw all the stuff
}

setInterval(drawStuff, 100);  

That tells the browser to try to call drawStuff() every 100 milliseconds. This method is problematic in a number of ways. For one thing, setInterval() is a general timer function that isn't directly related to animation or drawing to the screen, so it doesn't take into account whether what you're drawing is even visible to the user. It could be behind another window or scrolled out of the viewport, but drawStuff() would be faithfully called regardless, wasting cycles.

Another problem is that setInterval() tries to call drawStuff() every 100ms whether the browser is ready or not. The browser has to juggle your and its own repaint cycles, and since it's unlikely that your game's frame updates and the browser's would ever be in sync in this scenario, CPU usage rises, fans spin up, and device batteries get drained.

Mozilla (the makers of Firefox) came to the rescue, proposing the development of a way to more politely keep screen redraws in sync for everyone. So now, in modern browsers, the window object exposes a new JavaScript method called requestAnimationFrame(). Calling it asks the browser to let you know, by means of a callback function, when it's cool to do some drawing.
