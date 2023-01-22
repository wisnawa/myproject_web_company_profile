const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 600,
  duration: 600,
  interval: 3000,
});

const parallax = document.querySelector(".parallax");
M.Parallax.init(parallax);

const materialBox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialBox, {
  inDuration: 600,
  outDuration: 300,
});

const datePicker = document.querySelector(".datepicker");
M.Datepicker.init(datePicker);

// untuk memberi jarak pada croll bar
const scrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollSpy, {
  scrollOffset: 50,
});

// const h5Node = document.getElementsByTagName("h5");
// const h5Jumlah = h5Node.length;
// for (let i = 0; i < h5Jumlah; i++) {
//   h5Node[i].setAttribute("class", "indigo-text text-lighten-1");
// }
