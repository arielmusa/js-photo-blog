// API URL
const apiUrlPhoto = "https://lanciweb.github.io/demo/api/pictures/";

// DOM elements
const postCardRow = document.getElementById("post-card-row");

let photoLibrary = [];
console.log(axios.get(apiUrlPhoto));

axios
  .get(apiUrlPhoto)
  .then((response) => {
    photoLibrary = response.data;
    photoLibrary.forEach((photo) => {
      console.log(photo);
      const { url } = photo;
      generatePostCard(url);
    });
  })
  .catch((error) => console.error(error));

function generatePostCard(img) {
  postCardRow.innerHTML += `
  <div class="col-lg-3">
    <div class="post-card">
        <img src="${img}" />
        <p class="img-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
    </div>
`;
}
