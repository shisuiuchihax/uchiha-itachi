let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
nextDom.onclick = function(){
  showSlider('next');
}
prevDom.onclick = function(){
  showSlider('prev');
}
let timeRunning = 2000;
let runTimeOut;
function showSlider(type){
  let SliderItemDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
  if(type === 'next'){
    SliderDom.appendChild(SliderItemDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  }else{
    SliderDom.prepend(SliderItemDom[SliderItemDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
    }, timeRunning);
}