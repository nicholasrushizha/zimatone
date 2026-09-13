
// get ?page= value from URL
const params = new URLSearchParams(window.location.search);
const page = params.get("page");

// show only selected section
if(page){
  document.getElementById(page).style.display = "block";
}

function openLoginpagewhileincopyrights() {
           window.location.href = "logindesign.html";
          }


