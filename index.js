const apiKey = "131e008920fb5b39accae9ba9098bd08";
const Url1 = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`;
const Url3 = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`;
const Url4 = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`;
const Url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`;

async function fetchAPI() {
  const response = await fetch(Url1);
  const data = await response.json();
  console.log(data);
  const result = await data.results;
  console.log(result);
  const container1 = document.querySelectorAll(".container1");
  const imageElement = document.querySelectorAll(".img1");
  result.forEach((image, index) => {
    const imageBackdrop = image.backdrop_path;
    const Movietitle = document.createElement("h4");
    const releaseDate = document.createElement("p");
    Movietitle.classList.add("Movietitle");
    releaseDate.classList.add("releaseDate");

    const { title, name, release_date, first_air_date } = image;
    Movietitle.textContent = `${title || name}`;
    releaseDate.textContent = `${release_date || first_air_date}`;

    container1[index].appendChild(Movietitle);
    container1[index].appendChild(releaseDate);
    console.log(imageBackdrop);
    console.log(Movietitle.textContent);
    console.log(releaseDate.textContent);

    if (index < imageElement.length) {
      imageElement[
        index
      ].src = `https://image.tmdb.org/t/p/w780${imageBackdrop}`;
    }
  });
  /*const imagePath = `https://image.tmdb.org/t/p/w780${image}`;
  const img = document.getElementById("img1");
  img.src = imagePath;

  console.log("come");*/
}
fetchAPI();

//https://image.tmdb.org/t/p/ce3prrjh9ZehEl5JinNqr4jIeaB.jpg

async function fetchAPI1() {
  const response = await fetch(Url3);
  const data = await response.json();
  console.log(data);
  const result = await data.results;
  console.log(result);
  const container1 = document.querySelectorAll(".container3");
  const imageElement = document.querySelectorAll(".img3");
  result.forEach((image, index) => {
    const imageBackdrop = image.backdrop_path;
    const Movietitle = document.createElement("h4");
    const releaseDate = document.createElement("p");
    Movietitle.classList.add("Movietitle");
    releaseDate.classList.add("releaseDate");

    const { original_name, first_air_date } = image;
    Movietitle.textContent = `${original_name}`;
    releaseDate.textContent = `${first_air_date}`;

    container1[index].appendChild(Movietitle);
    container1[index].appendChild(releaseDate);
    console.log(imageBackdrop);
    console.log(Movietitle.textContent);
    console.log(releaseDate.textContent);

    if (index < imageElement.length) {
      imageElement[
        index
      ].src = `https://image.tmdb.org/t/p/w780${imageBackdrop}`;
    }
  });
  /*const imagePath = `https://image.tmdb.org/t/p/w780${image}`;
  const img = document.getElementById("img1");
  img.src = imagePath;

  console.log("come");*/
}
fetchAPI1();

async function fetchAPI4() {
  const response = await fetch(Url4);
  const data = await response.json();
  console.log(data);
  const result = await data.results;
  console.log(result);
  const container1 = document.querySelectorAll(".container4");
  const imageElement = document.querySelectorAll(".img4");
  result.forEach((image, index) => {
    const imageBackdrop = image.backdrop_path;
    const Movietitle = document.createElement("h4");
    const releaseDate = document.createElement("p");
    Movietitle.classList.add("Movietitle");
    releaseDate.classList.add("releaseDate");

    const { original_title, release_date } = image;
    Movietitle.textContent = `${original_title}`;
    releaseDate.textContent = `${release_date}`;

    container1[index].appendChild(Movietitle);
    container1[index].appendChild(releaseDate);
    console.log(imageBackdrop);
    console.log(Movietitle.textContent);
    console.log(releaseDate.textContent);

    if (index < imageElement.length) {
      imageElement[
        index
      ].src = `https://image.tmdb.org/t/p/w780${imageBackdrop}`;
    }
  });
  /*const imagePath = `https://image.tmdb.org/t/p/w780${image}`;
  const img = document.getElementById("img1");
  img.src = imagePath;

  console.log("come");*/
}
fetchAPI4();

async function fetchAPI2() {
  const response = await fetch(Url2);
  const data = await response.json();
  console.log(data);
  const result = await data.results;
  console.log(result);
  const container1 = document.querySelectorAll(".container2");
  const imageElement = document.querySelectorAll(".img2");
  result.forEach((image, index) => {
    const imageBackdrop = image.backdrop_path;
    const Movietitle = document.createElement("h4");
    const releaseDate = document.createElement("p");
    Movietitle.classList.add("Movietitle");
    releaseDate.classList.add("releaseDate");

    const { original_title, release_date } = image;
    Movietitle.textContent = `${original_title}`;
    releaseDate.textContent = `${release_date}`;

    container1[index].appendChild(Movietitle);
    container1[index].appendChild(releaseDate);
    console.log(imageBackdrop);
    console.log(Movietitle.textContent);
    console.log(releaseDate.textContent);

    if (index < imageElement.length) {
      imageElement[
        index
      ].src = `https://image.tmdb.org/t/p/w780${imageBackdrop}`;
    }
  });
  /*const imagePath = `https://image.tmdb.org/t/p/w780${image}`;
  const img = document.getElementById("img1");
  img.src = imagePath;

  console.log("come");*/
}
fetchAPI2();

/*const navImgDB = document.querySelector(".nav-imgDB");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  
});
*/
