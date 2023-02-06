window.onload = function() {
    let initials = ""
    let name = JSON.parse(localStorage.getItem("user")).name
    let last_name = JSON.parse(localStorage.getItem("user")).last_name

    console.log(name, last_name)

    if(name && last_name) {
        initials = `${name[0]}${last_name[0]}`
    } else if (name || last_name) {
        initials = `${name[0]}`
    }

    document.getElementById("initials").innerHTML = initials;
}