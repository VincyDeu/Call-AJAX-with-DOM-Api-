const APIURL = "https://api.pexels.com/v1/";
// const APIKey = "HoAIcqvK8lylK9eZwuiN2eo6TWmwpfhjqhMUyw79WzoD5nFuogmMUfgr";

let photoContainer = document.getElementById("photo-container");
let photoKeyWord = document.getElementById("photos-keyword");

//Creiamo una DOM con gli oggetti degli API
// Fai la chiamata AJAX

const getAlbum = () => {

    fetch(APIURL + "search?query=" + photoKeyWord.value, 
    {headers: {Authorization: APIKey}})

    .then((response) => {return response.json()})
    .then((json) => {albumCard(json.photos)})
    .catch((error) => {console.log(error)});
}

getAlbum();

let albumCard = (photos) => {
    const domElements = photos.map((photo) => {
        console.log(photos);
        img = document.createElement("img");
        img.src = photo.src.small;
        return img;
    })
}



