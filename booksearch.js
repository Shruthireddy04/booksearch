let searchInput = document.getElementById("searchInput");
let selectDisplayCount = document.getElementById("selectDisplayCount");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

let formData = {
    no: 10
};
let url = null;
let options = {
    method: "GET"
};

function displayResults(search_results) {
    spinner.classList.toggle("d-none");
    searchResults.classList.toggle("d-none");


    let row = document.createElement("div");
    row.classList.add("row");
    searchResults.appendChild(row);



    if (search_results.length === 0) {
        let divCon1 = document.createElement("div");
        divCon1.classList.add("col-12", "mb-3");
        row.appendChild(divCon1);

        let p = document.createElement("h1");
        p.textContent = "No Results Found";
        p.classList.add("m-auto", "para");
        divCon1.appendChild(p);
    } else {
        let divCon1 = document.createElement("div");
        divCon1.classList.add("col-12", "mb-3");
        row.appendChild(divCon1);

        let p = document.createElement("h1");
        p.textContent = "Popular Books";
        p.classList.add("para");
        divCon1.appendChild(p);

        for (let i of search_results) {



            let divCon = document.createElement("div");
            divCon.classList.add("col-6");
            row.appendChild(divCon);

            let img1 = document.createElement("img");
            img1.src = i.imageLink;
            divCon.appendChild(img1);


            let author = document.createElement("p");
            author.textContent = i.author;
            author.classList.add("para2");
            divCon.appendChild(author);

        }
    }



}


selectDisplayCount.addEventListener("change", function(e) {
    formData.no = parseInt(e.target.value);
    /* searchResults.textContent = "";
     if (searchInput.value !== "") {
         url = "https://apis.ccbp.in/book-store?title=" + formData.input1 + "&maxResults=" + formData.no;
         console.log(url);

         spinner.classList.toggle("d-none");
         searchResults.classList.toggle("d-none");

         fetch(url, options)
             .then(function(res) {
                 return res.json();
             })
             .then(function(data) {
                 let {
                     search_results
                 } = data;

                 displayResults(search_results);
             });
     }*/
});



searchInput.addEventListener("keydown", function(e) {

    if (e.key === "Enter" && e.target.value !== "") {
        searchResults.textContent = "";
        formData.input1 = e.target.value;

        url = "https://apis.ccbp.in/book-store?title=" + formData.input1 + "&maxResults=" + formData.no;
        console.log(url);
        spinner.classList.toggle("d-none");
        searchResults.classList.toggle("d-none");

        fetch(url, options)
            .then(function(res) {
                return res.json();

            })
            .then(function(data) {
                let {
                    search_results
                } = data;

                displayResults(search_results);
            });
    }
});