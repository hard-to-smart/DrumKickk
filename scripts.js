const right = document.getElementById("right");

const audio_path = "assets/audio/";
const image_path = "assets/images/";

let instrument=['crash', 'kick', 'snare', 'tom'];

for(let key in instrument){
    const image_container = document.createElement("div");

    image_container.classList.add("box")
    const img = document.createElement("img");
    img.src = `/${image_path}${instrument[key]}.png`
    img.addEventListener('click', ()=>{
        playSound(instrument[key]);
    });
    right.appendChild(image_container).appendChild(img);

}

document.addEventListener("keydown", function (event) {

    console.log(`Key pressed: ${event.key}`);
    if(event.key === 'c')
        playSound(crash);
    else if (event.key === 'k')
        playSound(kick);
    else if (event.key === 's')
        playSound(share);
    else if (event.key === 't')
        playSound(tom);
  });

function playSound( key ){
    const audio = document.createElement("audio");
    audio.classList.add("key")
    audio.src = `/${audio_path}${key}.mp3`;
    console.log(" playing audio")
    return audio.play()
}

