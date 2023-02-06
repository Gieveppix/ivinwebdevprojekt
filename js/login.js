const API_URL = "http://localhost:3000"

const Login = async () => {
    let email = document.forms["login"]["floatingEmail"].value;
    let password = document.forms["login"]["floatingPassword"].value;
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

    localStorage.setItem("user", JSON.stringify(await response.json()));

    if (localStorage.user[10]) {
      history.pushState({}, "", "/dashboard.html"); 
      location.reload();
    } else {
      alert("Login was not successful")
    }
}

const Logout = async () => {
  localStorage.clear()
  location.reload()
}