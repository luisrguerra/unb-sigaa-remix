// ==UserScript==
// @name         SIGAA Remix
// @version      2.0.7
// @description  Redesign do SIGAA UnB
// @author       Luís Eduardo Ribeiro Guerra
// @match        https://sig.unb.br/*
// @grant        none
// @supportURL   https://github.com/luisrguerra/unb-sigaa-remix/
// @updateURL    https://github.com/luisrguerra/unb-sigaa-remix/raw/main/SIGAA%20Remix.user.js
// @downloadURL  https://github.com/luisrguerra/unb-sigaa-remix/raw/main/SIGAA%20Remix.user.js
// ==/UserScript==

/*globals $*/


'use strict';
const versao = '2.0.7';

var ativado = localStorage.getItem("ativado");
var temaAtivado = localStorage.getItem("temaAtivado");

//Cores
var cor1 = '#2f3c52';
var cor2 = '#232f40';
var cor3 = '#141A25';
var cor4 = '#5e697d';
var corFundo1 = "white";
var corTransparente = "rgb(255 255 255 / 0%)";
var corErro = "#ff6023";
var corAtivar = '#379638';

//Cores customizadas, carregar
var cor1Customizado;
if (localStorage.getItem("cor1Customizado") == null) {
    localStorage.setItem('cor1Customizado', cor1);
}
else{
    cor1Customizado = localStorage.getItem("cor1Customizado");
};

var cor2Customizado;
if (localStorage.getItem("cor2Customizado") == null) {
    localStorage.setItem('cor2Customizado', cor2);
}
else{
    cor2Customizado = localStorage.getItem("cor2Customizado");
};

var cor3Customizado;
if (localStorage.getItem("cor3Customizado") == null) {
    localStorage.setItem('cor3Customizado', cor3);
}
else{
    cor3Customizado = localStorage.getItem("cor3Customizado");
};

var cor4Customizado;
if (localStorage.getItem("cor4Customizado") == null) {
    localStorage.setItem('cor4Customizado', cor3);
}
else{
    cor4Customizado = localStorage.getItem("cor4Customizado");
};
//Fim cores customizadas, carregar

//Borda
var corBrancoBorda = "#e0e0e0"
var brancoBorda1 = "1px solid #e0e0e0";
var arrendondamentoBorda1 = "3px";

//Fonte
var tamanhoFonte1 = "1em";
var tamanhoFonte2 = "14px";
var fontePadrao = "Helvetica, sans-serif";
var corFonteClara1 = "#fbfbfb"; //bkp #f0f0f0
var paddingPadrao = "1em";

//Sombras
var sombra1 = 'rgb(0 0 0 / 8%) 0px 6px 6px';
var sombra2 = '0px 3px 5px rgba(0, 0, 0, 0.20)';

//Imagens e icones
const iconeImpressora = chrome.runtime.getURL("img/impressora.svg");
const iconeSenha = chrome.runtime.getURL("img/senha-white.svg");
const iconeMenuDiscente = chrome.runtime.getURL("img/menu-dicente-white.svg");
const iconeChamado = chrome.runtime.getURL("img/chamado-white.svg");
const iconeCaixaPostal = chrome.runtime.getURL("img/caixa-postal-white.svg");
const iconeModulos = chrome.runtime.getURL("img/modulos-white.svg");
const iconeTurmaReservada = chrome.runtime.getURL("img/turma-reservada.svg");
const iconeMatriculaPermitida = chrome.runtime.getURL("img/matricula-permitida.svg");
const iconeMatriculaNegada = chrome.runtime.getURL("img/matricula-negada.svg");
const iconeRelogio = chrome.runtime.getURL("img/relogio-black.svg");
const iconeZoom = chrome.runtime.getURL("img/zoom-black.svg");
const iconeChave = chrome.runtime.getURL("img/chave-black.svg");
const iconeEnsino = chrome.runtime.getURL("img/ensino-white.svg");
const iconePesquisa = chrome.runtime.getURL("img/pesquisa-white.svg");
const iconeExtensao = chrome.runtime.getURL("img/extensao-white.svg");
const iconeBolsas = chrome.runtime.getURL("img/bolsas-white.svg");
const iconeEstagio = chrome.runtime.getURL("img/estagio-white.svg");
const iconeRelacoesInternacionais = chrome.runtime.getURL("img/internacionais-white.svg");
const iconeOutros = chrome.runtime.getURL("img/outros-white.svg");
const iconeSetaDireita = chrome.runtime.getURL("img/seta-direita-black.svg");
const iconeSetaEsquerda = chrome.runtime.getURL("img/seta-esquerda-black.svg");
const iconeAluno = chrome.runtime.getURL("img/aluno-black.svg");
const iconeProfessorFuncionario = chrome.runtime.getURL("img/professor-funcionario-black.svg");
const iconeLogOff = chrome.runtime.getURL("img/logoff-white.svg");
const iconeCheck = chrome.runtime.getURL("img/check-white.svg");
const iconeInfo = chrome.runtime.getURL("img/info-black.svg");
const iconeEncaminharEmail = chrome.runtime.getURL("img/encaminhar-email-black.svg");
const iconeRemoverX = chrome.runtime.getURL("img/remover-x-black.svg");
const iconeEditarEmail = chrome.runtime.getURL("img/editar-email-black.svg");
const iconePainelSetaDireita = chrome.runtime.getURL("img/painel-seta-direita-black.svg");
const iconePainelSetaEsquerda = chrome.runtime.getURL("img/painel-seta-esquerda-black.svg");
const iconePainelSetaCima = chrome.runtime.getURL("img/painel-seta-cima-black.svg");
const iconePainelSetaBaixo = chrome.runtime.getURL("img/painel-seta-baixo-black.svg");
const iconeFoto = chrome.runtime.getURL("img/foto.svg");
const iconeAvaliacaoInstucional = chrome.runtime.getURL("img/avaliacao-institucional.svg");
const iconePower = chrome.runtime.getURL("img/power-white.svg");
const iconeCalculadora = chrome.runtime.getURL("img/calculadora-black.svg");
const iconeGitHub = chrome.runtime.getURL("img/github-black.svg");
const iconeTema = chrome.runtime.getURL("img/tema-black.svg");
const iconePause = chrome.runtime.getURL("img/pause-black.svg");
const iconeTodasNoticias = chrome.runtime.getURL("img/todas-noticias-black.svg");
const iconeProximo = chrome.runtime.getURL("img/proximo-black.svg");
const iconeAnterior = chrome.runtime.getURL("img/anterior-black.svg");
const iconeSetaDropdown = chrome.runtime.getURL("img/seta-dropdown-white.svg"); 
const iconeHomeBlack12 = chrome.runtime.getURL("img/home-black-12.svg");
const iconeImpressoraBlack12 = chrome.runtime.getURL("img/impressora-black-12.svg");
const iconeAulasPaginadas = chrome.runtime.getURL("img/aulas-paginadas-black-12.svg");
const iconeAulasLista = chrome.runtime.getURL("img/aulas-lista-black-12.svg");
const iconeTrocarTurma = chrome.runtime.getURL("img/trocar-turma-black-12.svg");
const iconeOpcoes12 = chrome.runtime.getURL("img/opcoes-black-12.svg");
const iconeTurma16 = chrome.runtime.getURL("img/turma-black-16.svg");
const iconeAlunos16 = chrome.runtime.getURL("img/alunos-black-16.svg");
const iconeMateriais16 = chrome.runtime.getURL("img/materiais-black-16.svg");
const iconeAtividades16 = chrome.runtime.getURL("img/atividades-black-16.svg");
const iconeEstatistica16 = chrome.runtime.getURL("img/estatistica-black-16.svg");
const iconeAjuda16 = chrome.runtime.getURL("img/ajuda-black-16.svg");
const iconeArteTurmaVirtual = chrome.runtime.getURL("img/arte-turma-virtual.svg");

let menuCorRGB = localStorage.getItem("menuCorRGB");

const temas2 = [
  //Nome da cor, cor1, cor2, cor3, cor4, cor erro
  ['Azul', '#2f3c52','#232f40','#141A25','#5e697d',''],
  ['Preto', '#3A3A3A','#2D2D2D','#191919','#686868',''],
  ['Azul +Claro', '#0B406D','#0c385f','#061B30','#587ea2',''],
  ['Matrícula Web', '#004080','#004080','#00172f','#6186b1',''],
  ['Matrícula Web+', '#004080','#004080','#004080','#004080',''],
  ['Ciano', '#0C4651','#07393D','#041F24','#3E737D',''],
  ['Verde', '#48631b','#3c4e12','#192506','#8ba06a',''],
  ['Verde Esmeralda', '#0D5249','#0A4036','#062320','#31786F',''],
  ['Rosa', '#bb2052','#af194a','#8e0b36','#ef6b8c', '#ff9d9d'],
  ['Marrom', '#65292B','#501F22','#2F1313','#874C4D',''],
  ['Vinho', '#801c49','#670d3b','#320C1D','#9c486f',''],
  ['Alto Contraste', '#000000','#000000','#ffffff','#ffffff',''],
  ['Alto Contraste+', '#000000','#000000','#000000','#000000',''],
  ['Tema Customizado', '','','','',''],
];

function tema(cor){
   var achouTema = false;
   for (var contagem = 0; contagem < temas2.length; contagem++) {
        if (cor == temas2[contagem][0]){
            cor1 = temas2[contagem][1];
            cor2 = temas2[contagem][2];
            cor3 = temas2[contagem][3];
            cor4 = temas2[contagem][4];
            if(temas2[contagem][5] != ''){corErro = temas2[contagem][5]};
            achouTema = true;
        };
   };
   if(cor == 'Tema Customizado'){
      cor1 = localStorage.getItem("cor1Customizado");
      cor2 = localStorage.getItem("cor2Customizado");
      cor3 = localStorage.getItem("cor3Customizado");
      cor4 = localStorage.getItem("cor4Customizado");
      achouTema = true;
   }
   if(achouTema == false){
            cor1 = '#2f3c52';
            cor2 = '#232f40';
            cor3 = '#141A25';
            cor4 = '#5e697d';
   }
}

//Ler temas customizados e adicionar a lista de opções
function lerTemas (){
    for (var contagem = 0; contagem < temas2.length; contagem++) {
         var opcao = document.createElement("option");
         opcao.setAttribute("value", temas2[contagem][0]);
         var opcaoTexto = document.createTextNode(temas2[contagem][0]);
         opcao.appendChild(opcaoTexto);
         document.getElementById("temaSeletor").appendChild(opcao);
     };
};
//Fim Temas

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

//Aplicar as mudanças na página
function executar (){
  function mudancasBasicias(){
    //Mudar fonte
    document.body.style.fontFamily = fontePadrao;
    //Remoção do fundo
    xcss('html.background, body.background','background','white');
    ///remover espaço lateral do plano de fundo
    xcss('#container','width','auto');
    //Esconder rodapé
    xcss('#rodape','display','none');
    //Corrigir o bug
    xcss('#container','minWidth','70em');
 }
 function mudancasBarraDeCima(){
    var mudancasBarraDeCimaCss = document.createElement('style');
    mudancasBarraDeCimaCss.innerHTML = `
    /* remover a barra lateral do lado do título do sigaa */
    #info-sistema h1 span{
      border-width: 0px !important;
    }
    /* Melhorar padding de ensino,pesquisa,extensão,... */
    #menu-dropdown {
      background: #EFEBDE;
      padding: 0px;
      /*padding: 1px 0px 1px 0px;*/
    }

    /* Melhorias na área de módulos */
    /* Melhoria no texto dos módulos*/
    #menu_principal .tooltip, #menu_principal ul li a, #menu_principal ul li a:hover{
       color: black;
       font-size: 14px;
    }
    /* Melhoria no fundo dos módulos*/
    #menu_principal ul li.off{
       background-color: white;
    }
    #menu_principal ul li.off a{
       background: none;
       background-color: #f1f1f1 !important;
       border-radius: 2px;
    }
    /* Itens com fundo azul */
    #menu_principal ul li{
       border-radius: 2px;
       background-color: #edf0f7;
    }
    #menu_principal li a{
       background: none;
       background-color: #C4D2EB;
       border-radius: 2px;
    }
    /* Fundo azul da janela para branco */
    .ydlg .ydlg-dlg-body{
       background: none;
       background-color: white;
    }
    /* Remover borda desnecessária da janela de módulos*/
    #menu_principal.popup{
       border: none;
    }
    /* Mudar borda da janela de módulos*/
    .ydlg .ydlg-dlg-body{
       border: 1px solid #bfbfbf;
       border-radius: 0px 0px 3px 3px;
    }
    /* remover sombra tosca da janela de módulos */
    .ydlg-shadow{
       display:none !important;
    }
    /* Nova sombra janela modulos */
    #painel-modulos{
       box-shadow: rgb(0 0 0 / 8%) 6px 6px 12px;
    }
    /* Correção do tamanho da barra de cima */
    #painel-usuario{
       min-height: 56px;
    }

    /* Esconder ajuste de tamanho de letra  */
    a.fonteMaior{
       display: none;
    }
    a.fonteMenor{
       display: none;
    }

    /* Melhorar o Portal discente> todas as turmas ... e outros */
    #conteudo h2{
       background: none;
       border: none;
    }

    /* Melhorar Tamanho da letra */
    #info-sistema h3{
       font-size: 18.72px !important;
    }
    /* Nome do usuário */
    #painel-usuario #info-usuario p{
       font-size: 16px !important;
    }
    #info-sistema h1 span{
       font-size: 18.72px !important;
    }
    #tempoSessao small em, #tempoSessao small span{
       font-size: 13.28px !important;
    }
    #painel-usuario #menu-usuario li a{
       font-size: 14px !important;
    }
    #info-sistema a , #sair-sistema a{
       font-size: 18.72px !important;
    }

    /* Mudar estilo da fonte para o padrão em "Acessar turma virtual"*/
    .infoAltRem{
       font-variant: inherit !important;
    }

    /* remover icone de erro feio */
    #painel-erros ul.erros{
        background: none;
    }
    `;
    document.head.appendChild(mudancasBarraDeCimaCss);

    //Escurecer sistema de gestão...
    xcss('#info-sistema','background',cor1);
    xcss('#info-sistema','color',corFonteClara1);
    xcss('#info-sistema','borderBottom',"1px solid" + cor3);

    //Mudar o fundo dá área do nome, departamento, semestre da barra de cima
    xcss('#painel-usuario','background',cor1);
    xcss('#painel-usuario','color',corFonteClara1);
    xcss('#painel-usuario','borderBottom',"1px solid" + cor3);


    //Mudar cores do fundo do menu com os botões modulos , menu discente...
    xcss('#painel-usuario #menu-usuario','background',cor1);
    xcss('#painel-usuario #menu-usuario','color',corFonteClara1);

    //Mudar botões modulos, caixa postal, discente, senha....
    xcss('#painel-usuario #menu-usuario li a','background',cor1); //Remover icones
    xcss('#painel-usuario #menu-usuario li a','color',corFonteClara1);
    xcss('#painel-usuario #menu-usuario li a','textAlign',"center");
    xcss('#painel-usuario #menu-usuario li a','padding',"2px 0px 2px 0px");
    xcss('#painel-usuario #menu-usuario li a','border',"1px solid " +cor4);
    xcss('#painel-usuario #menu-usuario li a','borderRadius',arrendondamentoBorda1);
    xcss('#painel-usuario #menu-usuario li a','marginTop','auto');

    //Mudar cor do botão sair
    xcss('#info-sistema span.sair-sistema a','color',corFonteClara1);
    var botaoSair = document.querySelector('#info-sistema span.sair-sistema a');
    if (botaoSair != null){ botaoSair.insertAdjacentHTML('beforeEnd', '&nbsp;<img src="' + iconeLogOff + '" width="19px" height="19px">'); };

    //Mudar a cor das bordas de cada item na barra que diz portal público, Ajuda, Tempo de sessão....
    xcss('#info-sistema span.acessibilidade','border','solid ' + cor3);
    xcss('#info-sistema span.acessibilidade','borderWidth','0 1px 0 0');

    //Inserir icones nos botões modulos, caixa postal...
    //Modulos
    var botaoModulos2 = document.querySelector('#painel-usuario #menu-usuario li.modulos a');
    if (botaoModulos2 != null){ botaoModulos2.insertAdjacentHTML('afterbegin', '<img src="' + iconeModulos + '" width="12px" height="12px">&nbsp;'); }
    //Caixa Postal
    var botaoPostal2 = document.querySelector('#painel-usuario #menu-usuario li.caixa-postal a');
    if (botaoPostal2 != null){ botaoPostal2.insertAdjacentHTML('afterbegin', '<img src="' + iconeCaixaPostal + '" width="12px" height="12px">&nbsp;'); }
    //Chamado
    var botaoChamado2 = document.querySelector('#painel-usuario #menu-usuario li.chamado a');
    if (botaoChamado2 != null){ botaoChamado2.insertAdjacentHTML('afterbegin', '<img src="' + iconeChamado + '" width="12px" height="12px">&nbsp;'); }
    //Menu discente
    var botaoDiscente2 = document.querySelector('#painel-usuario #menu-usuario li.menus a');
    if (botaoDiscente2 != null){ botaoDiscente2.insertAdjacentHTML('afterbegin', '<img src="' + iconeMenuDiscente + '" width="12px" height="12px">&nbsp;'); }
    //Alterar senha
    var botaoSenha2 = document.querySelector('#painel-usuario #menu-usuario li.dados-pessoais a');
    if (botaoSenha2 != null){ botaoSenha2.insertAdjacentHTML('afterbegin', '<img src="' + iconeSenha + '" width="12px" height="12px">&nbsp;'); }

    //Adicionar sombra
    xcss('#painel-usuario',"boxShadow", sombra1);

    //Mudar fundo avisso de erro
    xcss('#painel-erros','background',cor1);
    xcss('#painel-erros','borderBottom',"1px solid" + cor3);
    xcss('#painel-erros','color',corFonteClara1);
    xcss('#painel-erros a','color',corFonteClara1);
    xcss('#painel-erros ul.info','background','none'); //Esconder icone de informação
    xcss('#painel-erros ul.warning','background','none'); //Esconder icone de alerta
    xcss('#painel-erros ul.warning li','color','#ffeb3b'); //Mudar do aviso de alerta
    xcss('#painel-erros ul','padding','0'); //Remover o padding desnecessário
    xcss('#painel-erros ul.erros li','color',corErro); //Letra vermelha do aviso de erro

    substituirTexto('#info-sistema h1 span','UnB - SIGAA -','SIGAA Remix');
    removerTexto ('#info-sistema h3', 'Sistema Integrado de Gestão de Atividades Acadêmicas');

 }
 //Fim mudanças barra de cima

 function mudancasTurma(){

   var turmaCss = document.createElement('style');
   turmaCss.innerHTML = `
     /* Remover fundo azul */
     body {
       background: white;
       /* Melhorar o redimiensionamento da página evitando textos quebrados */
       min-width: 800px;
     }
     /* Remover fundo azul */
     #baseLayout > #cabecalho,
     #baseLayout > .ui-layout-resizer {
       background: none;
     }
    /* remover borda azul */
    .ui-layout-pane {
      border: 1px solid #e0e0e0;
    }
    /* Botão troca de turma */
    button.ui-button{
      border: 1px solid #e0e0e0;
      background: white;
      color: inherit;
    }
    button.ui-button:hover{
      background-color: #f5f5f5;
    }
    /* Menu lateral */
    .rich-panelbar {
      background: #f5f5f5;
      border: 1px solid #e0e0e0;
    }
    .rich-stglpanel {
      border-color: #e0e0e0;
    }
    /* Menu lateral correção tamanho das letras */
    .rich-panelbar-header, .rich-panelbar-header-act {
      font-size: 1em;
      font-weight: inherit;
    }
    /* Remover borda infeior azul nos itens do menu*/
    div.itemMenuHeaderTurma{
       border-bottom: 1px solid #CCCCCC;
    }
    #toggleDireita , .itemMenuHeaderAlunos, .itemMenuHeaderMateriais, .itemMenuHeaderAtividades, .itemMenuHeaderRelatorios, .itemMenuHeaderAjuda{
       border-bottom: 1px solid #e0e0e0;
    }
    /* Ajeitar texto cortado no menu lateral*/
    .itemMenu{
       height: min-content;
       text-indent: inherit;
    }
    /* correção do tamanho do texto no botão trocar de turma */
    .ui-widget{
      font-size: 14px;
    }
    /* Remover fundo com imagem e ajeitar borda do menu lateral, Andamento das Aulas, Notícias, Enquetes, ... */
    .headerBloco{
      background: white;
      border: none;
      border-bottom: 1px solid #e0e0e0;
    }
    /* esconder departamento do aluno */
    #painelDadosUsuario > div {
       display: none;
    }
    /* centralizar nome do aluno e ajeitar o padding */
    #painelDadosUsuario > p{
      padding-top: 3px;
      padding-right: 4px;
    }
    /*Adicionar borda arrendodada e melhorar margem da janela de atenção */
    #scroll-wrapper > #painel-erros {
      border-radius: 4px;
      margin-bottom: 0.5em;
      border-bottom: none !important;
    }
    /* Melhorar a posição do botão de remover a janela de atenção */
    #scroll-wrapper > #painel-erros > #fechar-painel-erros {
      right: 8px !important;
      bottom: 5px !important;
    }
    /* ajeitar tamanho e posição do texto da barra de cima portal público, ajuda?, sair */
    #info-sistema div.dir{
      top: 0px;
    }
    /* corrigir bug da margem do conteúdo */
    div #conteudo {
      width: auto !important;
    }
    /* melhoria do tamanho da letra no menu da direita */
    .rich-stglpanel-body {
      font-size: 14px;
    }
    .headerBloco{
      font-size: 14px;
    }
    #barraEsquerda > table > tbody > tr > td {
      font-size: 14px !important;
      /* Mudar a cor do texto de azul para preto */
      color: #212121 !important;
    }
    /* mudanças no aviso amarelo */
    div.descricaoOperacao {
      background: white;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
    }
    /* Melhoria tamanho da letra em dados do progrma */
    #relatorio-rodape table tr td {
      font-size: 1em;
    }
    /* mudanças no aviso cinza sobre a turma virtual */
    div.intro-aval div.textos {
      background: white !important;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
    }
    /* Mudança no ícone de seta para esquerda */
    .botaoDireita {
      background: white url("` + iconePainelSetaEsquerda + `") no-repeat 5px 5px !important;
    }
    /* Mudar borda azul (elemento visual) que aparece do lado de titulos */
    fieldset {
      border-top: 1px solid #e0e0e0;
    }
    /* Mudar tamanho e cor dos titulos azuis */
    fieldset legend {
      color: #212121;
      font-size: 1em;
      font-variant: inherit;
    }
    /* Mudar cor do texto vermelho */
    p.empty-listing {
      color: #212121;
      font-weight: inherit;
    }
    /* Trocar a cor do Turma Virtual! de azul para preto  */
    div.intro-aval h4 {
      color: #212121 !important;
    }
    /* Trocar a cor do Ampliando os horizontes... de azul para preto  */
    div.intro-aval h5 {
      color: #212121 !important;
    }
    /* Alterar a barra de progresso da carga horária da turma */
    .progress {
      background-image: none !important;
      background-color: #f5f5f5;
    }
    .progress-bar {
      background-color: #e2e2e2 !important;
      box-shadow: none !important;
      color: black !important;
    }
    /* Imagem turma virtual */
    div.intro-aval {
      background: white url(` + iconeArteTurmaVirtual + `) no-repeat left top !important;
    }
    /* Alterar o ícone de impressora */
    .botaoImprimir {
      background-image: url("` + iconeImpressoraBlack12 + `") !important;
      background-position: center !important;
    }
    /*  Alterar o ícone de casa/home  */
    .botaoPortal {
      background-image: url("` + iconeHomeBlack12 + `") !important;
      background-position: center !important;
    }
    /* Mudar ícone de ajuda do menu da esquerda */
    .itemMenuHeaderAjuda {
      background-image: url("` + iconeAjuda16 + `");
    }
    /* Mudar ícone de estastistica */
    .itemMenuHeaderRelatorios {
      background-image: url("` + iconeEstatistica16 + `");
    }
    /* Mudar ícone de cadeira */
    .itemMenuHeaderTurma {
      background-image: url("` + iconeTurma16 + `");
    }
    /* Mudar ícone Materias/Livro*/
    .itemMenuHeaderMateriais {
      background-image: url("` + iconeMateriais16 + `");
    }
    /* ícone atividades */
    .itemMenuHeaderAtividades {
      background-image: url("` + iconeAtividades16 + `");
    }
    /* ícone alunos */
    .itemMenuHeaderAlunos {
      background-image: url("` + iconeAlunos16 + `");
    }
    /*ícone opções turmas */
    .botaoOpcoesTurma {
      background-image: url("` + iconeOpcoes12 + `") !important;
      background-position: center !important;
    }
    /* Mudar ícone Aula paginadas (setas)  */
    .botaoAulasPaginadas {
      background-image: url("` + iconeAulasPaginadas + `") !important;
      background-position: center !important;
    }
    /* Mudar ícone Aula em lista (setas verticais)  */
    .botaoAulasEmLista {
      background-image: url("` + iconeAulasLista + `") !important;
      background-position: center !important;
    }
    /* Mudar ícone trocar de turma (seta ondulada) */
    .botaoTrocarTurma{
      background-image: url("` + iconeTrocarTurma + `") !important;
      background-position: center !important;
    }

    /* Mudar as bordas de cada item na barra que diz portal público, Ajuda, Tempo de sessão.... */
    #info-sistema span{
      border-width: 0px !important;
    }
    #info-sistema a{
      border-width: 0 0 0 0 !important;
    }
    #info-sistema #sair-sistema{
      border-width: 0 0 0 0 !important;
    }

    /* Remover borda azul */
    #barraEsquerda table{
      border: none !important;
    }

   `;
   document.head.appendChild(turmaCss);

   //remover fundo da barra da interface "menu turma virtual" e o do lado direito
   xbackground("div > table > tbody > tr > td",'painel_bg.png','');

   //Mudar a cor do texto amarelo da barra de cima
   xcss('#info-sistema a','color',corFonteClara1);
   xcss('#tempoSessao','color',corFonteClara1);

   //Remover fundo e ajeitar borda do menu lateral retraido
   xcss('.botaoDireita','border','1px solid #e0e0e0');

   // Melhoria na borda lateral do nome
   xcss('#painelDadosUsuario','borderRight', '1px solid #e0e0e0');

   //Adicionar sombra na barra de cima
   xcss('#info-sistema',"boxShadow", sombra1);

   //Corrigir tamanho do nome do aluno
   xcss('#painelDadosUsuario > p','fontSize', tamanhoFonte1);

   //Mudar o ícone de seta para a direita
   xsrc("img","https://sig.unb.br/sigaa/ava/img/painel_seta_dir.png",iconePainelSetaDireita);

   //Mudar o ícone de seta para a cima
   xsrc("img","https://sig.unb.br/sigaa/ava/img/painel_seta_cima.png",iconePainelSetaBaixo);

   //Mudar o ícone da sra para baixo
   xsrc("img","https://sig.unb.br/sigaa/ava/img/painel_seta_baixo.png",iconePainelSetaCima);

 };

 function corrigirFonte(){
   document.body.style.fontSize = tamanhoFonte1;
 }
 function mudarScrollBar(){
   var scrollCss = document.createElement('style');
   scrollCss.innerHTML = `
      /* width */
      ::-webkit-scrollbar {
         width: 10px;
         height: 12px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #00000014;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
         background: #00000026;
         border-radius: 8px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
         background: #00000078;
      }

   `;
   document.head.appendChild(scrollCss);
 }

 //Se o sigaa remix estiver ativado
 if (ativado != "false"){
  tema(temaAtivado);

  mudarScrollBar();

  //Mudar o ícone de interroção dos horários para um ícone de relógio
  xsrc('img','https://sig.unb.br/shared/img/geral/ajuda.gif',iconeInfo);

  //Mudar icone de Matricula negada
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_negada.png',iconeMatriculaNegada);
  //Mudar icone de Matricula permitida
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_permitida.png',iconeMatriculaPermitida);

  //Mudar icone zoom matricula
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/zoom.png', iconeZoom);

  //Mudar icone chave
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_tem_reservas.png',iconeChave);

  //Mudar icone de restrição reserva matrizes curriculares especificas
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/restricao_reserva.png',iconeTurmaReservada);

  //Mudar icone de seta para direita
  xsrc('img','https://sig.unb.br/sigaa/img/avancar.gif',iconeSetaDireita);

  //Mudar icone impressora
  xsrc('img','https://sig.unb.br/shared/javascript/ext-1.1/docs/resources/print.gif', iconeImpressora);

  //Mudar ícone de encaminhar email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/email_go.png', iconeEncaminharEmail);

  //Mudar ícone de Remover X
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/cross.gif', iconeRemoverX);

  //Mudar ícone de Responder Email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/email_edit.gif', iconeEditarEmail);

  //Mudar o ícone seta para esquerda
  xcss('tr > td.voltar > a','background', 'url(' + iconeSetaEsquerda + ') no-repeat');

  const urlAtual = window.location.href;
  //Endereços de páginas
  // || urlAtual == ''
  const enderecosPaginaInicial = urlAtual == 'https://sig.unb.br/sigaa/portais/discente/discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/discente.jsf#';
  const enderecosIndicesAcademicos = urlAtual == 'https://sig.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf#';
  const enderecosTurmasAnteriores = urlAtual == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf#';
  const enderecosCaixaPostal = urlAtual == 'https://sig.unb.br/cxpostal/ver_mensagem.jsf#' || urlAtual == 'https://sig.unb.br/cxpostal/ver_mensagem.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/caixa_postal.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/caixa_postal.jsf#';
  const enderecosLogin = urlAtual == 'https://sig.unb.br/sigaa/verTelaLogin.do' || urlAtual == 'https://sig.unb.br/sigaa/logar.do?dispatch=logOff' || urlAtual == 'https://sig.unb.br/sipac/?modo=classico' || urlAtual == 'https://sig.unb.br/sigrh/login.jsf' || urlAtual == 'https://sig.unb.br/admin/login.jsf' || urlAtual == 'https://sig.unb.br/sipac/';
  const enderecosAtualizarDadosPessoais = urlAtual == 'https://sig.unb.br/sigaa/graduacao/discente/dados_discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/discente/dados_discente.jsf#';
  const enderecosMatricula = urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/turmas_curriculo.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/turmas_curriculo.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/turmas_equivalentes_curriculo.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/turmas_equivalentes_curriculo.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/turmas_selecionadas.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/turmas_selecionadas.jsf#';
  const enderecosImprimirComprovante = urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/comprovante_solicitacoes.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/comprovante_solicitacoes.jsf#';
  const enderecosAreaMudarFoto = urlAtual == 'https://sig.unb.br/sigaa/portais/discente/perfil.jsf' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/perfil.jsf#';
  const enderecosTurmasSelecionadas = urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/instrucoes/instrucoes_regular.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/instrucoes/instrucoes_regular.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/resumo_solicitacoes.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/matricula/resumo_solicitacoes.jsf' ;
  const enderecosAvisoCovid = urlAtual == 'https://sig.unb.br/sigaa/telaAvisoLogon.jsf' || urlAtual == 'https://sig.unb.br/sigaa/telaAvisoLogon.jsf#';
  const enderecosPlanoMatricula = urlAtual == 'https://sig.unb.br/sigaa/geral/componente_curricular/busca_geral.jsf' || urlAtual == 'https://sig.unb.br/sigaa/geral/componente_curricular/busca_geral.jsf#';
  const enderecosTurmaVirtual = urlAtual == 'https://sig.unb.br/sigaa/ava/index.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/index.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/PerfilUsuarioAva/form.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/PerfilUsuarioAva/form.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/participantes.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/participantes.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/FrequenciaAluno/mapa.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/FrequenciaAluno/mapa.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/NoticiaTurma/listar.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/NoticiaTurma/listar.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/ConteudoTurma/listar.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/ConteudoTurma/listar.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/ForumTurma/lista.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/ForumTurma/lista.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/GrupoDiscentes/ver_grupo.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/GrupoDiscentes/ver_grupo.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/IndicacaoReferencia/listar.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/IndicacaoReferencia/listar.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/Relatorios/timeline.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/Relatorios/timeline.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/estatisticas.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/estatisticas.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/Enquete/listar.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/Enquete/listar.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/VideoTurma/listar_discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/VideoTurma/listar_discente.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/DataAvaliacao/listar.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/DataAvaliacao/listar.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/TarefaTurma/listar.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/TarefaTurma/listar.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/ArquivoTurma/listar_discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/ArquivoTurma/listar_discente.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/ava/QuestionarioTurma/listarDiscente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/ava/QuestionarioTurma/listarDiscente.jsf#' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf#';
  //Fim endereços de páginas

  //Página inicial
  if (enderecosPaginaInicial){
    mudancasBasicias();
    mudancasBarraDeCima();
    mudancasTurma();
    corrigirFonte();

    //Corrigir o ícone de relógio errado, com o ícone de informação
    xsrc('img',iconeInfo,iconeRelogio);
    
    var inicialCss = document.createElement('style');
    inicialCss.innerHTML = `
    /* Mudar as letras que estavam forçadas em maiusculo */
    #main-docente .simple-panel h4 {
      font-variant: inherit !important;
    }
    /* Tirar o não há atividades cadastradas.. do itálico */
    #main-docente .simple-panel p.vazio {
      font-style: inherit !important;
    }

    /*Corrigir cor do texto cinza */

    /*Dados instucionais*/
    #perfil-docente #agenda-docente h4{
       color: black !important;
    }
    /* tag td */
    #perfil-docente #agenda-docente td{
       color: black !important;
    }

    /* Esconder forum inutil */
    #forum-portal{
       display:none;
    }

    /* Esconder comunidade inutil */
    #participantes{
       display:none;
    }


    /* Corrigir bug em ensino, pesquisa, ... ao passar o mouse enquanto carrega */
    .ThemeOfficeMainItem{
        background-color: unset;
        color: white;
    }
    .ThemeOfficeMainItemHover{
        background-color: unset;
        color: white;
    }

    `;
    document.head.appendChild(inicialCss);

    //Mudança da borda de cima do ver turmas anteriores
    xcss('#portal-docente .mais','borderTop', '0.5px solid #eeeeee');

    //Mudar Fundo da área de dados pessoais
    xcss('#perfil-docente #agenda-docente','border', brancoBorda1);
    xcss('#perfil-docente #agenda-docente','borderRadius', arrendondamentoBorda1);

    //Corrigir tamanho letra em Detalhar
    xcss('tbody tr td form a','fontSize', tamanhoFonte1);

    //Mudar cor do fundo de minhas matérias para branco
    xcss('#avaliacao-portal','background', corTransparente);
    xcss('#avaliacao-portal','border', brancoBorda1);
    xcss('#avaliacao-portal','borderRadius', arrendondamentoBorda1);

    //perfil-docente
    xcss('#perfil-docente','background', corTransparente);
    xcss('#perfil-docente','border', brancoBorda1);
    xcss('#perfil-docente','borderRadius', arrendondamentoBorda1);
    //Melhorar a margem da área de perfil docente
    xcss('#perfil-docente','marginTop', '8px');

    //Mudar cor do fundo de notícias para branco
    xcss('#noticias-portal','background', corTransparente);
    //Adicionar borda ao notícias
    xcss('#noticias-portal','border', brancoBorda1);
    xcss('#noticias-portal','borderRadius','arrendondamentoBorda1');
    //Melhorar margem da área de notícias
    xcss('#noticias-portal','marginTop','8px');

    //Evitar bug de redimensionamento
    xcss('#container','minWidth','68em');
    //Ocultar plano de fundo
    //xcss('#container','height','100vh');

    //correção do tamanho do texto em atualizações da turma
    xcss('#atualizacoes-turma','fontSize',tamanhoFonte2);

    //Remoção do fundo na barra de semestre, 2020.1
    xcss(/*regra:*/'#main-docente table td',/*propriedade:*/'background',/*valor:*/corTransparente);

    // Mudar cor do fundo da disciplina na lista de componente curricular, que funciona como uma colorida, uma não para melhor visualizar
    xcss('#main-docente tr.odd','background','#f5f5f5'); //cor cinza de contraste

    // Mudar fundo da tag TH que é usada em uma barra
    xcss('#main-docente thead th','background',corTransparente);

    //// Mudar tamanho da fonte da tag TH que é usada em uma barra
    xcss('#main-docente thead th','fontSize',tamanhoFonte2);

    //Mudar borda da tag TH que usada é em uma barra
    xcss('#main-docente thead th','borderBottom',brancoBorda1);

    //Correção do tamanho da tag P de paragrafo
    xcss(/*regra:*/'p',/*propriedade:*/'fontSize',/*valor:*/tamanhoFonte1);

    //Correção tamanho de letras em Turmas do Semestre e Minhas Atividades
    xcss('#main-docente .simple-panel h4','fontSize',tamanhoFonte1);

    //Melhoria no padding de aviso de vazio
    xcss('#main-docente .simple-panel p.vazio','padding','10px');

    //Mudar a area da foto, mensagens, atualizar foto e perfil...
    xcss('.pessoal-docente','background',corTransparente);
    xcss('.pessoal-docente','border',brancoBorda1);
    xcss('.pessoal-docente','borderRadius',arrendondamentoBorda1);
    xcss('.pessoal-docente','margin','8px');

    ///muda fundo da aréa ensino,extensão,bolsas,..
    xcss('#menu-dropdown','background',cor2);
    xcss('#menu-dropdown','borderBottom',"1px solid" + cor3);
    //Adicionar sombra a aba de cima
    xcss('#menu-dropdown',"boxShadow", sombra1);
    xcss('#painel-usuario',"boxShadow", sombra1);

    ////ensino, cadastro, bolsas..... mudar cor e adicionar bordas
    xcss('.ThemeOfficeMainItem','background',cor2);
    xcss('.ThemeOfficeMainItem','color',corFonteClara1);
    xcss('.ThemeOfficeMainItem','textAlign',"center");
    //xcss('.ThemeOfficeMainItem','borderLeft',"2px solid" + cor3);
    //xcss('.ThemeOfficeMainItem','borderRight',"2px solid" + cor3);
    xcss('.ThemeOfficeMainItem','borderBottom',"5px solid" + cor2);
    xcss('.ThemeOfficeMainItem','borderTop',"5px solid" + cor2);
    xcss('.ThemeOfficeMainItem','paddingLeft','15px');
    xcss('.ThemeOfficeMainItem','paddingRight','15px');

    //ensino, cadastro, bolsas..... icones
    //xcss('.ThemeOfficeMainFolderLeft','display','none'); //remover
    //Mudar icones
    //Ensino
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/icones/ensino_menu.gif', iconeEnsino);
    //Pesquisa
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/icones/pesquisa_menu.gif', iconePesquisa);
    //Extensão
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/icones/extensao_menu.gif', iconeExtensao);
    //Bolsas
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/bolsas.png', iconeBolsas);
    //Estagio
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/estagio/estagio_menu.png', iconeEstagio);
    //Relações Internacionais
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/relacoes_internacionais/mobilidade.png', iconeRelacoesInternacionais);
    //Outros
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/menu/outros.png', iconeOutros);

    //Remover icones estranhos do menu
    xcss('td.ThemeOfficeMenuItemLeft img','display','none');
    xcss('td.ThemeOfficeMenuFolderLeft img','display','none');


    //menu
    xcss('.ThemeOfficeMenuItem','background',cor1);
    xcss('.ThemeOfficeMenuItem','color',corFonteClara1);
    xcss('.ThemeOfficeSubMenu','border','1px solid' + cor3);
    xcss('.ThemeOfficeMenuItem .ThemeOfficeMenuFolderLeft, .ThemeOfficeMenuItem .ThemeOfficeMenuItemLeft','background',cor2);
    xcss('.ThemeOfficeMenuSplit','borderTop','1px solid' + cor3);

    //Remover o fundo de avaliação institucional e da área de dados pessoais
    xcss('#perfil-docente #agenda-docente','background',corTransparente);
    //Melhorar margem de avaliação institucional e da área de dados pessoais
    xcss('#perfil-docente #agenda-docente','margin','8px');

    //Mudar cor do fundo da área de texto da atualizações de turma para transparente
    xcss('.subFormulario','background',corTransparente);

    //Mudar cor do fundo da área de turmas para branco e adicionar borda
    xcss('#main-docente .simple-panel','background',corTransparente);
    xcss('#main-docente .simple-panel','border',brancoBorda1);
    xcss('#main-docente .simple-panel','borderRadius',arrendondamentoBorda1);

    //Adicionar sombra no menu de dropdown
    xcss('.ThemeOfficeSubMenu',"boxShadow", sombra1);

    //Mudar o icone de avalição institucional
    xsrc('input, textarea, select,input#agenda','https://sig.unb.br/sigaa/img/avaliacao.jpg',iconeAvaliacaoInstucional);
    xcss('#agenda-docente input','width','168px');

    //Mudar foto
    xsrc('.foto, img','https://sig.unb.br/sigaa/img/no_picture.png',iconeFoto);
    xcss('.foto','margin','10px');
    xcss('.foto img','borderRadius', '4px');

    //Mudar seta menu
    //Bug por conta da url
    xsrc('.ThemeOfficeMenuFolderRight img','all', iconeSetaDropdown);

    //Mudar botões noticias
    //Esquerda
    xsrc('#controls img','https://sig.unb.br/shared/img/flash_volta.gif',iconeAnterior);
    //Pause
    xsrc('#controls img','https://sig.unb.br/shared/img/flash_pause.gif', iconePause);
    //Direita
    xsrc('#controls img','https://sig.unb.br/shared/img/flash_vai.gif', iconeProximo);
    //Todas
    xsrc('#controls img','https://sig.unb.br/shared/img/vermais8.jpg', iconeTodasNoticias);

    //Remover imagem de telefone antigo inutil
    xsrc('img','https://sig.unb.br/sigaa/img/celular.jpg','');
    //Aumentar a area ocupada na horizontal do relatório de notas do aluno
    xcss('#relatorio-paisagem-container',"width", '90%');
    xcss('#relatorio-paisagem-container',"minWidth", '60em');

    //Corrreção do tamanho da letra em consultar minhas notas
    xcss('#relatorio-rodape table tr td','fontSize',tamanhoFonte1);

    //Mudar as bordas
    xcss('#relatorio-rodape','border',brancoBorda1);
    xcss('#relatorio-rodape','borderRadius',arrendondamentoBorda1);
    xcss('#relatorio-cabecalho','border',brancoBorda1);
    xcss('#relatorio-cabecalho','borderRadius',arrendondamentoBorda1);

    //console.log(window.location.href);

    //Correção de bug nos botões no menu da turma virtual
    xcss('.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default','height','auto');
    xcss('.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default','fontSize','14px');

    //Mudar o texto portal do discente
    removerTexto ('div > a:link', 'Portal do Discente');

    //Remover texto de links quebrados
    removerTexto ('p > a:link', `
					Calendário Acadêmico de Graduação
					`);
    removerTexto ('p > a:link', `
				Regulamento dos Cursos de Graduação
				`);

  }
  //Consultar indices acadêmicos
  else if (enderecosIndicesAcademicos){
    //Mudar fonte
    document.body.style.fontFamily = fontePadrao;
    //Mudar tamanho da fonte para o tamanho normal
    document.body.style.fontSize = tamanhoFonte1;

    //Remoção do fundo
    xcss('html.background, body.background','background','white');
    //Aumento da ocupação da página na horizontal
    xcss('#relatorio-container','width','70%');
    xcss('#relatorio-container','minWidth','50em');

    //Mudar tamanho da letra rodapé
    xcss('#relatorio-rodape table tr td','fontSize',tamanhoFonte1);

    //Mudar as bordas
    xcss('#relatorio-rodape','border',brancoBorda1);
    xcss('#relatorio-rodape','borderRadius',arrendondamentoBorda1);
    xcss('#relatorio-cabecalho','border',brancoBorda1);
    xcss('#relatorio-cabecalho','borderRadius',arrendondamentoBorda1);

  }
  //Área de turmas anteriores
  else if (enderecosTurmasAnteriores){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();
    mudancasTurma();

    xcss('#container','minWidth','60em');

    //Melhorar o acessar turma virtual
    xcss('.infoAltRem','background', corTransparente);
    xcss('.infoAltRem','border', 'none');


    //Melhorar tamanho da letra
    xcss('table.listagem, table.subListagem','fontSize',tamanhoFonte2);
    xcss('div.infoAltRem','fontSize','18px');
    //Melhorar a margem
    xcss('table.listagem, table.subListagem','width','90%');

    //Mudar 'todas as turmas virtuais'
    xcss('table.listagem caption','background',cor1);
    xcss('table.listagem caption','borderRadius',arrendondamentoBorda1);

    //Mudar barras
    xcss('table thead, table tr.linhaCinza','background','white');
    xcss('table.listagem tr td.periodo','background','#bdbdbd');
    xcss('.linhaPar','background','white');
    xcss('.linhaImpar','background','#ececec');
    xcss('table.listagem > tfoot, table.listagem > tfoot td','background',cor1);
    xcss('table.listagem > tfoot, table.listagem > tfoot td','borderRadius',arrendondamentoBorda1);

    //Remover Portal do dicente/Turma Virtual de baixo
    removerTexto ('div> a:link', 'Portal do Discente');
    removerTexto ('div> a:link', 'Turma Virtual');
    //Removerborda
    xcss('table.listagem, table.subListagem','border',"none");

  }
  //Área de Matrícula
  else if (enderecosMatricula){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();
    xcss('label','fontSize', '16px');
  }
  //Correção de Página genéricas
  else if (enderecosTurmasSelecionadas || enderecosAvisoCovid || enderecosAtualizarDadosPessoais || enderecosPlanoMatricula){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();

  }
  // àrea de mensagens
  else if (enderecosCaixaPostal){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();

    var caixaPostalCss = document.createElement('style');
    caixaPostalCss.innerHTML = `
    /* Mudanças no título caixa postal */
    #form > h2 {
     background: white;
     border-bottom: none;
     font-variant: inherit;
     padding: inherit;
     color: black;
    }
    /* Melhorar a margem da caixa de mensagens */
    #form {
     margin: 1em 1em !important;
    }

    /* área caixa de entrada, caisa de saída, lixeira */
    #pastas{
       background: white !important;
       border: none !important;
    }
    #pastas ul li.marcarMsg{
       background: white !important;
    }

    /* Remover fundo azul */
    #mensagens table caption{
       background: white !important;
    }
    .rich-table-subheader{
       background: white;
    }

    /* Remover borda */
    #mensagens{
       border: none !important;
    }

    /* Corrigir tamanho letra */
    .rich-table-subheadercell{
       font-size: inherit;
    }
    .rich-table-cell{
       font-size: inherit !important;
    }

    /* mudar o estilos da fonte do títlo caixa de entrada */
    #mensagens table caption{
       font-variant: inherit !important;
       padding: 1em 0 !important;
    }

    /* mudar cor da borda todos, assuntos, Remetente*/
    #mensagens table thead{
       border-bottom: 1px solid #C0C0C0 !important;
    }

    /* Mudar caixa de mensagem */
    .lerMsg{
       border: 1px solid rgb(224, 224, 224) !important;
    }
    .lerMsg thead{
       background: white !important;
    }
    table .opcoesMensagem{
       background: white !important;
    }

    /* Título caixa de mensagem */
    .lerMsg caption{
       color: black !important;
       background: white !important;
       font-variant: inherit !important;
    }

    `;
    document.head.appendChild(caixaPostalCss);

    //Substituir nome SIGAA por SIGAA Remix
    substituirTexto('#info-sistema h1','all','SIGAA Remix');
  }
  //Correção de Página genéricas
  else if (enderecosTurmaVirtual){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();
    mudancasTurma();
  }
  //Área imprimir comprovante
  else if (enderecosImprimirComprovante){
    mudancasBasicias();
    corrigirFonte();
    xcss('td','fontSize', '14px');
  }
  //Área de Mudar foto
  else if (enderecosAreaMudarFoto){
    mudancasBasicias();
    mudancasBarraDeCima();
    corrigirFonte();
    //Mudar foto
    xsrc('.fotoPerfil, img','https://sig.unb.br/sigaa/img/no_picture.png',iconeFoto);
  }
  //Tela de login
  else if (enderecosLogin){
   mudancasBasicias();
   mudancasBarraDeCima();
   corrigirFonte();
   xcss('.logon h3','background', '#C8D5EC');
   //aluno
   xsrc('img','https://sig.unb.br/sigaa/img/user.png', iconeAluno);
   //professor funcionário
   xsrc('img','https://sig.unb.br/sigaa/img/novo_usuario.gif',iconeProfessorFuncionario);
   xsrc('img','https://sig.unb.br/sipac/img_css/novo_usuario.gif',iconeProfessorFuncionario);
   xsrc('img','https://sig.unb.br/shared/img/novo_usuario.gif',iconeProfessorFuncionario);

   //Remover fundo azul de aviso
   xcss('#conteudo div','background', 'white');

   xcss('.logon h3','background', '#eeeeee');
   xcss('.logon h3','border', 'none');

   var loginCss = document.createElement('style');
   loginCss.innerHTML = `
   .logon table{
       border: none;
   }
   td.azulMedio{
       background-color: white;
   }
   td.painel{
       background-color: #f5f5f5;
       border-radius: 4px;
   }
   td.sistemaAtual{
       background-color: #e0e0e0;
       border-radius: 4px;
   };
   `;
   document.head.appendChild(loginCss);
  }
 }


 //Parte de baixo

 var body = document.getElementsByTagName("body")[0];

 var divBotoesCor = document.createElement("div");
 divBotoesCor.setAttribute("id", "idBotoesCor");
 divBotoesCor.style.display = 'none';
 divBotoesCor.style.alignItems = 'center';
 divBotoesCor.style.justifyContent = 'center';
 divBotoesCor.style.marginLeft = 'auto';
 divBotoesCor.style.marginRight = 'auto';
 divBotoesCor.style.marginTop = 'none';
 divBotoesCor.style.marginBottom = 'none';
 divBotoesCor.style.maxWidth = '100em';
 divBotoesCor.style.flexWrap = 'wrap';
 body.appendChild(divBotoesCor);

 var divBotoes = document.createElement("div");
 divBotoes.setAttribute("id", "idBotoes");
 divBotoes.style.display = 'flex';
 divBotoes.style.alignItems = 'center';
 divBotoes.style.justifyContent = 'center';
 divBotoes.style.marginLeft = 'auto';
 divBotoes.style.marginRight = 'auto';
 divBotoes.style.marginTop = '1em';
 divBotoes.style.marginBottom = '0.5em';
 divBotoes.style.maxWidth = '89em';
 divBotoes.style.flexWrap = 'wrap';
 body.appendChild(divBotoes);


 var botaoCss = document.createElement('style');
 botaoCss.innerHTML = `
 .botaoTema {
    background-color: #fafafa;
    background-repeat: no-repeat;
    padding: 0.5em;
    min-width: fit-content;
    max-height: 34px;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    border: none;
    border-radius: 4px;
    display: flex;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.20);
    border-top: 1px solid #ffffff38;
 }
 .botaoTema:hover {
    background-color: #f5f5f5;
 };
 `;
 document.head.appendChild(botaoCss);

 //Botão de ativar e desativar
 // Criar botão
 var buttonPower = document.createElement("button");
 buttonPower.setAttribute("class", "botaoTema");
 if (ativado == 'false'){
     buttonPower.innerHTML = "Ativar SIGAA Remix Versão " + versao;
     buttonPower.style.backgroundColor = corAtivar;
 }
 else{
     buttonPower.innerHTML = "Desativar SIGAA Remix Versão " + versao;
     buttonPower.style.backgroundColor = '#c62828';
 }
 buttonPower.style.color = 'white';
 buttonPower.style.paddingLeft = '2em';
 buttonPower.style.backgroundImage = 'url(' + iconePower + ')';
 buttonPower.style.backgroundPosition = '2% 50%';

 // Inserir Botão
 document.getElementById("idBotoes").appendChild(buttonPower);

 buttonPower.addEventListener ("click", function() {
   if (ativado == 'false'){
       localStorage.setItem("ativado", 'true');
       alert("SIGAA Remix Ativado");
   }
   else{
       localStorage.setItem("ativado", 'false');
       alert("SIGAA Remix Desativado");
   }
   document.location.reload(true);
 });
 //Fim botão de ativar e desativar

  //Botão do github
  var buttonGithub = document.createElement("button");
  buttonGithub.setAttribute("class", "botaoTema");
  buttonGithub.innerHTML = 'Informações sobre o SIGAA Remix';
  buttonGithub.style.paddingLeft = '2em';
  buttonGithub.style.backgroundImage = 'url("' + iconeGitHub + '")';
  buttonGithub.style.backgroundPosition = '1% 50%';
  buttonGithub.onclick = function(){
    alert("Será aberta uma nova janela na página do Github do projeto, lá você pode checar se há novas atualizações (É importante fazer isso!), ler tutoriais, relatar bugs e ver o código fonte.\r\n\r\nSIGAA Remix desenvolvido por Luís Guerra");
    window.open("https://github.com/luisrguerra/unb-sigaa-remix");
  };
  document.getElementById("idBotoes").appendChild(buttonGithub);

  //Botão da calculadora
  var buttonCalculadora = document.createElement("button");
  buttonCalculadora.setAttribute("class", "botaoTema");
  buttonCalculadora.innerHTML = 'Calculadora de Horários';
  buttonCalculadora.style.paddingLeft = '2em';
  buttonCalculadora.style.backgroundImage = 'url("' + iconeCalculadora + '")';
  buttonCalculadora.style.backgroundPosition = '3% 50%';
  buttonCalculadora.onclick = function(){
    window.open("https://luisrguerra.github.io/calculadora-horarios-sigaa-unb-html/");
  };
  document.getElementById("idBotoes").appendChild(buttonCalculadora);

  //Seletor de tema
  var temaSeletor = document.createElement("select");
  temaSeletor.setAttribute("id", "temaSeletor");
  temaSeletor.setAttribute("class", "botaoTema");
  temaSeletor.setAttribute("onchange", `

  const temaSelecionado = document.getElementById('temaSeletor').value;
  localStorage.setItem('temaAtivado', temaSelecionado);

  if(temaSelecionado == 'Tema Customizado'){ localStorage.setItem('menuCorRGB', 'true'); }
  else{ localStorage.setItem('menuCorRGB', 'false'); };

  document.location.reload(true);
  window.scrollTo(0, 0);

  `);

  var temaSeletorCss = document.createElement('style');
  temaSeletorCss.innerHTML = `
  #temaSeletor {
    width: 13em;
    min-width: 13em;
    appearence: none;
    -webkit-appearance: none;
    background-image: url("` + iconeTema + `");
    background-position: 3% 50%;
  };
  `;
  document.head.appendChild(temaSeletorCss);

  document.getElementById("idBotoes").appendChild(temaSeletor);

  var opcaoTitulo = document.createElement("option");
  opcaoTitulo.setAttribute("value", "none");
  var opcaoTituloTexto = document.createTextNode("\u00A0\u00A0\u00A0\u00A0 Selecionar um tema \u00A0\u00A0\u00A0\u00A0");
  opcaoTitulo.appendChild(opcaoTituloTexto);
  document.getElementById("temaSeletor").appendChild(opcaoTitulo);
  lerTemas ();

  //Botões de customização de cores

  var temaBotaoCorCss = document.createElement('style');
  temaBotaoCorCss.innerHTML = `
  .temaBotaoCor {
     border: none;
     width: 30px;
     height: 32px;
     cursor: pointer;
     margin-left: 4px;
     margin-right: 4px;
     background-color: transparent;
     border-radius: 100%;
  }
  .temaBotaoCor::-webkit-color-swatch{
     border-radius: 100%;
     border: none;
     box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.20);
  };
  `;
  document.head.appendChild(temaBotaoCorCss);

  var botaoCor1 = document.createElement("INPUT");
  botaoCor1.setAttribute("type", "color");
  botaoCor1.setAttribute("class", "temaBotaoCor");
  botaoCor1.setAttribute("id", "botaoCor1");
  botaoCor1.setAttribute("value", cor1Customizado);
  divBotoesCor.appendChild(botaoCor1);

  var botaoCor2 = document.createElement("INPUT");
  botaoCor2.setAttribute("type", "color");
  botaoCor2.setAttribute("class", "temaBotaoCor");
  botaoCor2.setAttribute("id", "botaoCor2");
  botaoCor2.setAttribute("value", cor2Customizado);
  divBotoesCor.appendChild(botaoCor2);

  var botaoCor3 = document.createElement("INPUT");
  botaoCor3.setAttribute("type", "color");
  botaoCor3.setAttribute("class", "temaBotaoCor");
  botaoCor3.setAttribute("id", "botaoCor3");
  botaoCor3.setAttribute("value", cor3Customizado);
  divBotoesCor.appendChild(botaoCor3);

  var botaoCor4 = document.createElement("INPUT");
  botaoCor4.setAttribute("type", "color");
  botaoCor4.setAttribute("class", "temaBotaoCor");
  botaoCor4.setAttribute("id", "botaoCor4");
  botaoCor4.setAttribute("value", cor4Customizado);
  divBotoesCor.appendChild(botaoCor4);

  var temabotaoCorAplicarCss = document.createElement('style');
  temabotaoCorAplicarCss.innerHTML = `
  #botaoCorAplicar {
     border: none;
     width: 24px;
     height: 24px;
     cursor: pointer;
     margin-inline: 4px;
     box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.20);
     border-radius: 100%;
     cursor: pointer;
  };
  `;
  document.head.appendChild(temabotaoCorAplicarCss);

  var botaoCorAplicar = document.createElement("IMG");
  botaoCorAplicar.setAttribute("id", "botaoCorAplicar");
  botaoCorAplicar.style.backgroundColor = corAtivar;

  if (menuCorRGB == 'true'){divBotoesCor.style.display = "flex";}
  else{divBotoesCor.style.display = "none";};

  botaoCorAplicar.src = iconeCheck;
  botaoCorAplicar.setAttribute("onclick", `

       let cor1Customizado = document.getElementById("botaoCor1").value;
       let cor2Customizado = document.getElementById("botaoCor2").value;
       let cor3Customizado = document.getElementById("botaoCor3").value;
       let cor4Customizado = document.getElementById("botaoCor4").value;

       localStorage.setItem('cor1Customizado', cor1Customizado);
       localStorage.setItem('cor2Customizado', cor2Customizado);
       localStorage.setItem('cor3Customizado', cor3Customizado);
       localStorage.setItem('cor4Customizado', cor4Customizado);

       localStorage.setItem('menuCorRGB', 'false');

       document.location.reload(true);
       window.scrollTo(0, 0);

  `);
  divBotoesCor.appendChild(botaoCorAplicar);

  //Fim de botões de customização de cores

  //Esconder botões na impressão
  var impressaoCss = document.createElement('style');
  impressaoCss.innerHTML = `
  @media print{
   #idBotoes{
       visibility: hidden;
   }
  }
  `;
  document.head.appendChild(impressaoCss);

};

//Executar tema
executar ();