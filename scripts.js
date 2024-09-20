const right = document.getElementById("right");

const audio_path = "assets/audio/";
const image_path = "assets/images/";

let instrument=['crash', 'kick', 'snare', 'tom'];

for(let key of instrument){
    const image_container = document.createElement("div");

    image_container.classList.add("box")
    const img = document.createElement("img");


    img.src = `/${image_path}${instrument[key]}.png`
    img.addEventListener('click', ()=>{
        playSound(instrument[key]);
    });
    right.appendChild(image_container).appendChild(img);
    displayKey("", right)
    console.log(right)
}

document.addEventListener("keydown", (event) => keyPressed(event));


function keyPressed (event) {
    console.log(`Key pressed: ${event.key}`);
    if(event.key === 'c'){
        playSound("crash");
        displayKey('c', "")
    }
    else if (event.key === 'k'){
        playSound("kick");
        displayKey('k')
    }

    else if (event.key === 's'){
        playSound("snare", 's' );
        displayKey('s')

    }

    else if (event.key === 't'){
        playSound("tom", 't');
        displayKey('t')
    }
  }

function playSound( key){
function playSound( key){
    const audio = document.createElement("audio");
    audio.src = `/${audio_path}${key}.mp3`;
    console.log(" playing audio")
    audio.play()
}

function displayKey( keyChar, right ){
    const displayKeyPressed = document.createElement('p');
    displayKeyPressed.textContent = keyChar;
    displayKeyPressed.classList.add("key");
    right.childNodes.
    setTimeout(()=>{displayKeyPressed.remove()}, 1000)
    // return displayKeyPressed

}


// pass right in click event listener and access the values using child nodes. 
//  pass the parent div in displaykey for it to access the div. use parent right and access the child

