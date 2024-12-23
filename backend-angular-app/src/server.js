import Hapi from '@hapi/hapi';
const start = async () => {
    const server = Hapi.server({
        port: 8000, 
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/api/general',
        handler: (req, h) => {
            return {"message": "Hello from /api/general"};
        }
    })

    server.route({
        method: 'GET', 
        path: '/api/specific',
        handler: (req, h) => {
            return {"message": "Hello from /api/specific"}
        }
    })

    server.route({
        method: 'GET', 
        path: '/api/general/{id}',
        handler: (req, h) => {
            const id = req.params.id.replace(/["']/g, "");
            console.log("request received at /api/general/" + id)
            return {"message": `Hello from /api/general/${id}`};
        }
    })

    server.route({
        method: 'GET', 
        path: '/{any*}',
        handler: (req, h) => {
            return h.response({"error": "hit the 'any' api route!"}).code(404);
        }
    })

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);


}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();