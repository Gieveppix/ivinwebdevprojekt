// redirects to login, if the user is not logged in
if((localStorage.user == '""' || localStorage.user == undefined || localStorage.user == '{}' ) && 
(window.location.pathname != "/auth/login.html" && window.location.pathname != "/auth/register.html" && window.location.pathname != "/cover.html" )) {
    console.log("1");
    history.pushState({}, "", "/auth/login.html")
    location.reload()
}

// redirects to dashboard if the user is logged in
if((localStorage.user != '""' && localStorage.user != undefined && localStorage.user != '{}') && 
(window.location.pathname == "/auth/login.html" || window.location.pathname == "/auth/register.html")) {
    console.log("2");
    history.pushState({}, "", "/dashboard.html")
    location.reload()
}