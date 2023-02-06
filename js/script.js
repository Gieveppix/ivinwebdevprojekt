const API_URL = "http://localhost:3000"

const Login = async () => {
    var email = document.forms["login"]["floatingEmail"].value;
    var password = document.forms["login"]["floatingPassword"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    const payload = {
      email: email,
      password: password
    }
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
    console.log("WOOOOOOOOOOOOW")
    localStorage.setItem("user", JSON.stringify(await response.json()))
    // localStorage.clear()
    history.pushState({}, "", "/dashboard.html")
    location.reload()
}

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
    });
    history.pushState({}, "", "/dashboard.html")
    location.reload()
}

const Redirect = () => {
  if(localStorage.user == "" || undefined && window.location.pathname != "/auth/login.html" || "/auth/register.html") {
    history.pushState({}, "", "/auth/login.html")
    location.reload()
  }
}