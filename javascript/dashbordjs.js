 (function(){
  /*
      const toggle = document.getElementById('menuToggle');
      const panel = document.getElementById('menuPanel');
      const hambeg = document.getElementById("hambeg");
      const closeicon = document.getElementById("picspan");
      

      const searchbar = document.getElementById("search-box")

      const titlesheader = document.getElementById("titlesheader")
      const categorybar = document.getElementById("categorybar")
      const SholarHeader = document.getElementById("SholarHeader")
      */
     


/*THIS IS THE TEST SECOND MENU */
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("open");
});








/*
      
      let open = false;

      function update() {
        panel.style.display = open ? 'block' : 'none';
        toggle.setAttribute('aria-expanded', String(open));

          if (open == true) {
          toggle.style.width = '100%';
          closeicon.style.display = "inline-block";
          hambeg.style.display = "none";
          toggle.style.padding = "16px 18px";
          toggle.style.margin = "0px";
          searchbar.style.display = "none";
          titlesheader.style.display = "none";
          categorybar.style.display = "none";
          SholarHeader.style.display = 'none';
          
         
          

          } else {
          toggle.style.width = '15%';
          hambeg.style.display = "inline-block"
          toggle.style.padding = ""
          closeicon.style.display = "none"
          toggle.style.margin = "auto"
          searchbar.style.display = ""
          titlesheader.style.display = ""
          categorybar.style.display = ""
          SholarHeader.style.display = ''
          
          }

        }
      



      // Initialize as collapsed  tested no use
      panel.style.display = 'none';
      toggle.addEventListener('click', () => {
        open = !open;
        update();
      });
*/
         

    
/*
      // Optional: close panel if user resizes to larger screens
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          // Keep panel visible on larger viewports if desired
          panel.style.display = 'block';
          toggle.setAttribute('aria-expanded', 'true');
          open = true;
        } else {
          panel.style.display = 'none';
          toggle.setAttribute('aria-expanded', 'false');
          open = false;
        }
      });
      */
    })();


     function openLoginpage() {
                window.location.href = "logindesign.html";
                }
                function openPdfpage() {
                window.location.href = "pdflocation.html";
                }
                function openZimsecpage() {
                window.location.href = "dashbord.html";
                }
                function OpenFullFundedMainPage() {
                window.location.href = "../index.html";
                }
            


function go(page){
  window.location.href = "../scholarships/allcopyrightspage.html?page=" + page;
}
function viewallscholaralert(){
  
}

function toggleDropdown(){
    const dropdown = document.getElementById("dropdownContent");

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}







































