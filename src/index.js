const Fastfy = require('fastify'); 

const fastify = Fastify({logger: true});

fastufy.get('/cards', function(request, reply){
    reply.send({cards: [{name: "card1"}, {name: 'card2'}]});
})
fastify.listen({port.3000}, function(console.err, address;){
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }

    fastify.log.info('Servidor rodando');
});