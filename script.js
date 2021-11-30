//hämta element
const add = document.getElementById("spara")

//skapa click funktion button

add.addEventListener("click", (event) => {
    event.preventDefault();
    //lägg till text i lista
    let input = document.getElementById("input").value;
    let list = document.getElementById("list");
    let radera = document.createElement("button")
    radera.textContent = "radera";
    list.innerText = input
    list.append(radera)
    localStorage.setItem("username", input)
    //hämta värdet från localstorage
    localStorage.getitem("username")

    //raderar knapp
    radera.addEventListener("click", (event) => {
        event.preventDefault();
        list.innerText = "";

        localStorage.removeItem("username", input)
    })
});










