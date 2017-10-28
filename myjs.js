/***variables***/
var titleStr = "";

/***functions***/

function changeTitle(){
    titleStr = document.getElementById("titleinput").value;
}

/***interactions***/

document.getElementById("menubutton").addEventListener("click", function(){
    document.getElementById("controls").style.bottom = "100px";
});

