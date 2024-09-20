/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes
  images: {
    // Usamos remotePatterns para permitir cargar imágenes desde un dominio específico.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // Dominio de donde cargarás las imágenes
        port: '', // No es necesario especificar el puerto si es el predeterminado (443 para HTTPS)
        pathname: '**', // Permite todas las rutas del dominio
      },
    ],
  },
};

export default nextConfig;
