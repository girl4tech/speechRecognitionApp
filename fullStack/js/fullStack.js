//hands off speech recognition app that listens for what the user is saying and when it recognizes certain words, triggers an API request that returns the image for that word

//speech recognition, global variable that lives
//within the browser - on top of window
window.SpeechRecognition = window.SpeechRecognition || window. //check to see if speech recog is native to browser if not, then loads relative prefix (webKit)
  webkitSpeechRecognition;
//declare new instance of recognition
  const recognition = new SpeechRecognition();
  recognition.interimResults = true; //as user speaks, results get populated - user can see what she says as she says it
  let p = document.createElement("p");//adding paragraph element
  const words = document.querySelector(".words");//taking words div and appending the p's
  words.appendChild(p);

  // function makeReq(){
  //   var request = new XMLHttpRequest();
  //   request.open("GET", "/api?word="+word, true);
  //
  //   request.onload = function(){
  //     console.log("works")
  //     if(request.status >= 200 && request.status < 400){
  //       //success!
  //       var data = JSON.parse(request.responseText);
  //       console.log(data)
  //     } else{
  //       console.log("we reached our target server, but it returned an error");
  //     }
  //   }
  // };

  recognition.addEventListener("result", e=> { //if stop speaking and start again, speech recognition no longer works because it only runs after it hears a 'result' event. When the result event is over, the event listener unbinds itself. So must include another function that calls speech recognition when it ends.
    // console.log(e.results);
    const transcript = Array.from(result)//take all the nested results and turn into a string. form an array because not array by default
    //map the first results
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")//want to join one big string in the end, made up of all the things the user said that the computer picked up

    p.textContent = transcript;//appending text to the DOM
    if(e.result[0].isFinal){
      p = document.CreateElement("p");
      words.appendChild(p);
    }//words each over each other as user talks because speech recognition resets so this is an edgecase

  //   if(transcript.includes("is" || "I" || "that")){
  //     makeReq();
  //   }
  //
  //   console.log(transcript);
  });

  recognition.addEventListener("end",recognition.start);//this will start speech recognition back up again after the user stops talking
  recognition.start();
