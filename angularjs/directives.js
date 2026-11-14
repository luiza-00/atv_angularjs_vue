
app.directive('acordeao', function() {
    return {
        restrict: 'E',
        scope: {itens: '='},
        template: '<div ng-repeat="item in itens" class="pergunta"><button ng-click="alternar($index)">{{item.titulo}} <span>{{aberto === $index ? "-" : "+"}}</span></button><p ng-if="aberto === $index">{{item.resposta}}</p></div>',
        link: function(scope) {
            scope.aberto = -1;

            scope.alternar = function(i) {
                scope.aberto = scope.aberto === i ? -1 : i;
            };
        }
    };
});

app.directive('paginacao', function() {
    return {
        restrict: 'E',
        scope: {
            total: '=',
            atual: '=',
            mudar: '&'
        },
        template: '<div class="paginacao"><button ng-click="mudar({p: atual-1})" ng-disabled="atual == 1">Anterior</button><button ng-repeat="p in paginas" ng-click="mudar({p:p})" ng-class="{ativa: atual == p}">{{p}}</button><button ng-click="mudar({p: atual+1})" ng-disabled="atual == total">Próxima</button></div>',
        link: function(scope) {
            scope.paginas = [];

            for (var i = 1; i <= scope.total; i++) {
                scope.paginas.push(i);
            }
        }
    };
});


app.directive('barraProgresso', function() {
    return {
        restrict: 'E',
        scope: {valor: '='},
        template: '<div class="barra"><div class="preenchimento" ng-style="{width: valor + \'%\'}"></div></div><p>{{valor}}% concluído</p><button ng-click="diminuir()" ng-disabled="valor <= 0">Diminuir</button><button ng-click="aumentar()" ng-disabled="valor >= 100">Avançar</button>',
        link: function(scope) {
            scope.aumentar = function() {
                if (scope.valor < 100) {
                    scope.valor += 10;
                }
            };

            scope.diminuir = function() {
                if (scope.valor > 0) {
                    scope.valor -= 10;
                }
            };
        }
    };
});


app.directive('minhasAbas', function() {
    return {
        restrict: 'E',
        scope: {abas: '='},
        template: '<div><button ng-repeat="a in abas" ng-click="selecionar($index)" ng-class="{ativa: ativa === $index}">{{a.titulo}}</button><div class="conteudo-aba" ng-if="abas[ativa]"><p>{{abas[ativa].conteudo}}</p></div></div>',
        link: function(scope) {
            scope.ativa = 0;

            scope.selecionar = function(i) {
                scope.ativa = i;
            };
        }
    };
});

app.directive('meuDropdown', function() {
    return {
        restrict: 'E',
        scope: {
            opcoes: '=',
            selecionar: '&'
        },
        template: '<div class="dropdown"><button ng-click="aberto = !aberto">{{escolhida || "Selecionar categoria ▼"}}</button><div class="dropdown-lista" ng-if="aberto"><button class="item-dropdown" ng-repeat="o in opcoes" ng-click="escolher(o)">{{o}}</button></div></div>',
        link: function(scope) {
            scope.aberto = false;

            scope.escolher = function(o) {
                scope.escolhida = o;
                scope.selecionar({opcao: o});
                scope.aberto = false;
            };
        }
    };
});

app.directive('meuToast', function($timeout) {
    return {
        restrict: 'E',
        scope: {mensagem: '='},
        template: '<div class="toast" ng-if="mensagem">{{mensagem}} <button ng-click="fechar()">X</button></div>',
        link: function(scope) {
            var tempo;

            scope.fechar = function() {
                $timeout.cancel(tempo);
                scope.mensagem = '';
            };

            scope.$watch('mensagem', function(valor) {
                if (tempo) {
                    $timeout.cancel(tempo);
                }

                if (valor) {
                    tempo = $timeout(function() {
                        scope.mensagem = '';
                    }, 3000);
                }
            });

            scope.$on('$destroy', function() {
                $timeout.cancel(tempo);
            });
        }
    };
});
