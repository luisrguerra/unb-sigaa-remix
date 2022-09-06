//Retorna a url do arquivo armazenado na extenção
function xurl(URL){
    return chrome.runtime.getURL(URL);
}

function novasImagens(){
  //Mudar o ícone de interroção dos horários para um ícone de relógio
  xsrc('img','https://sigaa.unb.br/shared/img/geral/ajuda.gif', xurl("img/info-black.svg") );
  xsrc('img','https://sig.unb.br/shared/img/geral/ajuda.gif', xurl("img/info-black2.svg") );
  xsrc('img','https://sigaa.unb.br/sigaa/img/ajuda.gif', xurl("img/info-black2.svg") );
  
  //Mudar icone de Matricula negada
  xsrc('img','https://sigaa.unb.br/sigaa/img/graduacao/matriculas/matricula_negada.png', xurl("img/matricula-negada.svg") );
  //Mudar icone de Matricula permitida
  xsrc('img','https://sigaa.unb.br/sigaa/img/graduacao/matriculas/matricula_permitida.png', xurl("img/matricula-permitida.svg") );
  
  //Mudar icone zoom matricula
  xsrc('img','https://sigaa.unb.br/sigaa/img/graduacao/matriculas/zoom.png', xurl("img/zoom-black.svg") );
  
  //Mudar icone chave
  xsrc('img','https://sigaa.unb.br/sigaa/img/graduacao/matriculas/matricula_tem_reservas.png', xurl("img/chave-black.svg") );
  
  //Mudar icone de restrição reserva matrizes curriculares especificas
  xsrc('img','https://sigaa.unb.br/sigaa/img/graduacao/matriculas/restricao_reserva.png', xurl("img/turma-reservada.svg") );
  
  //Mudar icone de seta para direita
  xsrc('img','https://sigaa.unb.br/sigaa/img/avancar.gif', xurl("img/seta-direita-black.svg") );
  
  //Mudar icone impressora
  xsrc('img','https://sig.unb.br/shared/javascript/ext-1.1/docs/resources/print.gif', xurl("img/impressora.svg") );
  xsrc('img','https://sigaa.unb.br/shared/javascript/ext-1.1/docs/resources/print.gif', xurl("img/impressora.svg") );

  //Mudar ícone de encaminhar email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/email_go.png', xurl("img/encaminhar-email-black.svg") );
  
  //Mudar ícone de caixa de entrada
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_inbox.png', xurl("img/botao-recebidos.svg") );
  
  //Mudar ícone de caixa de saída
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_sent.png', xurl("img/botao-enviados.svg") );
  
  //Mudar ícone da lixeira
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_trash.png', xurl("img/botao-lixeira.svg") );
  
  //Mudar ícone de apagar lixeira
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_limpar.png', xurl("img/botao-esvaziar.svg") );
  
  //Mudar ícone de email não lido
  xsrc('img','https://sig.unb.br/cxpostal/img/email2.png', xurl("img/email-outline.svg") );
  
  //Mudar ícone de email lido
  xsrc('img','https://sig.unb.br/cxpostal/img/email_open.gif', xurl("img/email-open-outline.svg") );
  
  //Mudar ícone de buscar email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_buscar.png', xurl("img/botao-busca.svg") );
  
  //Mudar ícone de enviar email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_enviar.png', xurl("img/botao-escrever.svg") );
  
  //Mudar ícone de remover seleção de emails
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_remover.png', xurl("img/botao-remover.svg") );
  
  //Mudar ícone de email anterior
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_anterior.png', xurl("img/arrow-left-circle.svg") );
  
  //Mudar ícone de próximo email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/bt_proxima.png', xurl("img/arrow-right-circle.svg") );
  
  //Mudar ícone de Remover X
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/cross.gif', xurl("img/remover-x-black.svg") );
  
  //Mudar ícone de Responder Email
  xsrc('img','https://sig.unb.br/shared/img/caixa_postal/email_edit.gif', xurl("img/editar-email-black.svg") );

  //Mudar ícone de excluir opção da matrícula
  xsrc('img','https://sigaa.unb.br/sigaa/ava/img/cancel.png', xurl("img/cancelar.svg") );

  //Mudar foto
  xsrc('img','https://sigaa.unb.br/sigaa/img/no_picture.png',xurl("img/foto.svg"));

  //Mudar botões noticias
  //Esquerda
  xsrc('#controls img','https://sigaa.unb.br/shared/img/flash_volta.gif',xurl("img/anterior-black.svg"));
  //Pause
  xsrc('#controls img','https://sigaa.unb.br/shared/img/flash_pause.gif', xurl("img/pause-black.svg"));
  //Direita
  xsrc('#controls img','https://sigaa.unb.br/shared/img/flash_vai.gif', xurl("img/proximo-black.svg"));
  //Todas
  xsrc('#controls img','https://sigaa.unb.br/shared/img/vermais8.jpg', xurl("img/todas-noticias-black.svg"));
  
  //Tela de login
  //aluno
  xsrc('img','https://sigaa.unb.br/sigaa/img/user.png', xurl("img/aluno-black.svg") );
  //professor funcionário
  xsrc('img','https://sig.unb.br/sigaa/img/novo_usuario.gif',xurl("img/professor-funcionario-black.svg") );
  xsrc('img','https://sigaa.unb.br/sigaa/img/novo_usuario.gif',xurl("img/professor-funcionario-black.svg") );
  xsrc('img','https://sig.unb.br/sipac/img_css/novo_usuario.gif',xurl("img/professor-funcionario-black.svg") );
  xsrc('img','https://sig.unb.br/shared/img/novo_usuario.gif',xurl("img/professor-funcionario-black.svg") );

  xsrc('img','https://sigaa.unb.br/sigaa/img/view.gif', xurl("img/lupa-black.svg") );

}

function novasImagensHome(){

    //Corrigir o ícone de relógio errado, com o ícone de informação
    xsrc('img',xurl("img/info-black.svg"),xurl("img/relogio-black.svg") );

    //ensino, cadastro, bolsas..... icones
    //Ensino
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/icones/ensino_menu.gif', xurl("img/ensino-white.svg"));
    //Pesquisa
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/icones/pesquisa_menu.gif', xurl("img/pesquisa-white.svg"));
    //Extensão
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/icones/extensao_menu.gif', xurl("img/extensao-white.svg"));
    //Biblioteca
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/icones/biblioteca_menu.gif', xurl("img/biblioteca-white-24.svg") );
    //Bolsas
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/bolsas.png', xurl("img/bolsas-white.svg"));
    //Estagio
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/estagio/estagio_menu.png', xurl("img/estagio-white.svg"));
    //Relações Internacionais
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/relacoes_internacionais/mobilidade.png', xurl("img/internacionais-white.svg"));
    //Outros
    xsrc('.ThemeOfficeMainFolderLeft img','https://sigaa.unb.br/sigaa/img/menu/outros.png', xurl("img/outros-white.svg"));

    //Mudar o icone de avalição institucional
    xsrc('input, textarea, select,input#agenda','https://sigaa.unb.br/sigaa/img/avaliacao.jpg',xurl("img/avaliacao-institucional.svg"));

    //Mudar seta menu
    xsrc('.ThemeOfficeMenuFolderRight img','all', xurl("img/seta-dropdown-white.svg"));
    
    //Mudar o ícone de aviso de prova
    xsrc('img','https://sigaa.unb.br/sigaa/img/prova_semana.png', xurl("img/prova_semana.png.svg") );
}