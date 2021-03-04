var xhr = new XMLHttpRequest();
var data;


// GET is used to retrieving data from server, second argument is URL that we wont to retrieve.
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {

    // The if statement is true then 'readyState is fully loaded' and 'status' successful responses
    if (this.readyState == 4 && this.status == 200) {

        data = JSON.parse(this.responseText);
    }
};

setTimeout(function() {
    console.log(data);
}, 500);