// API URL
const apiUrlPhoto = "https://lanciweb.github.io/demo/api/pictures/";

// DOM elements
const postCardRow = document.getElementById("post-card-row");

let photoLibrary = [];

function getPhotos() {
  return axios
    .get(apiUrlPhoto)
    .then((response) => {
      photoLibrary = response.data;
    })
    .catch((error) => {
      postCardRow.innerHTML = `
        <div class="alert alert-danger" role="alert">
  Errore nel caricamento delle foto
        </div>
`;
      console.error(error);
    });
}

function generatePostCard(id, title, date, url) {
  postCardRow.innerHTML += `
  <div class="col-lg-3">
    <div class="post-card">
    <img id="pin" src="./img/pin.svg" />
        <img src="${url}" data-photo-id="${id}" />
        <div class="date"> ${date}
        </div>
        <div> ${title}
        </div>
    </div>
    </div>
`;
}

async function generatePostCardRowHTML() {
  /*   await getPhotos(); */
  photoLibrary.forEach((photo) => {
    const { id, title, date, url } = photo;
    generatePostCard(id, title, date, url);
  });
}

async function imageOpener() {
  /* await generatePostCardRowHTML(); */
  const postCardRowImgs = postCardRow.querySelectorAll("img");
  const hoverlay = document.querySelector(".hoverlay");
  const hoverlayImg = hoverlay.querySelector("img");
  const closeImgButton = hoverlay.querySelector("button");

  postCardRowImgs.forEach((img) => {
    img.addEventListener("click", () => {
      hoverlay.classList.remove("d-none");
      hoverlayImg.src = img.src;
    });
  });

  closeImgButton.addEventListener("click", () => {
    hoverlay.classList.add("d-none");
  });
}

async function init() {
  await getPhotos();
  await generatePostCardRowHTML();
  imageOpener();
}

init();
