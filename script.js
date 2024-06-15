let titlelinks = document.getElementsByClassName("title_2_links");
let titlecontents = document.getElementsByClassName("title_contents");

function opentab(titlename) {
  for (let titlelink of titlelinks) {
    titlelink.classList.remove("active_link");
  }
  for (let titlecontent of titlecontents) {
    titlecontent.classList.remove("active_1");
  }
  -event.currentTarget.classList.add("active_link");
  document.getElementById(titlename).classList.add("active_1");
}
