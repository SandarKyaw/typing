const time = document.querySelector(".time")
const score = document.querySelector(".score")
const word = document.querySelector(".word")
const input = document.querySelector("input")
const playing = document.querySelector(".playing")
const gameOverEle = document.querySelector(".gameOver") 

const words = [
    "love",
    "hate",
    "family",
    "going",
    "hall",
    "how",
    "umberalla",
    "december",
    "young",
    "banana",
    "rubber",
    "singer",
    "desinger",
    "programmer",
    "speed",
    "consistence",
    "loving",
    "fan",
    "seeing",
    "hello",
    "cruel","lion","lived","Every","day","he","killed","and","ate","a","lot","of","animals.","The","other","animals","were","afraid","the","lion","would","kill","them","all.","The","animals","told","the","lion","“Let’s","make","a","deal.","If","you","promise","to","eat","only","one","animal","each","day","then","one","of","us","will","come","to","you","every","day.","Then","you","don’t","have","to","hunt","and","kill","us","The","plan","sounded","well","thought-out","to","the","lion","so","he","agreed","but","he","also","said","“If","you","don’t","come","every","day","I","promise","to","kill","all","of","you","the","next","day!”","Each","day","after","that","one","animal","went","to","the","lion","so","that","the","lion","could","eat","it.","Then","all","the","other","animals","were","safe.","Finally","it","was","the","rabbit’s","turn","to","go","to","the","lion.","The","rabbit","went","very","slowly","that","day","so","the","lion","was","angry","when","the","rabbit","finally","arrived.","The","lion","angrily","asked","the","rabbit","“Why","are","you","late?”","“I","was","hiding","from","another","lion","in","the","forest.","That","lion","said","he","was","the","king","so","I","was","afraid.”","The","lion","told","the","rabbit","“I","am","the","only","king","here!","Take","me","to","that","other","lion","and","I","will","kill","him.\"","The","rabbit","replied","“I","will","be","happy","to","show","you","where","he","lives.”","The","rabbit","led","the","lion","to","an","old","well","in","the","middle","of","the","forest.","The","well","was","very","deep","with","water","at","the","bottom.","The","rabbit","told","the","lion","“Look","in","there","The","lion","lives","at","the","bottom.”","When","the","lion","looked","in","the","well","he","could","see","his","own","face","in-the","water.","He","thought","that","was","the","other","lion.","Without","waiting","another","moment","the","lion","jumped","into","the","well","to","attack","the","other","lion.","He","never","came","out.","All","of","the","other","animal","in","the","forest","were","very","pleased","with","the","rabbits","clever","trick"
]

let randomWord;

const generateRandomWord = () => {
    randomWord = words[Math.floor(Math.random()*words.length)];
    word.textContent = randomWord;
}

generateRandomWord();

let timeSet = 10;
time.innerHTML = ("10s")

const countDown = () => {
    setInterval(()=>{
        timeSet--;
        time.textContent = timeSet + "s";
        if(timeSet <= 0){
           gameOver();
        }
    }, 1000)
    
}

countDown();

const gameOver = () =>{
    playing.style.display = "none";
    gameOverEle.style.display = "block";
    gameOverEle.innerHTML = `
    <h1>Time ran out ⏰</h1>
    <p>Your score is ${scoreSet}</p>
    <button onclick = "location.reload()">Restart</button>
    `
}

let scoreSet = 0;
score.textContent = "0";

input.addEventListener("input", (event)=> {
const typeWord = event.target.value;
if (randomWord === typeWord){
    generateRandomWord();
    event.target.value = "";
    scoreSet++;
    score.textContent = scoreSet;
    timeSet += 5;
}
})
