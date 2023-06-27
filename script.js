function call(){
    dict()
}





async function dict(){

    let value=document.getElementById('word').value;
    let result=document.getElementById('result');
    let sound=document.getElementById("sound")
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    const res=await fetch(url)
    
    if(res.status==404){
        let top=document.getElementById("top")
        top.style.display="none";
        result.innerHTML=`<div id="result">
        <div class="def">
         <h2 >Click to Home Page </h2>
         <button id="icon">
         Home
         </button>
        </div>`
        let h=document.getElementById("icon")
     h.addEventListener("click",()=>{
    location.reload()
})
    }




   
    const data=await res.json();
    console.log(data);
    let values=value.toUpperCase();
    result.innerHTML=` <div class="def">
    <h2>${values}</h2>
    <button id="icon"  onclick="playSound()"><i class="fa-solid fa-volume-high"></i>
    </button>
   </div>
   <div class="small">
    <p id="p1">${data[0].meanings[0].partOfSpeech}</p>
    <p id="p2">//</p>
    <p id="p3">${data[0].phonetic}</p>
   </div>
   <div class="para-def">
    <p id="d1">${data[0].meanings[0].definitions[0].definition}</p>
    <p id="d2">${data[0].meanings[0].definitions[0].example || ""}</p>
   </div>`;
   sound.setAttribute("src",`${data[0].phonetics[0].audio}`)
   console.log(sound);
}
 function playSound(){
 sound.play();
}
