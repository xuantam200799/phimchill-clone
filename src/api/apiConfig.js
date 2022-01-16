const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b25abf7a3db5e402e5952d43f7a14235',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;