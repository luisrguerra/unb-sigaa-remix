// ==UserScript==
// @name         SIGAA Remix
// @version      0.4
// @description  Redesign do SIGAA UnB
// @author       Luís Eduardo Ribeiro Guerra
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match        https://sig.unb.br/*
// @grant        none
// @supportURL   https://github.com/luisrguerra/unb-sigaa-remix-tampermonkey/
// @updateURL    https://github.com/luisrguerra/unb-sigaa-remix-tampermonkey/raw/main/SIGAA%20Remix.user.js
// @downloadURL  https://github.com/luisrguerra/unb-sigaa-remix-tampermonkey/raw/main/SIGAA%20Remix.user.js
// ==/UserScript==

/*globals $*/

'use strict';

var ativado = localStorage.getItem("ativado");

//Cores
var cor1 = '#2f3c52'; //cor escura //bkp #535353 //bk2 #232D3F
var cor2 = '#232f40'; //cor escura //bkp #424242 //bkp2 #1C2532
var cor3 = '#141A25'; //cor escura //bkp #383838
var cor4 = '#5e697d'; //cor escura botão //bkp #747474
var corFundo1 = "white";
var corTransparente = "rgb(255 255 255 / 0%)";

//Borda
var brancoBorda1 = "1px solid #e0e0e0";
var arrendondamentoBorda1 = "2px";

//Fonte
var tamanhoFonte1 = "1em";
var tamanhoFonte2 = "14px";
var fontePadrao = "Helvetica, sans-serif";
var corFonteClara1 = "#fbfbfb"; //bkp #f0f0f0
var paddingPadrao = "1em";

//Sombras
var sombra1 = 'rgb(0 0 0 / 30%) 0px 1px 4px';
var sombra2 = '0px 3px 5px rgba(0, 0, 0, 0.20)';

//Imagens e icones
var iconeImpressora = 'https://svgshare.com/i/Y4o.svg';
var iconeSenha = 'https://svgshare.com/i/XzL.svg';
var iconeMenuDiscente = 'https://svgshare.com/i/XzX.svg';
var iconeChamado = 'https://svgshare.com/i/Xyh.svg';
var iconeCaixaPostal = 'https://svgshare.com/i/Xz0.svg';
var iconeModulos = 'https://svgshare.com/i/Xyi.svg';

//Função para alterar a aparência de  acordo com a regra do cssw
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

$(document).ready(function(){
 if (ativado != "false"){


  //Mudar o ícone de interroção dos horários para um ícone de relógio
  xsrc('img','https://sig.unb.br/shared/img/geral/ajuda.gif','https://svgshare.com/i/Y3e.svg');

  //Mudar icone de Matricula negada
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_negada.png','https://svgshare.com/i/Y49.svg');
  //Mudar icone de Matricula permitida
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_permitida.png','https://svgshare.com/i/Y4t.svg');

  //Mudar icone zoom matricula
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/zoom.png','https://svgshare.com/i/Y3h.svg');

  //Mudar icone chave
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_tem_reservas.png','https://svgshare.com/i/Y2n.svg');

  //Mudar icone de restrição reserva matrizes curriculares especificas
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/restricao_reserva.png','https://svgshare.com/i/Y4i.svg');

  //Página inicial
  if (window.location.href == 'https://sig.unb.br/sigaa/portais/discente/discente.jsf' || window.location.href == 'https://sig.unb.br/sigaa/portais/discente/discente.jsf#'){


    //Mudar fonte
    document.body.style.fontFamily = fontePadrao;
    //Mudar tamanho da fonte para o tamanho normal
    document.body.style.fontSize = tamanhoFonte1;


    //Mudança daborda de cima do ver turmas anteriores
    xcss('#portal-docente .mais','borderTop', '0.5px solid #e0e0e0');

    //Mudar Fundo da área de dados pessoais
    xcss('#perfil-docente #agenda-docente','border', brancoBorda1);
    xcss('#perfil-docente #agenda-docente','borderRadius', arrendondamentoBorda1);

    //Corrigir cor do texto cinza
    //Dados instucionais
    xcss('#perfil-docente #agenda-docente h4','color', 'black');
    //Tag td
    xcss('#perfil-docente #agenda-docente td','color', 'black');

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

    //Esconder forum inutil
    xcss('#forum-portal','display','none');

    //Esconder comunidade inutil
    xcss('#participantes','display','none');

    //Esconder rodapé
    xcss('#rodape','display','none');

    ///remover espaço de plano de fundo
    xcss('#container','width','auto');
    //Evitar bug de redimensionamento
    xcss('#container','minWidth','68em');
    //Ocultar plano de fundo
    //xcss('#container','height','100vh');

    //Remover fundo definitivamente
    xcss('html.background, body.background','background','white');

    //correção do tamanho do texto em atualizações da turma
    xcss('#atualizacoes-turma','fontSize',tamanhoFonte2);

    //Remoção do fundo na barra de semestre, 2020.1
    xcss(/*regra:*/'#main-docente table td',/*propriedade:*/'background',/*valor:*/corTransparente);

    // Mudar cor do fundo da disciplina na lista de componente curricular, que funciona como uma colorida, uma não para melhor visualizar
    xcss('.odd','background',corTransparente);

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

    ///escurecer sistema de gestão...
    xcss('#info-sistema','background',cor1);
    xcss('#info-sistema','color',corFonteClara1);
    xcss('#info-sistema','borderBottom',"1px solid" + cor3);

    //Mudar o fundo dá área do nome, departamento, semestre da barra de cima
    xcss('#painel-usuario','background',cor1);
    xcss('#painel-usuario','color',corFonteClara1);
    xcss('#painel-usuario','borderBottom',"1px solid" + cor3);
    //correção do tamanho da barra de cima
    xcss('#painel-usuario','minHeight',"55px");

    //mudar cores do fundo do menu com os botões modulos , menu discente...
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

    ////ensino, cadastro, bolsas..... mudar cor e adicionar bordas
    xcss('.ThemeOfficeMainItem','background',cor2);
    xcss('.ThemeOfficeMainItem','color',corFonteClara1);
    xcss('.ThemeOfficeMainItem','textAlign',"center");
    xcss('.ThemeOfficeMainItem','borderLeft',"2px solid" + cor3);
    xcss('.ThemeOfficeMainItem','borderRight',"2px solid" + cor3);
    xcss('.ThemeOfficeMainItem','borderBottom',"5px solid" + cor2);
    xcss('.ThemeOfficeMainItem','borderTop',"5px solid" + cor2);

    //ensino, cadastro, bolsas..... icones
    //xcss('.ThemeOfficeMainFolderLeft','display','none'); //remover
    //Mudar icones
    //Ensino
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/icones/ensino_menu.gif','https://svgshare.com/i/Xw5.svg');
    //Pesquisa
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/icones/pesquisa_menu.gif','https://svgshare.com/i/XvR.svg');
    //Extensão
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/icones/extensao_menu.gif','https://svgshare.com/i/XuM.svg');
    //Bolsas
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/bolsas.png','https://svgshare.com/i/XvU.svg');
    //Relações Internacionais
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/relacoes_internacionais/mobilidade.png','https://svgshare.com/i/Xus.svg');
    //Outros
    xsrc('.ThemeOfficeMainFolderLeft img','https://sig.unb.br/sigaa/img/menu/outros.png','https://svgshare.com/i/XvT.svg');

    //Remover icones estranhos do menu
    xcss('td.ThemeOfficeMenuItemLeft img','display','none');
    xcss('td.ThemeOfficeMenuFolderLeft img','display','none');

    //Esconder ajuste de tamanho de letra
    xcss('a.fonteMaior','display','none');
    xcss('a.fonteMenor','display','none');


    //menu
    xcss('.ThemeOfficeMenuItem','background',cor1);
    xcss('.ThemeOfficeMenuItem','color',corFonteClara1);
    xcss('.ThemeOfficeSubMenu','border','1px solid' + cor3);
    xcss('.ThemeOfficeMenuItem .ThemeOfficeMenuFolderLeft, .ThemeOfficeMenuItem .ThemeOfficeMenuItemLeft','background',cor2);
    xcss('.ThemeOfficeMenuSplit','borderTop','1px solid' + cor3);

    //Mudar fundo avisso de erro
    xcss('#painel-erros','background',cor1);
    xcss('#painel-erros','borderBottom',"1px solid" + cor3);
    xcss('#painel-erros','color',corFonteClara1);
    xcss('#painel-erros a','color',corFonteClara1);
    xcss('#painel-erros ul.erros','background','none'); //remover icone de erro feio
    //xcss('#painel-erros','display','none');
    xcss('#fechar-painel-erros','display','none'); // esconder o botão de fechar que não está funcionado
    xcss('#painel-erros ul.info','background','none'); //Esconder icone de informação
    xcss('#painel-erros ul.warning','background','none'); //Esconder icone de alerta
    xcss('#painel-erros ul.warning li','color','#ffeb3b'); //Mudar do aviso de alerta
    xcss('#painel-erros ul','padding','0'); //Remover o padding desnecessário
    xcss('#painel-erros ul.erros li','color','#ff6023'); //Letra vermelha do aviso de erro

    //Mudar a cor das bordas de cada item na barra que diz portal público, Ajuda, Tempo de sessão....
    xcss('#info-sistema span.acessibilidade','border','solid ' + cor3);
    xcss('#info-sistema span.acessibilidade','borderWidth','0 1px 0 0');

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

    //Mudar cor do botão sair
    xcss('#info-sistema span.sair-sistema a','color',corFonteClara1);

    //Mudar a are portal docente> Lista de avaliações...
    //xcss('#conteudo #form h2','background',cor2);
    //xcss('#conteudo #form h2','color',corFonteClara1);
    //xcss('#conteudo #form a','color',corFonteClara1);
    //xcss('#conteudo #form h2','borderBottom',"1px solid" + cor3);
    //xcss('#conteudo #form h2','boxShadow', sombra1);

    //Melhorar o Portal discente> todas as turmas
    xcss('#conteudo h2','background', corTransparente);
    xcss('#conteudo h2','border', 'none');



    //Adicionar sombra no menu de dropdown
    xcss('.ThemeOfficeSubMenu',"boxShadow", sombra1);

    //Mudar o icone de avalição institucional
    xsrc('input, textarea, select,input#agenda','https://sig.unb.br/sigaa/img/avaliacao.jpg','https://svgshare.com/i/Xzo.svg');
    xcss('#agenda-docente input','width','168px');

    //Mudar foto
    xsrc('.foto, img','https://sig.unb.br/sigaa/img/no_picture.png','https://svgshare.com/i/Y09.svg');
    xcss('.foto','margin','10px');
    xcss('.foto img','borderRadius', '4px');

    //Mudar seta menu
    //Bug por conta da url
    xsrc('.ThemeOfficeMenuFolderRight img','all','https://svgshare.com/i/XvL.svg');

    //Mudar botões noticias
    //Esquerda
    xsrc('#controls img','https://sig.unb.br/shared/img/flash_volta.gif','https://svgshare.com/i/XvM.svg');
    //Pause
    xsrc('#controls img','https://sig.unb.br/shared/img/flash_pause.gif','https://svgshare.com/i/XvV.svg');
    //Direita
    xsrc('#controls img','https://sig.unb.br/shared/img/flash_vai.gif','https://svgshare.com/i/XuJ.svg');
    //Todas
    xsrc('#controls img','https://sig.unb.br/shared/img/vermais8.jpg','https://svgshare.com/i/Xuz.svg');

    //Remover imagem de telefone antigo inutil
    xsrc('img','https://sig.unb.br/sigaa/img/celular.jpg','');
    //Aumentar a area ocupada na horizontal do relatório de notas do aluno
    xcss('#relatorio-paisagem-container',"width", '90%');
    xcss('#relatorio-paisagem-container',"minWidth", '60em');

    //Mudar icone impressora
    xsrc('img','https://sig.unb.br/shared/javascript/ext-1.1/docs/resources/print.gif', iconeImpressora);

    //Inserir icones nos botões modulos, caixa postal...
    //Modulos
    var botaoModulos = document.querySelector('#painel-usuario #menu-usuario li.modulos a');
    if (botaoModulos != null){ botaoModulos.insertAdjacentHTML('afterbegin', '<img src="' + iconeModulos + '" width="12px" height="12px">&nbsp;'); }
    //Caixa Postal
    var botaoPostal = document.querySelector('#painel-usuario #menu-usuario li.caixa-postal a');
    if (botaoPostal != null){ botaoPostal.insertAdjacentHTML('afterbegin', '<img src="' + iconeCaixaPostal + '" width="12px" height="12px">&nbsp;'); }
    //Chamado
    var botaoChamado = document.querySelector('#painel-usuario #menu-usuario li.chamado a');
    if (botaoChamado != null){ botaoChamado.insertAdjacentHTML('afterbegin', '<img src="' + iconeChamado + '" width="12px" height="12px">&nbsp;'); }
    //Menu discente
    var botaoDiscente = document.querySelector('#painel-usuario #menu-usuario li.menus a');
    if (botaoDiscente != null){ botaoDiscente.insertAdjacentHTML('afterbegin', '<img src="' + iconeMenuDiscente + '" width="12px" height="12px">&nbsp;'); }
    //Alterar senha
    var botaoSenha = document.querySelector('#painel-usuario #menu-usuario li.dados-pessoais a');
    if (botaoSenha != null){ botaoSenha.insertAdjacentHTML('afterbegin', '<img src="' + iconeSenha + '" width="12px" height="12px">&nbsp;'); }

    //Corrreção do tamanho da letra em consultar minhas notas
    xcss('#relatorio-rodape table tr td','fontSize',tamanhoFonte1);
    //console.log(window.location.href);


  }
  //Consultar indices acadêmicos
  else if (window.location.href == 'https://sig.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf' || window.location.href == 'https://sig.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf#'){
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

    //Mudar icone impressora
    xsrc('img','https://sig.unb.br/shared/javascript/ext-1.1/docs/resources/print.gif', iconeImpressora);
  }
  //Área de turmas anteriores
  else if (window.location.href == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf' || window.location.href == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf#'){
    //Mudar fonte
    document.body.style.fontFamily = fontePadrao;
    //Mudar tamanho da fonte para o tamanho normal
    //document.body.style.fontSize = tamanhoFonte1;

    xcss('#container','minWidth','102em');

    xcss('#painel-usuario',"boxShadow", sombra1);

    //Melhorar o Portal discente> todas as turmas
    xcss('#conteudo h2','background', corTransparente);
    xcss('#conteudo h2','border', 'none');

    //Melhorar o acessar turma virtual
    xcss('.infoAltRem','background', corTransparente);
    xcss('.infoAltRem','border', 'none');

    //Melhorar tamanho fonte
    xcss('#tempoSessao small em, #tempoSessao small span','fontSize','13.3px');
    xcss('#info-sistema span.acessibilidade a','fontSize','17.6px');
    xcss('#info-sistema h1 span','fontSize','21.12px');
    xcss('#info-sistema h3','fontSize','17.6px');
    xcss('#painel-usuario #info-usuario p','fontSize','16px');
    xcss('#painel-usuario #menu-usuario li a','fontSize','13.4px');

    //Remover fundo
    xcss('html.background, body.background','background','white');
    //Ajeitar a margem lateral
    xcss('#container','width','auto');
    //Melhorar tamanho da letra
    xcss('table.listagem, table.subListagem','fontSize',tamanhoFonte2);
    //Melhorar a margem
    xcss('table.listagem, table.subListagem','width','90%');
    //Esconder rodapé
    xcss('#rodape','display','none');

    ///escurecer sistema de gestão...
    xcss('#info-sistema','background',cor1);
    xcss('#info-sistema','color',corFonteClara1);
    xcss('#info-sistema','borderBottom',"1px solid" + cor3);

    //Mudar a cor das bordas de cada item na barra que diz portal público, Ajuda, Tempo de sessão....
    xcss('#info-sistema span.acessibilidade','border','solid ' + cor3);
    xcss('#info-sistema span.acessibilidade','borderWidth','0 1px 0 0');

    //Mudar cor do botão sair
    xcss('#info-sistema span.sair-sistema a','color',corFonteClara1);

    //Mudar o fundo dá área do nome, departamento, semestre da barra de cima
    xcss('#painel-usuario','background',cor1);
    xcss('#painel-usuario','color',corFonteClara1);
    xcss('#painel-usuario','borderBottom',"1px solid" + cor3);
    //correção do tamanho da barra de cima
    xcss('#painel-usuario','minHeight',"55px");

    //mudar cores do fundo do menu com os botões modulos , menu discente...
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

    //Mudar 'todas as turmas virtuais'
    xcss('table.formulario caption, table.listagem caption, table.visualizacao caption, h3.tituloTabela','background',cor1);
    xcss('table.formulario caption, table.listagem caption, table.visualizacao caption, h3.tituloTabela','border',"1px solid " +cor3);
    xcss('table.formulario caption, table.listagem caption, table.visualizacao caption, h3.tituloTabela','borderRadius',arrendondamentoBorda1);

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

  }
 }

 //Botão de ativar e desativar
 // Criar botão
 var button = document.createElement("button");
 if (ativado == 'false'){
     button.innerHTML = "Ativar SIGAA Remix";
     button.style.backgroundColor = '#379638';
     //
 }
 else{
     button.innerHTML = "Desativar SIGAA Remix";
     button.style.backgroundColor = '#2553ca';
 }
 button.style.border = 'none';
 button.style.color = 'white';
 button.style.fontSize = '16px';
 button.style.padding = '1em';
 button.style.marginTop = '1em';
 button.style.marginBottom = '1em';
 button.style.marginLeft = 'auto';
 button.style.marginRight = 'auto';
 button.style.borderRadius = '12px';
 button.style.boxShadow = sombra2;

 // Inserir Botão
 var body = document.getElementsByTagName("body")[0];
 body.appendChild(button);


 button.addEventListener ("click", function() {
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

});
