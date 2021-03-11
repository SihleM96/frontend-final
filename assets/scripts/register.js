//registration

function registerUser() {
    const list = document.getElementById('registration')
    const inputs = list.getElementsByTagName('input');
    console.log(inputs);
    const user = {
        firstname: inputs[0].value,
        lastname: inputs[1].value,
        email: inputs[2].value,
        mobile_number: inputs[3].value,
        password: inputs[4].value,
    }
    console.log(user);

    fetch("https://127.0.0.1:5000/add-new-record/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response)=> response.json())
    .then((json)=> {
        console.log(json);
        alert("Succesfully Registered");
        document.getElementById('registration').reset();
    });
}


//login
let users = [];

fetch("http://127.0.0.1:5000/show-records/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function loginUser() {
  const form = document.getElementById('login')
  let inputs = form.getElementsByTagName("input");

  let email = inputs[0].value;
  let password = inputs[1].value;
  console.log(email);
  console.log(password);
  let loggedIn = users.filter((user) => {
    return user.email == email && user.password == password;
  });

  console.log(loggedIn);

  if (loggedIn.length > 0) {
      localStorage.setItem("user", JSON.stringify(loggedIn[0]))
      JSON.parse(localStorage.getItem("user"))
    alert("You are now logged in");
    window.location.href = "cart.html";
    console.log(window.location.href);
  } else {
    alert("Credentials invalid");
  }
}