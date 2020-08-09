const foto001Link = document.getElementById("foto001-link");
const foto002Link = document.getElementById("foto002-link");
const foto003Link = document.getElementById("foto003-link");

const foto001 = document.getElementById("foto001");
const foto002 = document.getElementById("foto002");
const foto003 = document.getElementById("foto003");

const fotoClick = (event) => {
  //debugger;

  const imgList = document.querySelectorAll("img");
  const fotoId = event.target.attributes["data-img"].value;
  const foto = document.getElementById(fotoId);

  imgList.forEach((img) => {
    img.className = "hide";
  });

  if (foto.className === "hide") {
    foto.className = "";
  } else {
    foto.className = "hide";
  }

  //console.log(fotoId);
};

foto001Link.addEventListener("click", fotoClick);

foto002Link.addEventListener("click", fotoClick);

foto003Link.addEventListener("click", fotoClick);
