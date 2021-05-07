btnRdv.onclick = () => (overlay.style.display = "flex");

overlay.onclick = e => {
  if (e.target.id === "overlay" || e.target.id === "btnClose") {
    popup.classList.replace("zoom", "dezoom");

    setTimeout(() => {
      overlay.style.display = "none";
      popup.classList.replace("dezoom", "zoom");
    }, 700);
  }
};
