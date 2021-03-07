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

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function (key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick = "writeToDocument('${prev}')">Previous</button>;
                <button onclick = "writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick = "writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick = "writeToDocument('${prev}')">Previous</button>`
    } 
}

function writeToDocument(type) {

    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function (data) {

        if (data.next || data.previous) {
            var pagination;
            pagination = generatePaginationButtons(data.next, data.previous)
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function (item) {
            var dataRow = [];

            Object.keys(item).forEach(function (key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`< td > ${truncatedData}</td > `);
            });
            tableRows.push(`< tr > ${dataRow}</tr > `);
        });
        el.innerHTML = `< table > ${tableHeaders} ${tableRows}</table >${pagination} `;
    });
}