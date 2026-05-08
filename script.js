document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    let message =
    `Hello, my name is ${name}. My number is ${phone}. I want a website demo.`;

    let url =
    `https://wa.me/919598919992?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});
