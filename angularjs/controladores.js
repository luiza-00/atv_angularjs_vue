
app.controller('MainController', function($scope, DadosService) {
    $scope.nome = DadosService.nome;
    $scope.perguntas = DadosService.perguntas;
    $scope.noticias = DadosService.noticias;

    $scope.progresso = 70;
    $scope.pagina = 1;
    $scope.opcao = 'Todas';
    $scope.mensagem = '';

    $scope.abas = [
        {
            titulo: 'Sobre',
            conteudo: 'O SINDADOS-BA representa os trabalhadores de processamento de dados, informática e tecnologia da informação e comunicação da Bahia.'
        },
        {
            titulo: 'Atuação',
            conteudo: 'Defesa dos direitos trabalhistas, negociação coletiva e representação da categoria.'
        },
        {
            titulo: 'Serviços',
            conteudo: 'Informações, orientações e atendimento aos trabalhadores.'
        }
    ];

    $scope.opcoes = [
        'Todas',
        'Assembleias',
        'Campanha salarial',
        'Direitos'
    ];

    $scope.mudarPagina = function(p) {
        if (p >= 1 && p <= $scope.noticias.length) {
            $scope.pagina = p;
        }
    };

    $scope.selecionarOpcao = function(opcao) {
        $scope.opcao = opcao;
    };

    $scope.mostrarToast = function() {
        $scope.mensagem = 'Solicitação registrada com sucesso!';
    };
});
