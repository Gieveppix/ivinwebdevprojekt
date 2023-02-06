const sendMail = async () => {

    let to = JSON.parse(localStorage.getItem('user')).email
    const payload = {
        to: to,
    }
    await fetch(`${API_URL}/sendMail`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
    }).then((response) => alert("Mail was sent successfully"))
    .catch((err) => alert("There was a problem with sending your mail"))

}