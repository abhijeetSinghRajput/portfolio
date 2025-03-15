const light = document.querySelector(".light");
const offsetX = Math.floor(light.clientWidth / 2);
const offsetY = Math.floor(light.clientHeight / 2);

document.addEventListener("mousemove", (e) => {
    light.style.top = e.clientY - offsetY + "px";
    light.style.left = e.clientX - offsetX + "px";
});