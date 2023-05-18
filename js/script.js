
const listItem = document.querySelectorAll(".item");
const image = document.querySelector(".imageDrag");
console.log(listItem)
listItem.forEach(item => {
    item.addEventListener("dragover", (e)=>{
        e.preventDefault();
        item.classList.add('hovered')
    })

    item.addEventListener("dragleave", (e)=>{
        e.preventDefault();
        item.classList.remove('hovered')
    })

    item.addEventListener("drop", (e)=>{
        e.preventDefault();
        item.append(image)
        item.classList.remove('hovered')
    })
});