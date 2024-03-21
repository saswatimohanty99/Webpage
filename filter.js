const players=["sachin","sourav","Dhoni","uv","panth","kohli"]
const divref = document.querySelector("#list")
function prepareList(data){
    const playersStr= data.map(function(val){
        return`<li>${val}</li>`
    }).join("")
    const list=`<ul>${playersStr}</ul>`
    divref.innerHTML=list;
}

function handleChange(eve){
    const value =  eve.target.value;
    const filteredPlayers=players.filter(function(val){
        return val.toLowerCase().startsWith(value.toLowerCase())
    })
    prepareList(filteredPlayers)

}
prepareList(players); 