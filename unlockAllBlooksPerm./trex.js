var open_prototype = XMLHttpRequest.prototype.open,
intercept_response = function(urlpattern, callback) {
   XMLHttpRequest.prototype.open = function() {
      arguments['1'].match(urlpattern) && this.addEventListener('readystatechange', function(event) {
         if ( this.readyState === 4 ) {
            var response = callback(event.target.responseText);
            Object.defineProperty(this, 'response',     {writable: true});
            Object.defineProperty(this, 'responseText', {writable: true});
            this.response = this.responseText = response;
         }
      });
      return open_prototype.apply(this, arguments);
   };
};

intercept_response(/https:\/\/api.blooket.com\/api\/users\/unlockblook/, function(){
    return JSON.stringify({
        tokens: 300,
        isNewBlook: true,
        unlockedBlook: "Tyrannosaurus Rex"
    })
})
