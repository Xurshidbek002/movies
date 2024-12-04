let activBtn = document.querySelectorAll(".list__item-icon");
activBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    activBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

let swipper = document.getElementById("swipperContainer");

movies.forEach((item) => {
  swipper.innerHTML += `
  <swiper-slide>
                <div
                  class="corusel-img"
                  style="
                    background-image: url(${item.rasm});
                    width: 420px;
                    height: 230px;
                    border-radius: 14px;
                    background-size: cover;
                   
                  "
                >
                  <div class="corusel-text">
                    <ul class="text-list">
                      <li class="text-item">${item.yil}</li>
                      <li class="text-item">${item.davlat}</li>
                      <li class="text-item">${item.janr}</li>
                    </ul>
                    <h4 class="corusel-title">${item.nomi}</h4>
                  </div>
                  <i class="corusel-book fa-regular fa-bookmark"></i>
                </div>
              </swiper-slide>
  `;
});

let recommended = document.getElementById("rec");

function displayMovies(movis) {
  movies.forEach((funk) => {
    recommended.innerHTML += `
    <div class="recommended-card">
              <img src="${funk.rasm}" alt="${funk.nomi}" class="recommended-img" />
              <div class="recommended-desc">
                <ul class="desc-list">
                  <li class="desc-item">${funk.yil}</li>
                  <li class="desc-item">${funk.davlat}</li>
                  <li class="desc-item">${funk.janr}</li>
                </ul>
                <h4 class="recommended-title">${funk.nomi}</h4>
              </div>
            </div>
    `;
  });
}
displayMovies(movies);

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function (e) {
  recommended.innerHTML = "";
  let searchText = e.target.toLowerCase();
  let updateMovis = movies.filter((item) =>
    item?.nomi.toLowerCase().includes(searchText)
  );
  displayMovies(updateMovis);
});
