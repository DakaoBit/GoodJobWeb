import { httpPost, httpGet } from "../share/http.js";
import { headerTemplate, fixedHeader } from "../site.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("stcky-header").innerHTML = headerTemplate();
  window.onscroll = function () {
    fixedHeader();
  };

  loadJob();
});

/**
 * Load API
 */

var jobData = [
  { Company: "A", JobTitle: "Designer", Day: 65, JobUrl: "1" },
  { Company: "B", JobTitle: "Programer", Day: 65, JobUrl: "2" },
  { Company: "C", JobTitle: "Banker", Day: 65, JobUrl: "3" },
  { Company: "D", JobTitle: "CTO", Day: 65, JobUrl: "4" },
];

function loadJob() {
  // 到時改呼叫api
  // var apiUrl = url + "/jobpost/getCompanyPost";
  // var result = await httpGet(apiUrl, null);
  var divJob = document.getElementById("divJob");
  var jobHtml = "";

  for (var i = 0; i < jobData.length; i++) {
    jobHtml += `<div class="row j_item">
    <div class="j_job_wrap px-5 py-4">
        <div class="j_job">
            <div class="row">
                <div class="col-10 col-md-10 col-sm-10">
                    <h1>${jobData[i].Company}</h1>
                </div>
                <div class="col-2 col-md-2 col-sm-2">
                    <h1>${jobData[i].Day}K</h1>
                </div>
            </div>
            <div class="row">
                <h1><a class="j_jobTitle" target="_blank" href="${jobData[i].JobUrl}">${jobData[i].JobTitle}</a> </h1>
            </div>
        </div>
        <div class="j_wrap">
            <button class="j_btnTag rounded-pill px-4 py-2 mx-1 my-1">#New York</button>
            <button class="j_btnTag rounded-pill px-4 py-2 mx-1 my-1">#New York</button>
            <button class="j_btnTag rounded-pill px-4 py-2 mx-1 my-1">#New York</button>
            <button class="j_btnTag rounded-pill px-4 py-2 mx-1 my-1">#New York</button>
            <button class="j_btnTag rounded-pill px-4 py-2 mx-1 my-1">#New York</button>
            <button class="j_btnTag rounded-pill px-4 py-2 mx-1 my-1">#New York</button>
        </div>
    </div></div>`;
  }

  divJob.innerHTML += jobHtml;
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
