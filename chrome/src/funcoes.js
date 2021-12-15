'use strict';

//Função para alterar a aparência de  acordo com a regra do css
function xcss (regra, propriedade, valor){
    var x,i ;
    x = document.querySelectorAll(regra);
     for (i = 0; i < x.length; i++) {
      if (propriedade == 'fontSize'){
         x[i].style.fontSize = valor;
      }
      else if (propriedade == 'background'){
         x[i].style.background = valor;
      }
      else if (propriedade == 'color'){
         x[i].style.color = valor;
      }
      else if (propriedade == 'border'){
         x[i].style.border = valor;
      }
      else if (propriedade == 'borderRadius'){
         x[i].style.borderRadius = valor;
      }
      else if (propriedade == 'borderBottom'){
         x[i].style.borderBottom = valor;
      }
      else if (propriedade == 'borderWidth'){
         x[i].style.borderWidth = valor;
      }
      else if (propriedade == 'padding'){
         x[i].style.padding = valor;
      }
      else if (propriedade == 'paddingLeft'){
         x[i].style.paddingLeft = valor;
      }
      else if (propriedade == 'paddingRight'){
         x[i].style.paddingRight = valor;
      }
      else if (propriedade == 'textAlign'){
         x[i].style.textAlign = valor;
      }
      else if (propriedade == 'minHeight'){
         x[i].style.minHeight = valor;
      }
      else if (propriedade == 'borderLeft'){
         x[i].style.borderLeft = valor;
      }
      else if (propriedade == 'borderRight'){
         x[i].style.borderRight = valor;
      }
      else if (propriedade == 'borderBottom'){
         x[i].style.borderBottom = valor;
      }
      else if (propriedade == 'borderTop'){
         x[i].style.borderTop = valor;
      }
      else if (propriedade == 'display'){
         x[i].style.display = valor;
      }
      else if (propriedade == 'width'){
         x[i].style.width = valor;
      }
      else if (propriedade == 'minWidth'){
         x[i].style.minWidth = valor;
      }
      else if (propriedade == 'height'){
         x[i].style.height = valor;
      }
      else if (propriedade == 'margin'){
         x[i].style.margin = valor;
      }
      else if (propriedade == 'marginTop'){
         x[i].style.marginTop = valor;
      }
      else if (propriedade == 'marginBottom'){
         x[i].style.marginBottom = valor;
      }
      else if (propriedade == 'marginLeft'){
         x[i].style.marginLeft = valor;
      }
      else if (propriedade == 'marginRight'){
         x[i].style.marginRight = valor;
      }
      else if (propriedade == 'boxShadow'){
         x[i].style.boxShadow = valor;
      }
      else if (propriedade == 'textContent'){
         x[i].textContent = valor;
      }
      else if (propriedade == 'position'){
         x[i].style.position = valor;
      }
      else if (propriedade == 'inset'){
         x[i].style.inset = valor;
      }
     }
}


//Função para trocar imagens (source)
function xsrc (regra, antigo, novo){
    var x,i ;
    x = document.querySelectorAll(regra);
     for (i = 0; i < x.length; i++) {
         var endereco = x[i].src;
         if (endereco == antigo){
           x[i].src = novo;
         }
         else if (antigo == 'all'){
           x[i].src = novo;
         }
     }
}


//Função para trocar plano de fundo
function xbackground (regra, antigo, novo){
    var x,i ;
    var urlnova = 'url("' + novo + '")';
    x = document.querySelectorAll(regra);
     for (i = 0; i < x.length; i++) {
         var endereco = x[i].style.background;
         //console.log(endereco);
         if (endereco.search(antigo) >= 0){
           x[i].style.background = urlnova;
         }
         else if (antigo == 'all'){
           x[i].style.background = urlnova;
         }
     }
}


//Escoder texto
function removerTexto (regra, texto){
    var x = document.querySelectorAll(regra);
    for (var i = 0; i < x.length; i++) {
        if (x[i].textContent == texto){
            x[i].style.display = 'none';
        }
    }
}


function substituirTexto (regra, antigo, novo){
    var x = document.querySelectorAll(regra);
    for (var i = 0; i < x.length; i++) {
        if (x[i].textContent == antigo || antigo == 'all'){
            x[i].textContent = novo;
        }
    }
}


function carregarCSS( cssURL ) {
    var link = document.createElement( 'link' );
    link.rel  = 'stylesheet';
    link.href = chrome.runtime.getURL(cssURL);
    document.head.appendChild( link );
}