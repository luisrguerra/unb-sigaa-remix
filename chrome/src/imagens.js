//Retorna a url do arquivo armazenado na extenção
function xurl(URL){
    return chrome.runtime.getURL(URL);
}

function novasImagens(){
  //Mudar o ícone de interroção dos horários para um ícone de relógio
  xsrc('img','https://sig.unb.br/shared/img/geral/ajuda.gif', xurl("img/info-black.svg") );
  
  //Mudar icone de Matricula negada
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_negada.png', xurl("img/matricula-negada.svg") );
  //Mudar icone de Matricula permitida
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_permitida.png', xurl("img/matricula-permitida.svg") );
  
  //Mudar icone zoom matricula
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/zoom.png', xurl("img/zoom-black.svg") );
  
  //Mudar icone chave
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/matricula_tem_reservas.png', xurl("img/chave-black.svg") );
  
  //Mudar icone de restrição reserva matrizes curriculares especificas
  xsrc('img','https://sig.unb.br/sigaa/img/graduacao/matriculas/restricao_reserva.png', xurl("img/turma-reservada.svg") );
  
  //Mudar icone de seta para direita
  xsrc('img','https://sig.unb.br/sigaa/img/avancar.gif', xurl("img/seta-direita-black.svg") );
  
  //Mudar icone impressora
  xsrc('img','https://sig.unb.br/shared/javascript/ext-1.1/docs/resources/print.gif', xurl("img/impressora.svg") );
  
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
  xsrc('img','https://sig.unb.br/sigaa/ava/img/cancel.png', xurl("img/cancelar.svg") );


}