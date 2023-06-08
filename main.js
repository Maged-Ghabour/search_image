let formSearch = document.getElementById("form-search");
let inputSearch = document.getElementById("input-search");
let btnSearch = document.getElementById("btn-search");
let showMore = document.getElementById("show-more"); 
let searchResult = document.getElementById("search-result"); 






const accessKey = "DbtIbcJ_3QtP5oPfFOa9z6gz658BMutCUt2sZ0rJVb4"
let page = 1 
let keyword = ""



async function searchImage() {
    keyword = inputSearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = ""
    }

    let results = data.results; 
    results.map((result) => {
        const image = document.createElement("img"); 
        image.src = result.urls.small;
        const imageLink = document.createElement("a"); 
        imageLink.href = result.links.html
        imageLink.target = "_blank"; 
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink)

    })
 
    showMore.style.display = "block"

}


btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1; 
    searchImage()
})


showMore.addEventListener('click', (e) => {
     e.preventDefault();
     page++; 
    searchImage()
})