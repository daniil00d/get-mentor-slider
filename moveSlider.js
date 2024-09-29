function moveSlider(num) {
    sliderImages.querySelector('.active').classList.remove('active')
    sliderImages.querySelector('.n' + num).classList.add('active')
}