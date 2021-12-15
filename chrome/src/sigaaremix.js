'use strict';

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


//Aplicar as mudanças na página
function executar (){
  function mudancasBasicias(){

    carregarCSS("css/basicas.css")

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

    var basicasCss = document.createElement('style');
    basicasCss.innerHTML = `
    /*Mudar cor da barra com imagem*/
    table.formulario caption, table.listagem caption, table.visualizacao caption, h3.tituloTabela{
      background: ` + cor1 + `;
      border-radius: 2px;
      color: white;
    }
    .box-geral .box-cabecalho{
      background: ` + cor1 + `;
      border-radius: 2px;
      color: white;
    }
    `;
    document.head.appendChild(basicasCss);

    
 }


 function mudancasBarraDeCima(){

    carregarCSS("css/barradecima.css")

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
    if (botaoSair != null){ botaoSair.insertAdjacentHTML('beforeEnd', '&nbsp;<img src="' + xurl("img/logoff-white.svg") + '" width="19px" height="19px">'); };

    //Mudar a cor das bordas de cada item na barra que diz portal público, Ajuda, Tempo de sessão....
    xcss('#info-sistema span.acessibilidade','border','solid ' + cor3);
    xcss('#info-sistema span.acessibilidade','borderWidth','0 1px 0 0');

    //Inserir icones nos botões modulos, caixa postal...
    //Modulos
    var botaoModulos2 = document.querySelector('#painel-usuario #menu-usuario li.modulos a');
    if (botaoModulos2 != null){ botaoModulos2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/modulos-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Caixa Postal
    var botaoPostal2 = document.querySelector('#painel-usuario #menu-usuario li.caixa-postal a');
    if (botaoPostal2 != null){ botaoPostal2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/caixa-postal-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Chamado
    var botaoChamado2 = document.querySelector('#painel-usuario #menu-usuario li.chamado a');
    if (botaoChamado2 != null){ botaoChamado2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/chamado-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Menu discente
    var botaoDiscente2 = document.querySelector('#painel-usuario #menu-usuario li.menus a');
    if (botaoDiscente2 != null){ botaoDiscente2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/menu-dicente-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Alterar senha
    var botaoSenha2 = document.querySelector('#painel-usuario #menu-usuario li.dados-pessoais a');
    if (botaoSenha2 != null){ botaoSenha2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/senha-white.svg") + '" width="12px" height="12px">&nbsp;'); }

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

   carregarCSS("css/turma.css")

   var turmaCss = document.createElement('style');
   turmaCss.innerHTML = `
   /* Mudança no ícone de seta para esquerda */
   .botaoDireita {
     background: white url("` + xurl("img/painel-seta-esquerda-black.svg") + `") no-repeat 5px 5px !important;
   }
   /* Imagem turma virtual */
   div.intro-aval {
     background: white url(` + xurl("img/arte-turma-virtual.svg") + `) no-repeat left top !important;
   }
   /* Alterar o ícone de impressora */
   .botaoImprimir {
     background-image: url("` + xurl("img/impressora-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /*  Alterar o ícone de casa/home  */
   .botaoPortal {
     background-image: url("` + xurl("img/home-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone de ajuda do menu da esquerda */
   .itemMenuHeaderAjuda {
     background-image: url("` + xurl("img/ajuda-black-16.svg") + `");
   }
   /* Mudar ícone de estastistica */
   .itemMenuHeaderRelatorios {
     background-image: url("` + xurl("img/estatistica-black-16.svg") + `");
   }
   /* Mudar ícone de cadeira */
   .itemMenuHeaderTurma {
     background-image: url("` + xurl("img/turma-black-16.svg") + `");
   }
   /* Mudar ícone Materias/Livro*/
   .itemMenuHeaderMateriais {
     background-image: url("` + xurl("img/materiais-black-16.svg") + `");
   }
   /* ícone atividades */
   .itemMenuHeaderAtividades {
     background-image: url("` + xurl("img/atividades-black-16.svg") + `");
   }
   /* ícone alunos */
   .itemMenuHeaderAlunos {
     background-image: url("` + xurl("img/alunos-black-16.svg") + `");
   }
   /*ícone opções turmas */
   .botaoOpcoesTurma {
     background-image: url("` + xurl("img/opcoes-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone Aula paginadas (setas)  */
   .botaoAulasPaginadas {
     background-image: url("` + xurl("img/aulas-paginadas-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone Aula em lista (setas verticais)  */
   .botaoAulasEmLista {
     background-image: url("` + xurl("img/aulas-lista-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone trocar de turma (seta ondulada) */
   .botaoTrocarTurma{
     background-image: url("` + xurl("img/trocar-turma-black-12.svg") + `") !important;
     background-position: center !important;
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
   xsrc("img","https://sig.unb.br/sigaa/ava/img/painel_seta_dir.png",xurl("img/painel-seta-direita-black.svg"));

   //Mudar o ícone de seta para a cima
   xsrc("img","https://sig.unb.br/sigaa/ava/img/painel_seta_cima.png",xurl("img/painel-seta-baixo-black.svg"));

   //Mudar o ícone da sra para baixo
   xsrc("img","https://sig.unb.br/sigaa/ava/img/painel_seta_baixo.png",xurl("img/painel-seta-cima-black.svg"));

 };

 function corrigirFonte(){
   document.body.style.fontSize = tamanhoFonte1;
 }
 function mudarScrollBar(){

  carregarCSS("css/scrollbar.css")

 }

 //Se o sigaa remix estiver ativado
 if (ativado != "false"){
  tema(temaAtivado);

  mudarScrollBar();
  
  novasImagens()

  //Mudar o ícone seta para esquerda
  xcss('tr > td.voltar > a','background', 'url(' + xurl("img/seta-esquerda-black.svg") + ') no-repeat');

  //Página inicial
  if (enderecosPaginaInicial){
    mudancasBasicias();
    mudancasBarraDeCima();
    mudancasTurma();
    corrigirFonte();
    novasImagensHome();
    
    carregarCSS("css/paginainicial.css")

    carregarCSS("css/mostrarhorario.css")

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

    //Avalição institucional
    xcss('#agenda-docente input','width','168px');

    //Mudar foto
    xcss('.foto','margin','10px');
    xcss('.foto img','borderRadius', '4px');

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

    //Mudar barras
    xcss('table.listagem > tfoot, table.listagem > tfoot td','background',cor1);
    xcss('table.listagem > tfoot, table.listagem > tfoot td','borderRadius',"2px");

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
    //Melhorar tamanho de texto na área de equivalências
    xcss('table.listagem#lista-turmas-curriculo > tbody tr.disciplina.no-hover td','fontSize', '1em');
  }
  //Correção de Página genéricas
  else if (enderecosTurmasSelecionadas || enderecosAtualizarDadosPessoais || enderecosPlanoMatricula){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();

  }
  // área de avisos
  else if (enderecosAvisoCovid){
   mudancasBasicias();
   corrigirFonte();
   mudancasBarraDeCima();

   var AvisoCovidCss = document.createElement('style');
   AvisoCovidCss.innerHTML = `
   #conteudo {
     margin: 1em;
   }
   /* Remover bordar Portal Público.... */
   #info-sistema span.acessibilidade{
     border: none !important;
   }
   `;
   document.head.appendChild(AvisoCovidCss);
  }
  // área de mensagens
  else if (enderecosCaixaPostal){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();

    carregarCSS("css/caixapostal.css")

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
  }
  //Tela de login
  else if (enderecosLogin){
   mudancasBasicias();
   mudancasBarraDeCima();
   corrigirFonte();

   carregarCSS("css/login.css")

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
 divBotoes.style.maxWidth = '86em';
 divBotoes.style.flexWrap = 'wrap';
 body.appendChild(divBotoes);


 carregarCSS("css/botao.css")

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
     buttonPower.style.backgroundColor = corDesativar;
 }
 buttonPower.style.color = 'white';
 buttonPower.style.paddingLeft = '2em';
 buttonPower.style.backgroundImage = 'url(' + xurl("img/power-white.svg") + ')';
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
  buttonGithub.innerHTML = 'Sobre o SIGAA Remix';
  buttonGithub.style.paddingLeft = '2em';
  buttonGithub.style.backgroundImage = 'url("' + xurl("img/github-black.svg") + '")';
  buttonGithub.style.backgroundPosition = '1% 50%';
  buttonGithub.onclick = function(){
    alert("Será aberta uma nova janela na página do Github do projeto, lá você poderá ler tutoriais, relatar bugs e ver o código fonte.\r\n\r\nSIGAA Remix desenvolvido por Luís Guerra");
    window.open("https://github.com/luisrguerra/unb-sigaa-remix");
  };
  document.getElementById("idBotoes").appendChild(buttonGithub);

  //Botão da calculadora
  var buttonCalculadora = document.createElement("button");
  buttonCalculadora.setAttribute("class", "botaoTema");
  buttonCalculadora.innerHTML = 'Calculadora de Horários';
  buttonCalculadora.style.paddingLeft = '2em';
  buttonCalculadora.style.backgroundImage = 'url("' + xurl("img/calculadora-black.svg") + '")';
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
    background-image: url("` + xurl("img/tema-black.svg") + `");
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

  carregarCSS("css/botaocor.css")

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

  botaoCorAplicar.src = xurl("img/check-white.svg");
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