// var menuButton = document.querySelector('.menu-button');
//     var openMenu = function () {
//       swiper.slidePrev();
//     };
//     var swiper = new Swiper('.swiper', {
//       slidesPerView: 'auto',
//       initialSlide: 1,
//       resistanceRatio: 0,
//       slideToClickedSlide: true,
//       on: {
//         slideChangeTransitionStart: function () {
//           var slider = this;
//           if (slider.activeIndex === 0) {
//             menuButton.classList.add('cross');
//             // required because of slideToClickedSlide
//             menuButton.removeEventListener('click', openMenu, true);
//           } else {
//             menuButton.classList.remove('cross');
//           }
//         },
//         slideChangeTransitionEnd: function () {
//           var slider = this;
//           if (slider.activeIndex === 1) {
//             menuButton.addEventListener('click', openMenu, true);
//           }
//         },
//       },
//     });

// Q1
// let a="dog"
// console.log(a.split(""));


// let b='The quick brown fox'
// let c='aeiouAEIOU'
// let a=0;
// for(let e of b){
//     if (!(e.includes(c))){
//     console.log('error');
//     }
//     else{
//         a++
//     }
// }

// console.log(a);
// arr=[1,2,3,4]
// arr[arr.length] = 5
// console.log(arr);
var num=10
function sum()
{
console.log(num+num);
}

