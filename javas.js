


function preview() {

    let ImportScriptFile =  () => {
        let value =   window.localStorage.setItem('onvlibras',1);
         window.localStorage.setItem('onclick',1);
       
        console.log(value);
    
    window.location.reload(true);
    
      }
      ImportScriptFile();
    }
      function script1() {
     
        let value =   window.localStorage.getItem('onvlibras');
        console.log('valueeeeeeeeeee');
        console.log(value);
        if(value) {
        
          let script = document.createElement('script');
          script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';

          document.head.appendChild(script);
          script.onload = () => {
            script2(true);
          }
       
         
         
        
      }
     
     }
      async function script2(keyRun) {
      if(keyRun) {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
     document.querySelector(".teste").style.display = "none";
     if(  window.localStorage.getItem('onclick')) {

     
    
     var mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
      
       if(mutation.target.className == 'access-button' &&  window.localStorage.getItem('onclick') != 0) {
        document.querySelector(".access-button").click();
        window.localStorage.setItem('onclick',0);
        mutationObserver = null;
       };
        
      });
    });
  mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

     
      }
    }
       }
      
       script1();
       

