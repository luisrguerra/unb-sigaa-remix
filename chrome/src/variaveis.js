'use strict';

//Versão mostrada na interface
const versao = '2.1.3';

//Se o tema está atividado (boleano)
var ativado = localStorage.getItem("ativado");
//Qual tema está selecionado (string)
var temaAtivado = localStorage.getItem("temaAtivado");

//Cores
var cor1 = '#2f3c52';
var cor2 = '#232f40';
var cor3 = '#141A25';
var cor4 = '#5e697d';
//Cor da mensagem de erro vermelha, as vezes é alterada para melhor visualização
var corErro = "#ff6023";
//Cor do botão de ligar
const corAtivar = '#379638';
//Cor do botão de desligar
const corDesativar = '#c62828';

const corTransparente = "rgb(255 255 255 / 0%)";

//Borda
const corBrancoBorda = "#e0e0e0"
const brancoBorda1 = "1px solid #e0e0e0";
const arrendondamentoBorda1 = "3px";

//Fonte
const tamanhoFonte1 = "1em";
const tamanhoFonte2 = "14px";
const fontePadrao = "Helvetica, sans-serif";
const corFonteClara1 = "#fbfbfb";
const paddingPadrao = "1em";

//Sombras
const sombra1 = 'rgb(0 0 0 / 8%) 0px 3px 6px';
const sombra2 = '0px 3px 5px rgba(0, 0, 0, 0.20)';

//Se o menu de customização das cores está visivel (boleano)
let menuCorRGB = localStorage.getItem("menuCorRGB");

//Configuração dos temas Pré-definidos
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
    ['Rosa', '#380644','#380644','#cd2f74','#cd2f74', '#f95d6c'],
    ['Marrom', '#65292B','#501F22','#2F1313','#874C4D',''],
    ['Vinho', '#801c49','#670d3b','#320C1D','#9c486f',''],
    ['Alto Contraste', '#000000','#000000','#ffffff','#ffffff',''],
    ['Alto Contraste+', '#000000','#000000','#000000','#000000',''],
    ['Tema Customizado', '','','','',''],
];

//Cores customizadas, carregar da memoria salva ou utilizar a cor atual
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

//Retorna a url do arquivo armazenado na extenção
function xurl(URL){
    return chrome.runtime.getURL(URL);
}

//Endereços de imagens e icones
const iconeImpressora = xurl("img/impressora.svg");
const iconeSenha = xurl("img/senha-white.svg");
const iconeMenuDiscente = xurl("img/menu-dicente-white.svg");
const iconeChamado = xurl("img/chamado-white.svg");
const iconeCaixaPostal = xurl("img/caixa-postal-white.svg");
const iconeModulos = xurl("img/modulos-white.svg");
const iconeTurmaReservada = xurl("img/turma-reservada.svg");
const iconeMatriculaPermitida = xurl("img/matricula-permitida.svg");
const iconeMatriculaNegada = xurl("img/matricula-negada.svg");
const iconeRelogio = xurl("img/relogio-black.svg");
const iconeZoom = xurl("img/zoom-black.svg");
const iconeChave = xurl("img/chave-black.svg");
const iconeEnsino = xurl("img/ensino-white.svg");
const iconePesquisa = xurl("img/pesquisa-white.svg");
const iconeExtensao = xurl("img/extensao-white.svg");
const iconeBolsas = xurl("img/bolsas-white.svg");
const iconeEstagio = xurl("img/estagio-white.svg");
const iconeRelacoesInternacionais = xurl("img/internacionais-white.svg");
const iconeOutros = xurl("img/outros-white.svg");
const iconeSetaDireita = xurl("img/seta-direita-black.svg");
const iconeSetaEsquerda = xurl("img/seta-esquerda-black.svg");
const iconeAluno = xurl("img/aluno-black.svg");
const iconeProfessorFuncionario = xurl("img/professor-funcionario-black.svg");
const iconeLogOff = xurl("img/logoff-white.svg");
const iconeCheck = xurl("img/check-white.svg");
const iconeInfo = xurl("img/info-black.svg");
const iconeEncaminharEmail = xurl("img/encaminhar-email-black.svg");
const iconeRemoverX = xurl("img/remover-x-black.svg");
const iconeEditarEmail = xurl("img/editar-email-black.svg");
const iconePainelSetaDireita = xurl("img/painel-seta-direita-black.svg");
const iconePainelSetaEsquerda = xurl("img/painel-seta-esquerda-black.svg");
const iconePainelSetaCima = xurl("img/painel-seta-cima-black.svg");
const iconePainelSetaBaixo = xurl("img/painel-seta-baixo-black.svg");
const iconeFoto = xurl("img/foto.svg");
const iconeAvaliacaoInstucional = xurl("img/avaliacao-institucional.svg");
const iconePower = xurl("img/power-white.svg");
const iconeCalculadora = xurl("img/calculadora-black.svg");
const iconeGitHub = xurl("img/github-black.svg");
const iconeTema = xurl("img/tema-black.svg");
const iconePause = xurl("img/pause-black.svg");
const iconeTodasNoticias = xurl("img/todas-noticias-black.svg");
const iconeProximo = xurl("img/proximo-black.svg");
const iconeAnterior = xurl("img/anterior-black.svg");
const iconeSetaDropdown = xurl("img/seta-dropdown-white.svg"); 
const iconeHomeBlack12 = xurl("img/home-black-12.svg");
const iconeImpressoraBlack12 = xurl("img/impressora-black-12.svg");
const iconeAulasPaginadas = xurl("img/aulas-paginadas-black-12.svg");
const iconeAulasLista = xurl("img/aulas-lista-black-12.svg");
const iconeTrocarTurma = xurl("img/trocar-turma-black-12.svg");
const iconeOpcoes12 = xurl("img/opcoes-black-12.svg");
const iconeTurma16 = xurl("img/turma-black-16.svg");
const iconeAlunos16 = xurl("img/alunos-black-16.svg");
const iconeMateriais16 = xurl("img/materiais-black-16.svg");
const iconeAtividades16 = xurl("img/atividades-black-16.svg");
const iconeEstatistica16 = xurl("img/estatistica-black-16.svg");
const iconeAjuda16 = xurl("img/ajuda-black-16.svg");
const iconeArteTurmaVirtual = xurl("img/arte-turma-virtual.svg");
const iconePesquisaEmail = xurl("img/email-search-black.svg");
const iconeCaixaEntrada = xurl("img/botao-recebidos.svg");
const iconeCaixaSaida = xurl("img/botao-enviados.svg");
const iconeLixeira = xurl("img/botao-lixeira.svg");
const iconeLixeiraEsvaziar = xurl("img/botao-esvaziar.svg");
const iconeEmailNaoLido = xurl("img/email-outline.svg");
const iconeEmailLido = xurl("img/email-open-outline.svg");
const iconeEmailBuscar = xurl("img/botao-busca.svg");
const iconeEmailEscrever = xurl("img/botao-escrever.svg");
const iconeEmailRemover = xurl("img/botao-remover.svg");
const iconeEmailProximo = xurl("img/arrow-right-circle.svg");
const iconeEmailAnterior = xurl("img/arrow-left-circle.svg");

const urlAtual = window.location.href;
//Endereços de páginas
// || urlAtual == ''
const enderecosPaginaInicial = urlAtual == 'https://sig.unb.br/sigaa/portais/discente/discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/discente.jsf#';
const enderecosIndicesAcademicos = urlAtual == 'https://sig.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf' || urlAtual == 'https://sig.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf#';
const enderecosTurmasAnteriores = urlAtual == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf' || urlAtual == 'https://sig.unb.br/sigaa/portais/discente/turmas.jsf#';
const enderecosCaixaPostal = urlAtual == 'https://sig.unb.br/cxpostal/ver_mensagem.jsf#' || urlAtual == 'https://sig.unb.br/cxpostal/ver_mensagem.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/caixa_postal.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/caixa_postal.jsf#' || urlAtual == 'https://sig.unb.br/cxpostal/envia_mensagem.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/envia_mensagem.jsf#';
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