//alert("hello")

const url = "https://secondsemester-aa76.restdb.io/rest/friday-night-movie/620a5884f701f4600009f6d4";

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
    handleData(data);
})
.catch((e) => {
    //Whoops something went wrong
    console.error("An error occured:", e.message);
});

function handleData(movie) {
    console.log(movie);
    document.querySelector("h3").textContent = movie.Title
    document.querySelector("p").textContent = movie.Mood
//     /* //movies.forEach(title => {
//         console.log(title);
//         /*1.make a template
//         2.grab it*/
//         const template = document.querySelector("template").content;
//         //3clone it
// const clone = template.cloneNode(true);

//         //4populate with data
//     clone.querySelector("h3").textContent = title.title;
//         //5append to dom
//         const mainEl = document.querySelector("main");
//         mainEl.appendChild(clone);
//    // }); */
}



