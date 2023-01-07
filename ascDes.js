let names = ["Rajesh", "Arun", "Prema", "Vinoth", "Prem", "Akash", "Lokesh", "Vignesh", "Prakash", "Sandhiya"]

function createList (list){
    document.getElementById("list").innerHTML = ""
    list.forEach((item) => {
        let li = document.createElement("li")
        li.innerHTML = item

        document.getElementById("list").appendChild(li)
    })
}

createList(names)

function ascending(t = names) {
    let temp = [...t]
    temp.sort()

    createList(temp)
}

function descending(t = names) {
    let temp = [...t]
    temp.sort().reverse()

    createList(temp)
}

// document.getElementById("ascending").addEventListener('click', () => ascending())
// document.getElementById("descending").addEventListener('click', () => descending())
// document.getElementById("reset").addEventListener('click', ()=> createList(names))