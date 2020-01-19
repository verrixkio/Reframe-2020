// const secondBlock = document.getElementById('content2')
// const header = document.getElementsByTagName('header')
// const headerHeight = 61

// function setHeader () {
//   const scrollPoint = window.pageYOffset + headerHeight

//   let blockPoint = 61 - (scrollPoint - secondBlock.offsetTop)
//   if (blockPoint <= 0) { blockPoint = 0 }

//   if (scrollPoint > secondBlock.offsetTop) {
//     header[0].style = `max-height: ${blockPoint}px;`
//   } else {
//     header[0].style = `max-height: ${headerHeight}px;`
//   }
//   window.requestAnimationFrame(setHeader)
// }

// window.requestAnimationFrame(setHeader)