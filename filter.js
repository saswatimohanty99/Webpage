const players=["sachin","sourav","Dhoni","uv","panth","kohli"]
const divref = document.querySelector("#list")
function prepareList(){
    const playersStr= players.map(function(val){
        return`<li>${val}</li>`
    }).join("")
    const list=`<ul>${playersStr}</ul>`
    divref.innerHTML=list;
}
prepareList();
