//alert("hello")

const url = "https://secondsemester-aa76.restdb.io/rest/friday-night-movie";

const options = {
    headers: {
        "x-apikey": "620bbbb434fd6215658585ff",
    },
};

fetch(url, options)
.then((response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})
.then((data) => {
    //We have the data
    //console.log(data);
    handleCategoryList(data);
})
.catch((e) => {
    //Whoops something went wrong
    console.error("An error occured:", e.message);
});


{/* <article>
            <div class="movie1">
              <img src="LadyBird.svg" alt="movies" /><a
                class="movieTitle"
                href="product-page.html"
                >Lady bird</a
              >
            </div>
          </article> */}

function handleCategoryList(data){
//console.log(data);
data.forEach(showMovie);
}

function showMovie(movie){
    console.log(movie);
//grab the template
const template = document.querySelector("#movieTemplate").content;
//clone it
const copy = template.cloneNode(true);
//change content
copy.querySelector(".movieTitle").textContent = `${movie.Title}`
copy.querySelector("img").src = `./${movie.image}`
//grab parent
const parent = document.querySelector(".category");
//append
parent.appendChild(copy);

}
