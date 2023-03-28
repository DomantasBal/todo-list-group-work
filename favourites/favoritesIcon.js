let counterFavIcon = 0;
function facIconChange(icon) {
  counterFavIcon++;
  counterFavIcon % 2 == 1 ? iconFilled(icon) : iconEmpty(icon);
}

function iconFilled(icon) {
  let favEd = document.createElement("i");
  favEd.classList.add("fa-solid", "fa-heart", "favorite-icon");
  favEd.setAttribute("onclick", "facIconChange(this)");
  icon.replaceWith(favEd);
}

function iconEmpty(icon) {
  let favEd = document.createElement("i");
  favEd.classList.add("fa-regular", "fa-heart", "favorite-icon");
  favEd.setAttribute("onclick", "facIconChange(this)");
  icon.replaceWith(favEd);
}
