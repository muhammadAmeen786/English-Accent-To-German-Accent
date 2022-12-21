var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
// var api = {
//     "success": {
//       "total": 1
//     },
//     "contents": {
//       "translated": "Germany iss a kountry vhere lots uff kars are made mitt high qfality mitt poor aeszzetics.",
//       "text": "Germany is a country where lots of cars are made with high quality with poor aesthetics.",
//       "translation": "german-accent"
//     }
//   }

let btnToTranslate = document.querySelector("#translate-btn");

btnToTranslate.addEventListener("click", function () {
  var inputTextVal = inputText.value;
  if (inputTextVal == "") {
    outputText = "please enter soemthing to translate";
  } else {
    textTranslation(inputTextVal);
  }
});

function textAndUrl(url) {
  return url + "?" + "text=" + inputText.value;
}
function errorHandler(error) {
  console.log("some error occured" + error);
  alert("something wrong with the server.");
}

function textTranslation(inputTextVal) {
  fetch(
    textAndUrl("https://api.funtranslations.com/translate/german-accent.json")
  )
    .then((Response) => Response.json())
    .then((json) => {
      // console.log(json)
      var translateText = json.contents.translated;
      outputText.innerHTML = translateText;
    })
    .catch(errorHandler);
}
