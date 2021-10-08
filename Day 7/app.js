let img = document.querySelectorAll('img');

function coordinates(elem){
  let coord = elem.getBoundingClientRect();
// coord.top = (coordinates of top of element w.r.t. document origin) - (coordinates of top of window w.r.t. document origin)
// coord.bottom = (coords of bottom of elem w.r.t. document origin) - (coords of top of window w.r.t. origin)
  console.log('Top and bottom of 1st image', coord.top, coord.bottom);
}

function isVisible(elem){
  let coord = elem.getBoundingClientRect();
  let height = document.documentElement.clientHeight;

  // top edge of image is visible in window
  let imageTopEdgeVisible = coord.top > 0 && coord.top < height;
  // bottom edge of image is visible in window
  let imageBottomEdgeVisible = coord.bottom > 0 && coord.bottom < height;

  return imageTopEdgeVisible || imageBottomEdgeVisible;
}

function runCheck(){
    for(let elem of img){
        if(elem.dataset.src && isVisible(elem)){
            elem.src = elem.dataset.src;
            elem.dataset.src = '';
        }
    }
}

function onScrollDocument(){
    coordinates(img[0]);
    setTimeout(runCheck, 2000) // load images on scrolling if they are visible
}

setTimeout(runCheck, 2000); // to check images that are visible onLoad
document.addEventListener('scroll', ()=>{
    onScrollDocument()
})

