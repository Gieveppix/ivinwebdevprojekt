const API_URL = "http://localhost:3000"

const Register = async () => {
    var name = document.forms["register"]["floatingName"].value;
    var email = document.forms["register"]["floatingEmail"].value;
    var password = document.forms["register"]["floatingPassword"].value;
    if (email == "") {
        alert("Name must be filled out");
        return false;
      }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }

    const payload = {
      name: name,
      email: email,
      password: password
    }
    console.log(payload);
    
    await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then((response) => alert("Registration successful"), 
    history.pushState({}, "", "/auth/login.html"), location.reload())
}