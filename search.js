let search = document.getElementById("btn");
document.getElementById("info") =document.getElementById('newHTMLTextbox').value;


let input = document.getElementById("info")
;



function insertInfo(){
    document.write(input);
    document.getElementById("wikiinfo").innerHTML= input;
    //document.write(input);
}

search.addEventListener("click",insertInfo, false);