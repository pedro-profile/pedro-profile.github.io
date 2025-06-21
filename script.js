///* Responsive Navigation Menu Bar + dark mode - START - https://codepen.io/a7rarpress/pen/poxzgeq */




/*--- Linux CLI | START ---*/ 
import {Termino} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/Termino.js@v1.0.2/dist/termino.min.js';





function focusTermInput(){
  document.querySelector(".termino-input").focus();
}
document.querySelector(".termino-input").focus();

/// Handle clicks on page
document.querySelector("#terminal").addEventListener("click", (event) => {
focusTermInput()
});




 let YOUR_CUSTOM_SETTINGS = {
      allow_scroll: false, // disable scroll up & down on terminal 
      prompt: "$", // custom prompt
      command_key: 13, // custom command key
      terminal_killed_placeholder: "CUSTOM DISABLED PLACEHOLDER", // custom terminal input placeholder when kill. 
      terminal_output: ".termino-console", // custom output query selector
      terminal_input: ".termino-input", // custom input query selector
      disable_terminal_input: false // disable any user commands / inputs. --- Useful for making terminal animations etc! 
    }

        let term= Termino(document.getElementById("terminal"), null, YOUR_CUSTOM_SETTINGS)
        term.echo("Hello world from https://github.com/MarketingPipeline")
       term.echo("This was made by Jared Van Valkengoed.")
        
/// To handle older IOS devices - await needs to be inside async - fun tip! 



 !async function () {
         // Fake loading for fun
    term.echo("Loading.. ")
      
      // delay for 2 seconds
      await term.delay(2000)
        
      term.echo(`Loaded!`)  
       }();

async function runBasicInput(){
          // await input
      let input = await term.input("")  
      
      // display a input for fun!
      if(input){
        term.output(`<div style="margin-bottom:20px">'${input}' is not recognized as an internal or external command,
operable program or batch file.</div>`)
      }
        
}

 runBasicInput()
/*--- Linux CLI | END ---*/


/*--- WORK | START ---*/ 


/* Crane Animation - START */ 

/* Crane Animation - END */ 



/*--- WORK | END ---*/


/*--- REPOS | START ---*/

// Change color of char '|' only - Start
var title = document.getElementById('title');
var str = document.getElementById('title').firstChild.nodeValue.replace(/ /g,'<space>');
title.removeChild(title.firstChild);
str = str.split('<space>');
for( var i = 0 ; i < str.length ; ++i ) {
 var newNode = document.createElement('span');
 var newText = document.createTextNode(str[i]);
 newNode.appendChild(newText);
 title.appendChild(newText)
 if(i!=str.length-1) {
  var SpaceSpan = document.createElement('span');
  SpaceSpan.className = 'space';
  SpaceSpan.appendChild(document.createTextNode(' '));
  title.appendChild(SpaceSpan);
 }
}
// Change color of char '|' only - End

/*--- REPOS | END ---*/