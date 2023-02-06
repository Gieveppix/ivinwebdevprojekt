const updateProfile = async () => { 
    let id = JSON.parse(localStorage.getItem("user")).user_id

    let name = document.getElementById("firstName").value
    let last_name = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let adress = document.getElementById("address").value

    const payload = {
        name,
        last_name,
        email,
        adress
      }

    await fetch(`http://localhost:3000/updateUser/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload)
    })

}