function getid(id) {
  return document.getElementById(id);
}

// declaration
const propic_btn = getid("propic_btn");
const profile_details_dropdown = getid("profile_details_dropdown");
const select_all_checkbox = getid("select-all-checkbox");
const reject_top_btn = getid("reject_top_btn");
const all_checkbox_set = document.querySelectorAll('.select_all_checkbox');

// functions
propic_btn.addEventListener("click",propic_btn_fun)
reject_top_btn.addEventListener("click",reject_top_btn_fun)
profile_details_dropdown.addEventListener("blur", blur_fun )
select_all_checkbox.addEventListener("click",select_all_fun)


function edit_dash_submit_button_fun(e) {
  e.preventDefault();
  // dash_container.style.overflow = "none";
  // dashboard_modal_container.style.display = "none";
  // body.style.overflow = "hidden";
  // dashboard_modal_container.style.display = "none";
}
function dashboard_modal_cancel_fun(e) {
  e.preventDefault();
  dash_container.style.overflow = "none";
  dashboard_modal_container.style.display = "none";
  // body.style.overflow = "hidden";
  // dashboard_modal_container.style.display = "none";
}

function reject_top_btn_fun(e) {
  e.preventDefault();
    const all_checkbox = document.querySelectorAll('.select_all_checkbox:checked');
    all_checkbox.forEach((item, i) => {
      console.log(item.getAttribute("data-uid"));
    });

    console.log(all_checkbox);
}

function blur_fun() {
  console.log(2323);
profile_details_dropdown.style.display = "none";
}
function propic_btn_fun(e) {
  e.preventDefault();
  profile_details_dropdown.style.display = "block";
  profile_details_dropdown.focus()
}

function select_all_fun(e) {
  const all_checkbox = document.querySelectorAll('.select_all_checkbox');
  if (e.target.checked) {
    all_checkbox.forEach((item, i) => {
      item.checked = true
    });
  } else{
    all_checkbox.forEach((item, i) => {
      item.checked = false;
    });
  }
}

// select_all_fun_set
