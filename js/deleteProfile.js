const deleteProfile = async() => {
    let id = JSON.parse(localStorage.getItem("user")).user_id

    await fetch(`http://localhost:3000/deleteUser/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    // LOGOUT 
    localStorage.clear()
    location.reload()
}