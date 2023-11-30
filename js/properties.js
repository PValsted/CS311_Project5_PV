
//Takes the user-entered words, hides the current elements, and creates a new div containing a Mad Lib that has the words the user entered.
function madLibs() {
    
    //record word data
    const word1 = document.getElementById("word-1");
    const word2= document.getElementById("word-2");
    const word3 = document.getElementById("word-3");
    const word4= document.getElementById("word-4");
    const word5 = document.getElementById("word-5");
    const word6= document.getElementById("word-6");
    const word7 = document.getElementById("word-7");
    const word8= document.getElementById("word-8");
    const word9 = document.getElementById("word-9");
    const word10= document.getElementById("word-10");
    const word11 = document.getElementById("word-11");
    const word12= document.getElementById("word-12");

    //select container
    const container = document.getElementById("container");
    
    //hide the currently displayed divs
    const dir=document.getElementById("directions");
    dir.style.display="none";
    
    const words=document.getElementById("words");
    words.style.display="none";

    const but=document.getElementById("button");
    but.style.display="none";

    //create new div
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id','results');

    //create body
    let finalText= document.createElement("p");
    text= document.createTextNode("I went to the beach in ["+word1.value+"] today with ["+word2.value+"]. We had a ["+
    word3.value+"] time. We first built a ["+word4.value+"] and then we ran around in the ["+word5.value+"] for a little while. The water was a bit ["+
    word6.value+"]. The sun was very ["+word7.value+"] so we made sure to wear a lot of ["+word8.value+"]. We spent ["+word9.value+"] hours there. At the end of the day, we treated ourselves to a ["+
    word10.value+"] and had ["+word11.value+"] for dinner. I definitely want to go to the beach again but next time I want to ["+word12.value+"].");

    //create button
    let resetButton= document.createElement("button");
    resetButton.setAttribute('onclick','reset()');
    resetButton.textContent = "Reset";

    //append everything
    finalText.appendChild(text);
    newDiv.appendChild(finalText);
    newDiv.appendChild(resetButton);
    container.appendChild(newDiv);

    //empty input
    word1.value= "";
    word2.value= "";
    word3.value= "";
    word4.value= "";
    word5.value= "";
    word6.value= "";
    word7.value= "";
    word8.value= "";
    word9.value= "";
    word10.value= "";
    word11.value= "";
    word12.value= "";
}

//Removes the new div and reveals the old ones again
function reset(){
    const newText=document.getElementById("results");
    newText.remove();

    const dir=document.getElementById("directions");
    dir.style.display="block";
    
    const words=document.getElementById("words");
    words.style.display="block";

    const but=document.getElementById("button");
    but.style.display="block";
}