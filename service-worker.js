// Instalação do Service Worker
self.addEventListener('install', function(event) {
    console.log('Service Worker instalado.');
    // Precache de recursos, se necessário
});

// Ativação do Service Worker
self.addEventListener('activate', function(event) {
    console.log('Service Worker ativado.');
});

// Interceptando requisições de rede
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Offline', { status: 404 }); // Resposta se estiver offline
        })
    );
});
