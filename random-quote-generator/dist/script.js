$(document).ready(function(){
  var randomQuote, randomNum, randomAuthor, randomVideo;
  randomQuote = "I accidently clicked this.";
  randomAuthor = "-Insert my name"
  randomVideo ="https://www.youtube.com/watch?v=MJbTjBLEKBU"

  function getQuote(){
    var quotes = ['"It\'s time to kick ass and chew bubblegum. And I\'m all outta gum"' , '"What is this, the testing department\'s day off or something?"', '"Do a barrel roll!"','"It\'sa me, Mario!"','"Didn’t we have some fun though? Remember when the platform was sliding into the fire pit and I said ‘Goodbye’ and you were like ‘NO WAY!’ and then I was all ‘We pretended we were going to murder you’? That was great."','"War. War never changes."','"Finish Him!"','"Sonic\'s the name, speed\'s my game"','"Stay Frosty"'];
    var author = ["-Duke Nukem", "-Conker's Bad Fur Day", "-Star Fox", "-Super Mario","-Portal","-Fallout","-Mortal Kombat","-Sonic","-Call Of Duty 4",];
    var video =["https://www.youtube.com/watch?v=D0GZ4Y9w6o0", "https://youtu.be/eov1mmCWm84?t=34s", "https://youtu.be/wIkJvY96i8w?t=30s", "https://www.youtube.com/watch?v=3kmKrVvRfoY", "https://youtu.be/GRzRH4n27RY?t=9m31s", "https://youtu.be/P8kcjyW0scI?t=2m33s", "https://youtu.be/3x8boSrOsgk?t=12", "https://www.youtube.com/watch?v=u3p7tEL7wAk", "https://www.youtube.com/watch?v=I5f7AkQIUQg"];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];
    randomVideo = video[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    
  }
  $("#twitter").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote + " "+randomAuthor);
    
  });
  
  $("#youtube").on("click", function(){
    window.open(randomVideo);
    
  });
  
  $("#newQuote").on("click", function(){
    getQuote();
  });
   
});