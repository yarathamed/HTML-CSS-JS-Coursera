(function (window){

    var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speakWord = "Good Bye";
    byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
}

    window.byeSpeaker=byeSpeaker;
})(window);