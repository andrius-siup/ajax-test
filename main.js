const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {  // cb - for 'callback'

    var xhr = new XMLHttpRequest();
    // GET is used to retrieving data from server, second argument is URL that we wont to retrieve.
    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {

        // The if statement is true then 'readyState is fully loaded' and 'status' successful responses
        if (this.readyState == 4 && this.status == 200) {

            cb(JSON.parse(this.responseText));
        }
    };

}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = ""; 
    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
             document.getElementById("data").innerHTML += "<p>" + item.name + "</p>";
        })
       
    });
}