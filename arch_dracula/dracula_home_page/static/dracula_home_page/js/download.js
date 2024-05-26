function downloadFile() {
  function addStyle(value) {
    function ShadowStyle() {
      arch.classList.add("arch_shadow");
      dracula.classList.add("dracula_shadow");
      arch_dracula.classList.add("Archdracula_shadow");
    }
    let element = document.querySelector(".download_button");
    let arch = document.querySelector(".arch");
    let dracula = document.querySelector(".dracula");
    let arch_dracula = document.querySelector(".arch_dracula");
    let block = document.querySelector(".block");
    element.classList.add("download_button_width");
    arch.classList.add("arch_move_anima");
    dracula.classList.add("dracula_move_anima");
    arch_dracula.classList.add("arch_dracula_anima");
    block.classList.add("block_anima");
    function RmStyle() {
      element.classList.remove("download_button_width");
      arch.classList.remove("arch_move_anima");
      dracula.classList.remove("dracula_move_anima");
      arch_dracula.classList.remove("arch_dracula_anima");
      block.classList.remove("block_anima");
      arch.classList.remove("arch_shadow");
      dracula.classList.remove("dracula_shadow");
      arch_dracula.classList.remove("Archdracula_shadow");
    }
    ShadowStyle();
    setTimeout(RmStyle, 2000);
  }

  addStyle();

  let fileUrl = "http://127.0.0.1:8000/static/dracula_home_page/iso/noting.txt";
  let tempLink = document.createElement("a");
  tempLink.setAttribute("href", fileUrl);
  tempLink.setAttribute("download", "app_dock.jpg");

  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
}
