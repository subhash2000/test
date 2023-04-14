window.addEventListener('message', event => {
  var iframe = document.getElementById("zeba-iframe");
  iframe.style.left = "inherit";
  iframe.style.top ="inherit";
  if(event.data === "zeba-expanded"){
      if(chunky_check_mobile()){
          iframe.style.height = "100%";
          iframe.style.width ="100%";
          iframe.style.left = "0";
          iframe.style.top ="0";
          iframe.style.right = "0";
          iframe.contentWindow.postMessage("zeba-mobile-optimize", '*');
          return true;
      }
      iframe.contentWindow.postMessage("zeba-desktop-optimize", '*');
      iframe.style.height = "550px";
      iframe.style.width ="420px";
  }
  if(event.data === "zeba-minimized"){
      iframe.style.height = "120px";
      iframe.style.width ="350px";
  }
  if(event.data === "zeba-disabled"){
      iframe.style.height = "0px";
      iframe.style.width ="0px";
  }
  return;
});

function load_custom_zeba(uuid){
  document.body.innerHTML += '<iframe id="zeba-iframe" src="http://bruke.in/chatbot?cid='+uuid+'" style="z-index:9999999999999999999;width: 100%;height: 120px;position: fixed;bottom: 0;right: 0;width: 350px;border: none;max-width:100vw;max-height:100vh;"></iframe>';
}
function chunky_check_mobile(){
  var screenWidth = window.screen.width;
  if(screenWidth < 600){
      return true;
  }
  return false;
}
const cid = document.getElementById('zeba-script-custom-bot').getAttribute('data-cid');
load_custom_zeba(cid);

