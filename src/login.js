function signin(e) {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
    let email = myForm.email.value;
    let password = myForm.password.value;

    let all_users = JSON.parse(localStorage.getItem("users"));

    all_users.forEach(function(user) {

        if (email === user.email && password === user.password) {
            (window.location.href = "product.html")&&alert("Login Successfully!");
        } else {
            alert("Please Enter Valid credentials")
        }

    });

}
