//hämta element
const spara = document.getElementById("spara")
list.innerText = localStorage.getItem("username")

//skapa click funktion button
spara.addEventListener("click", (event) => {
    event.preventDefault();
    //lägg till text i lista
    let input = document.getElementById("input").value;
    let list = document.getElementById("list");
    let radera = document.createElement("button")

    list.innerText = input
    radera.textContent = "radera";
    list.append(radera)
 

    localStorage.setItem("username", input)


    //raderar knapp
    function hejsan(){
    radera.addEventListener("click", (event) => {
        event.preventDefault();
        list.innerText = "";
        localStorage.removeItem("username")
        
    })

}
    hejsan()
});














