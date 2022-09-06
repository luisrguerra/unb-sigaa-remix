'use strict';

//Versão mostrada na interface
const versao = '2.2.6';

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

class CorCustomizadaObj {
    constructor(variavelLocal, valorPadrao) {
      this.variavelLocal = variavelLocal;
      this.valorPadrao = valorPadrao;
    }
    get() {
      if (localStorage.getItem(this.variavelLocal) == null) {
          localStorage.setItem(this.variavelLocal, this.valorPadrao);
          return this.valorPadrao;
      }
      else{
        return localStorage.getItem(this.variavelLocal);
      };
    };
    set(novoValor){
        localStorage.setItem(this.variavelLocal, novoValor);
    }
};

//Cores customizadas, carregar da memoria salva ou utilizar a cor atual
var cor1CustomizadoObj = new CorCustomizadaObj("cor1Customizado",cor1);
var cor2CustomizadoObj = new CorCustomizadaObj("cor2Customizado",cor2);
var cor3CustomizadoObj = new CorCustomizadaObj("cor3Customizado",cor3);
var cor4CustomizadoObj = new CorCustomizadaObj("cor4Customizado",cor4);
//Fim cores customizadas, carregar


const urlAtual = window.location.href;
//Endereços de páginas
// || urlAtual == ''
const enderecosPaginaInicial = urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/discente.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/discente.jsf#' || urlAtual == "https://sigaa.unb.br/sigaa/graduacao/matricula/extraordinaria/matricula_extraordinaria.jsf" || urlAtual == "https://sigaa.unb.br/sigaa/graduacao/matricula/extraordinaria/matricula_extraordinaria.jsf#" || urlAtual == "https://sigaa.unb.br/sigaa/pesquisa/projetoPesquisa/buscarProjetos.do?dispatch=consulta&popular=true&consulta=true";
const enderecosIndicesAcademicos = urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/discente/relatorio_indices_discente.jsf#';
const enderecosTurmasAnteriores = urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/turmas.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/turmas.jsf#';
const enderecosCaixaPostal = urlAtual == 'https://sig.unb.br/cxpostal/ver_mensagem.jsf#' || urlAtual == 'https://sig.unb.br/cxpostal/ver_mensagem.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/caixa_postal.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/caixa_postal.jsf#' || urlAtual == 'https://sig.unb.br/cxpostal/envia_mensagem.jsf' || urlAtual == 'https://sig.unb.br/cxpostal/envia_mensagem.jsf#';
const enderecosLogin = urlAtual == 'https://sigaa.unb.br/sigaa/verTelaLogin.do' || urlAtual == 'https://sigaa.unb.br/sigaa/logar.do?dispatch=logOff' || urlAtual == 'https://sig.unb.br/sipac/?modo=classico' || urlAtual == 'https://sig.unb.br/sigrh/login.jsf' || urlAtual == 'https://sig.unb.br/admin/login.jsf' || urlAtual == 'https://sig.unb.br/sipac/'  || urlAtual == 'https://sigaa.unb.br/sigaa/logar.do?dispatch=logOn';
const enderecosAtualizarDadosPessoais = urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/discente/dados_discente.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/discente/dados_discente.jsf#';
const enderecosMatricula = urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/turmas_curriculo.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/turmas_curriculo.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/turmas_equivalentes_curriculo.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/turmas_equivalentes_curriculo.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/turmas_selecionadas.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/turmas_selecionadas.jsf#';
const enderecosImprimirComprovante = urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/comprovante_solicitacoes.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/comprovante_solicitacoes.jsf#';
const enderecosAreaMudarFoto = urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/perfil.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/perfil.jsf#';
const enderecosTurmasSelecionadas = urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/instrucoes/instrucoes_regular.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/instrucoes/instrucoes_regular.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/resumo_solicitacoes.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/graduacao/matricula/resumo_solicitacoes.jsf' ;
const enderecosAvisoCovid = urlAtual == 'https://sigaa.unb.br/sigaa/telaAvisoLogon.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/telaAvisoLogon.jsf#';
const enderecosPlanoMatricula = urlAtual == 'https://sigaa.unb.br/sigaa/geral/componente_curricular/busca_geral.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/geral/componente_curricular/busca_geral.jsf#';
const enderecosTurmaVirtual = urlAtual == 'https://sigaa.unb.br/sigaa/ava/index.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/index.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/PerfilUsuarioAva/form.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/PerfilUsuarioAva/form.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/participantes.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/participantes.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/FrequenciaAluno/mapa.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/FrequenciaAluno/mapa.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/NoticiaTurma/listar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/NoticiaTurma/listar.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/ConteudoTurma/listar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/ConteudoTurma/listar.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/ForumTurma/lista.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/ForumTurma/lista.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/GrupoDiscentes/ver_grupo.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/GrupoDiscentes/ver_grupo.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/IndicacaoReferencia/listar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/IndicacaoReferencia/listar.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/Relatorios/timeline.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/Relatorios/timeline.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/estatisticas.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/estatisticas.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/Enquete/listar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/Enquete/listar.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/VideoTurma/listar_discente.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/VideoTurma/listar_discente.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/DataAvaliacao/listar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/DataAvaliacao/listar.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/TarefaTurma/listar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/TarefaTurma/listar.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/ArquivoTurma/listar_discente.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/ArquivoTurma/listar_discente.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/QuestionarioTurma/listarDiscente.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/QuestionarioTurma/listarDiscente.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/turmas.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/portais/discente/turmas.jsf#' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/PlanoCurso/visualizar.jsf' || urlAtual == 'https://sigaa.unb.br/sigaa/ava/PlanoCurso/visualizar.jsf#';
//Fim endereços de páginas