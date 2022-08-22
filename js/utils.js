document.addEventListener("DOMContentLoaded", function () {
  // When the user scrolls the page, execute fixedHeader
  window.onscroll = function () {
    fixedHeader();
  };
});

  /**
   * 固定Header
   */
  function fixedHeader() {
    // Get the header
    var header = document.getElementById("stcky-header");

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
  var btnDropType = document.getElementById("btnDropType");
  btnDropType.addEventListener("click", function () {
    document.getElementById("dropType").classList.toggle("show");
  });

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".j_dropdown_btn")) {
      var dropdowns = document.getElementsByClassName("j_dropdown_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };