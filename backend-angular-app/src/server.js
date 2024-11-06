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
        path: '/api/general/specific',
        handler: (req, h) => {
            return {"message": "Hello from /api/general/specific"}
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