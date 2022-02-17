const url = "https://secondsemester-aa76.restdb.io/rest/friday-night-movie";

//?q={"$distinct": "age"}&sort=age
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
    showRecommendations(data);
})
.catch((e) => {
    //Whoops something went wrong
    console.error("An error occured:", e.message);
});




function showRecommendations(data){
    //console.log(data);
    //data.forEach(showMovie);
    let genres = [];

    data.forEach(movie => {
        console.log(movie);
//grab the template
const template = document.querySelector("#smallPoster").content;
//clone it
const copy = template.cloneNode(true);
genres.push(movie.Genre);
//change content
//copy.querySelector(".movieTitle").textContent = `${movie.Title}`
copy.querySelector("img").src = `./${movie.image}`
//grab parent
const parent = document.querySelector(".appendHere");
//append
parent.appendChild(copy);
    });
    console.log(genres);
    let unique = [...new Set(genres)];
    console.log(unique);
    showGenres(unique);
}


function showGenres(data){
    //console.log(data);
    data.forEach(handleGenres);
}

function handleGenres(genre){
    console.log(genre);
    const template = document.querySelector("#genreList").textContent;
    const copy = template.cloneNode(true);
    copy.querySelector("a").textContent = `./${movie.Genre}`;
    const parent = document.querySelector("#frontPageCategoryMenu");
    parent.appendChild(copy);
}


function showMovie(movie){
    console.log(movie);
//grab the template
const template = document.querySelector("#smallPoster").content;
//clone it
const copy = template.cloneNode(true);
//change content
//copy.querySelector(".movieTitle").textContent = `${movie.Title}`
copy.querySelector("img").src = `./${movie.image}`
//grab parent
const parent = document.querySelector(".appendHere");
//append
parent.appendChild(copy);
}
