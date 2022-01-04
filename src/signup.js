function signup(e) {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
    let name = myForm.name.value;
    let email = myForm.email.value;
    let password = myForm.password.value;
    let passwordcheck = myForm.passwordcheck.value;

    if (localStorage.getItem('users') === null) {

        localStorage.setItem("users", JSON.stringify([]));
    }

    // grab and prepare user data

    let user = {
        name,
        email,
        password,
        passwordcheck,
    };

    // get array from localstorage

    let arr = JSON.parse(localStorage.getItem("users"));

    // push new users to arr

    arr.push(user); //added a new user

    localStorage.setItem("users", JSON.stringify(arr));





}