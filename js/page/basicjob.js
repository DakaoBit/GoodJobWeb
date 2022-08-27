function ValidateInput(paremeters) {
  var {
    mail,
    companyName,
    jobTitle,
    jobType,
    jobSkill,
    jobLevel,
    jobLocation,
    isRemote,
    link,
  } = paremeters;
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
  if (_.isEmpty(jobType)) {
    swalTip("Warning", "Job Type is Required");
    return;
  }
  if (_.isEmpty(jobSkill)) {
    swalTip("Warning", "Job Skill is Required");
    return;
  }
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

  return true;
}

async function Submit() {
  var paremeters = GetAllInputValue();

  if (ValidateInput(paremeters) == true) {
  }
}
