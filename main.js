var xhr = new XMLHttpRequest();

// GET is used to retrieving data from server, second argument is URL that we wont to retrieve.
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    
    // The if statement is true then 'readyState is fully loaded' and 'status' successful responses
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("data").innerHTML = this.responseText;

        // this shows type of string
        //console.log(typeof(this.responseText));
        
        // this shows an object
        //console.log(typeof(JSON.parse(this.responseText)));

        // now we got object logged to the console
        console.log(JSON.parse(this.responseText));
    }
};

