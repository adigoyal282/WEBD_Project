console.log("Linked with script");

function formValidator()
{
    console.log("Form Validator");
    var username = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    if(username.length<8)
    {
        window.alert("Username must me more than 8 characters");
    }
    else if(password.length<8)
    {
        window.alert("Password must be greater than 8 characters");
    }
    else
    {
        window.location.href = "project.html";
    }
}
