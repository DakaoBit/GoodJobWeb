
document.addEventListener("DOMContentLoaded", function () {
 
  new TomSelect("#jobType", {
    create: false,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });

  new TomSelect("#jobSkill", {
    create: false,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });

  new TomSelect("#jobLevel", {
    create: false,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });
});

function ValidateInput(paremeters) {
  var { mail, companyName, jobTitle, jobLocation, isRemote, link } = paremeters;
  console.log(paremeters);
  //全部顯示的方式
  //   let aletUl = document.createElement("ul");

  //   if (_.isEmpty(mail)) {
  //     let li = document.createElement("li");
  //     let content = document.createTextNode("Email is Required");
  //     li.appendChild(content)
  //     aletUl.appendChild(li);
  //   }

  //   if (!_.isEmpty(aletUl.innerHTML))
  //   {
  //     var obj = {
  //       icon: "warning",
  //       title: "Warning",
  //       html: aletUl,
  //     };
  //     swalHtml(obj);
  //   }

  if (_.isEmpty(mail)) {
    swalTip("Warning", "Email is Required");
    return;
  }
  if (!ValidateEmail(mail)) {
    swalTip("Warning", "Email Format is Required");
    return;
  }
  if (_.isEmpty(companyName)) {
    swalTip("Warning", "Company Name is Required");
    return;
  }
  if (_.isEmpty(jobTitle)) {
    swalTip("Warning", "Job Title is Required");
    return;
  }

  let jobType = GetSelectedOptionValue("jobType");
  if (_.isEmpty(jobType)) {
    swalTip("Warning", "Job Type is Required");
    return;
  }

  let jobSkill = GetSelectedOptionValue("jobSkill");
  if (_.isEmpty(jobSkill)) {
    swalTip("Warning", "Job Skill is Required");
    return;
  }

  let jobLevel = GetSelectedOptionValue("jobLevel");
  if (_.isEmpty(jobLevel)) {
    swalTip("Warning", "Job Level is Required");
    return;
  }
  if (_.isEmpty(jobLocation)) {
    swalTip("Warning", "Job Location is Required");
    return;
  }
  if (_.isEmpty(link)) {
    swalTip("Warning", "Link is Required");
    return;
  }
  if (!ValidateURL(link)) {
    swalTip("Warning", "Link is not an url");
    return;
  }

  return true;
}

async function Submit() {
  var paremeters = GetAllInputValue();

  if (ValidateInput(paremeters) == true) {
  }
}

async function SelectRemote(chk){
  if (chk.checked)
    chk.value = 1;
  else
    chk.value = 0;
}