/// make an array of answers

let answers = [
    "Excuse me?",
    "Hello !",
    "Hi there",
    "Breakfast is the most import meal of the day!",
    "Coding may seem difficult, but be dont discouraged!",
    "Names are just words that people use to address each other",
    "Money is just a concept, made up by humans",
    "I dont believe anyone can hate anyone",
    "Life may or may not have a meaning",
    "How can I help you?",
    "I dont have a name =(",
    "I like every human being!"
]
window.onload=function(){
    var userSays = document.querySelector("#user-text-display").innerHTML = "...";
    let answer;
    let botSays = document.getElementById("botSay").innerHTML ="...";
    //button -on click pass the the input text to a user div
    let sendInput = document.querySelector("#button-send");
    if (sendInput){
            sendInput.addEventListener("click", function(){
                ///assign the value of the input text to a var
                inputValue = document.querySelector("#inputText").value;
                inputValue = inputValue.replace(/[^a-zA-Z ]/g, "");
                document.querySelector("#user-text-display").innerHTML = inputValue;
                console.log(inputValue);
                checkIfIncludes(inputValue);
            })
    }



/// functiion that takes the input value and loops over to check if 
//an elem of an array includes a word
const checkIfIncludes = (inputValue) => {
    if(inputValue){
    let arrInput = inputValue.toLowerCase().split(" ");
    if (arrInput.length >= 1){
        for (let word of arrInput){
            answer = answers.filter(el => el.toLowerCase().split(" ").includes(word));
           
            
          }
          
    }
    else {
        answer = answers.filter(el => el.split(" ").includes(inputValue))
        if (answer.length == 0){
            answer = answers[0];
        }
        
    }
    answer.length == 0 ? answer = answers[0] : answer;
    passToBot(answer);
  }
  

}
 
    const passToBot = (answer) => {
        if (answer){
            setTimeout(() =>{
                document.getElementById("botSay").innerHTML = answer.toString()
            }, 2000)
        }
    }
    
// if includes assign the element of the array to a document.queryselector bot
// if it doesn't include, return the first index of an array

}