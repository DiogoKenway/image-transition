let time = 3000,
currentImageIndex = 0,
        images = document.querySelectorAll('#slider img'),
maxImages = images.length


function nextImage () {
    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++
    if (currentImageIndex >= maxImages) currentImageIndex = 0

    images[currentImageIndex].classList.add('selected')
}


function start () {
       setInterval(() => {
             nextImage()
       }, time)
}


window.addEventListener('load', start)