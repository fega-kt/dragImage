
const listItem = document.querySelectorAll(".item");
const image = document.querySelector(".imageDrag");
let beforItem
listItem.forEach(item => {
    item.addEventListener("dragover", (e) => {
        if (!beforItem) return
        e.preventDefault();
        item.classList.add('hovered')
        item.classList.add('card')
    })
    item.addEventListener("drag", (e) => {
        beforItem = item.querySelector(".imageDrag");
        e.preventDefault();

    })
    item.addEventListener("dragleave", (e) => {
        e.preventDefault();
        if (!beforItem) return
        item.classList.remove('hovered')
        item.classList.remove('card')

    })

    item.addEventListener("drop", (e) => {
        if (!beforItem) return
        e.preventDefault();
        item.append(image)
        item.classList.remove('hovered')
        item.classList.remove('card')

    })
});