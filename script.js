new Vue({
    el: '#globais',
    data: {
        titulo_1:'Home',
        boasVindas:'Seja Bem-vindo(a) ao Sistema de Suporte da Funbosque!',
        nome_dti:'DTI (Departamendo de Tecnologia da Informação)',
        conheca:'Conheça',
        
        instrucoes_1:'Escolha uma das opções para solicitar um chamado, atendimento ou obter informações.',
        instrucoes_2:'Agende seu equipamento selecionando uma das opções abaixo.',
        instrucoes_3:'Agende e acompanhe seu pedido',
        instrucoes_4:'Selecione um bloco para Agendamento de equipamentos multimídia.',
        instrucoes_5:'Selecione uma sala de aula para Agendamento de equipamentos multimídia.'
    },
    computed:{

    },
    methods: {

    }
});


new Card_Button({
    el:'#card_button',
    data:{
        titulo:'Rádio Cipó',
        message:'Notícias'
        
    },
    radioCipo:{
        titulo:'Rádio Cipó',
        message:'Notícias'
    },
});




Vue.component('hover-card-button', {
    template: `
        <div class="card-button" @mouseenter="showMessage" @mouseleave="hideMessage">
            <img src="https://via.placeholder.com/200x150" alt="Imagem do Cartão">
            <button class="button">
                Passe o mouse aqui!
                <div class="message" v-if="isMessageVisible">Mensagem ao passar a seta</div>
            </button>
        </div>
    `,
    data() {
        return {
            isMessageVisible: false
        };
    },
    methods: {
        showMessage() {
            this.isMessageVisible = true;
        },
        hideMessage() {
            this.isMessageVisible = false;
        }
    }
});

new Vue({
    el: '#radioCipo'
});
