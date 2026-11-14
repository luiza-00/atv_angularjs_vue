
app.factory('DadosService', function() {
    return {
        nome: 'SINDADOS-BA',

        perguntas: [
            {titulo: 'O que é o SINDADOS-BA?', resposta: 'É o sindicato que representa trabalhadores de processamento de dados e tecnologia da informação na Bahia.'},
            {titulo: 'Como acompanhar as assembleias?', resposta: 'Acompanhe os comunicados e convocações publicados pelo sindicato.'},
            {titulo: 'Onde encontrar informações sobre direitos?', resposta: 'Consulte as notícias e os materiais informativos do sindicato.'},
            {titulo: 'Como entrar em contato?', resposta: 'Utilize os canais oficiais de atendimento do sindicato.'}
        ],

        noticias: [
            {
                titulo: 'Campanha salarial 2026',
                categoria: 'Campanha salarial',
                texto: 'Acompanhe as discussões e etapas da campanha salarial da categoria.'
            },
            {
                titulo: 'Convocação para assembleias',
                categoria: 'Assembleias',
                texto: 'Fique atento às convocações e participe das decisões coletivas.'
            },
            {
                titulo: 'Direitos dos trabalhadores de TI',
                categoria: 'Direitos',
                texto: 'Conheça informações importantes sobre direitos e relações de trabalho.'
            }
        ]
    };
});
