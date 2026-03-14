const server = Bun.serve({
    port: process.env.PORT ?? 3000,
    async fetch(req) {
        return new Response("Api de Bun Funcionando correctamente!")
    }
})

console.log(`Servidor Funcionando correctamente en: ${server.url}:${server.port} DAA`)