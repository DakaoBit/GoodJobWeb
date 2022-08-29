function swalTip(title, text = null) {
    if (text == null) {
        Swal.fire({
            title,
            confirmButtonColor: '#1c1c1c',
        })
    }
    else {
        Swal.fire({
          title,
          text,
          confirmButtonColor: "#1c1c1c",
        });
    }
}

function swalPremium(title, text = null) {
  if (text == null) {
      Swal.fire({
          title,
          confirmButtonColor: '#A8D8B9',
      })
  }
  else {
      Swal.fire({
        title,
        text,
        confirmButtonColor: "#A8D8B9",
      });
  }
}

function swalHtml(options) {
    var { icon, title, html } = options;
    Swal.fire({
      icon: icon,
      title: title,
      html: html,
      confirmButtonColor: "#1c1c1c",
    });
}

function swalConfirm(options, succesMethod) {
    const { title, text } = options
    Swal.fire({
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: "#1c1c1c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result) {
        succesMethod();
      }
    });
}
