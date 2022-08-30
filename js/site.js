import { print } from './test.js'

document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  document.getElementById("sticky-header").innerHTML = headerTemplate();
  window.onscroll = function () {
    fixedHeader();
  };

  print();
});

export function headerTemplate() {
  var txtHeader = `
        <div class="j_border col p-3 bg_basic btn_basic">
        <a href="/Index.html" class="h2">
            Find Job
        </a>
      </div>
      <div class="j_border col p-3 bg_premium btn_premium">
        <a href="/PostJob.html" class="h2">
            Post Job
        </a>
      </div>
    `;

  return txtHeader;
}


/**
 * 固定Header
 */
export function fixedHeader() {
  // Get the header
  var header = document.getElementById("sticky-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

/**
 * 自製dropdown menu (暫不使用)
 */
  // var btnDropType = document.getElementById("btnDropType");
  // btnDropType.addEventListener("click", function () {
  //   document.getElementById("dropType").classList.toggle("show");
  // });

  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function (event) {
  //   if (!event.target.matches(".j_dropdown_btn")) {
  //     var dropdowns = document.getElementsByClassName("j_dropdown_content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains("show")) {
  //         openDropdown.classList.remove("show");
  //       }
  //     }
  //   }
  // };