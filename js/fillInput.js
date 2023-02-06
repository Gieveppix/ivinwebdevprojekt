window.onload = async function() {
        
    let id = JSON.parse(localStorage.getItem("user")).user_id
    
    const response = await fetch(`http://localhost:3000/getData/${id}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
    })
    
    let data = await response.json();
    
    document.getElementById("firstName").value = data.name;
    document.getElementById("lastName").value = data.last_name;
    document.getElementById("email").value = data.email;
    document.getElementById("address").value = data.adress;
    
    
    // INITIALS
    if(data.name && data.last_name) {
        initials = `${data.name[0]}${data.last_name[0]}`
    } else {
        initials = `${data.name[0]}`
    }
    document.getElementById("initials").innerHTML = initials;
    //
}
    
    