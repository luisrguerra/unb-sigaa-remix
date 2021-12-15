//Retorna a url do arquivo armazenado na extenção
function xurl(URL){
    return chrome.runtime.getURL(URL);
}

//Endereços de imagens e icones
//const iconeImpressora = xurl("img/impressora.svg");
//const iconeSenha = xurl("img/senha-white.svg");
//const iconeMenuDiscente = xurl("img/menu-dicente-white.svg");
//const iconeChamado = xurl("img/chamado-white.svg");
//const iconeCaixaPostal = xurl("img/caixa-postal-white.svg");
//const iconeModulos = xurl("img/modulos-white.svg");
//const iconeTurmaReservada = xurl("img/turma-reservada.svg");
//const iconeMatriculaPermitida = xurl("img/matricula-permitida.svg");
//const iconeMatriculaNegada = xurl("img/matricula-negada.svg");
//const iconeRelogio = xurl("img/relogio-black.svg");
//const iconeZoom = xurl("img/zoom-black.svg");
//const iconeChave = xurl("img/chave-black.svg");
//const iconeEnsino = xurl("img/ensino-white.svg");
//const iconePesquisa = xurl("img/pesquisa-white.svg");
//const iconeExtensao = xurl("img/extensao-white.svg");
//const iconeBolsas = xurl("img/bolsas-white.svg");
//const iconeEstagio = xurl("img/estagio-white.svg");
//const iconeRelacoesInternacionais = xurl("img/internacionais-white.svg");
//const iconeOutros = xurl("img/outros-white.svg");
//const iconeSetaDireita = xurl("img/seta-direita-black.svg");
//const iconeSetaEsquerda = xurl("img/seta-esquerda-black.svg");
//const iconeAluno = xurl("img/aluno-black.svg");
//const iconeProfessorFuncionario = xurl("img/professor-funcionario-black.svg");
//const iconeLogOff = xurl("img/logoff-white.svg");
//const iconeCheck = xurl("img/check-white.svg");
//const iconeInfo = xurl("img/info-black.svg");
//const iconeEncaminharEmail = xurl("img/encaminhar-email-black.svg");
//const iconeRemoverX = xurl("img/remover-x-black.svg");
//const iconeEditarEmail = xurl("img/editar-email-black.svg");
//const iconePainelSetaDireita = xurl("img/painel-seta-direita-black.svg");
//const iconePainelSetaEsquerda = xurl("img/painel-seta-esquerda-black.svg");
//const iconePainelSetaCima = xurl("img/painel-seta-cima-black.svg");
//const iconePainelSetaBaixo = xurl("img/painel-seta-baixo-black.svg");
//const iconeFoto = xurl("img/foto.svg");
//const iconeAvaliacaoInstucional = xurl("img/avaliacao-institucional.svg");
//const iconePower = xurl("img/power-white.svg");
//const iconeCalculadora = xurl("img/calculadora-black.svg");
//const iconeGitHub = xurl("img/github-black.svg");
//const iconeTema = xurl("img/tema-black.svg");
//const iconePause = xurl("img/pause-black.svg");
//const iconeTodasNoticias = xurl("img/todas-noticias-black.svg");
//const iconeProximo = xurl("img/proximo-black.svg");
//const iconeAnterior = xurl("img/anterior-black.svg");
//const iconeSetaDropdown = xurl("img/seta-dropdown-white.svg"); 
//const iconeHomeBlack12 = xurl("img/home-black-12.svg");
//const iconeImpressoraBlack12 = xurl("img/impressora-black-12.svg");
//const iconeAulasPaginadas = xurl("img/aulas-paginadas-black-12.svg");
//const iconeAulasLista = xurl("img/aulas-lista-black-12.svg");
//const iconeTrocarTurma = xurl("img/trocar-turma-black-12.svg");
//const iconeOpcoes12 = xurl("img/opcoes-black-12.svg");
//const iconeTurma16 = xurl("img/turma-black-16.svg");
//const iconeAlunos16 = xurl("img/alunos-black-16.svg");
//const iconeMateriais16 = xurl("img/materiais-black-16.svg");
//const iconeAtividades16 = xurl("img/atividades-black-16.svg");
//const iconeEstatistica16 = xurl("img/estatistica-black-16.svg");
//const iconeAjuda16 = xurl("img/ajuda-black-16.svg");
//const iconeArteTurmaVirtual = xurl("img/arte-turma-virtual.svg");
//const iconePesquisaEmail = xurl("img/email-search-black.svg");
//const iconeCaixaEntrada = xurl("img/botao-recebidos.svg");
//const iconeCaixaSaida = xurl("img/botao-enviados.svg");
//const iconeLixeira = xurl("img/botao-lixeira.svg");
//const iconeLixeiraEsvaziar = xurl("img/botao-esvaziar.svg");
//const iconeEmailNaoLido = xurl("img/email-outline.svg");
//const iconeEmailLido = xurl("img/email-open-outline.svg");
//const iconeEmailBuscar = xurl("img/botao-busca.svg");
//const iconeEmailEscrever = xurl("img/botao-escrever.svg");
//const iconeEmailRemover = xurl("img/botao-remover.svg");
//const iconeEmailProximo = xurl("img/arrow-right-circle.svg");
//const iconeEmailAnterior = xurl("img/arrow-left-circle.svg");

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