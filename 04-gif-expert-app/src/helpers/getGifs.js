

export const getGifs = async( category ) => {
    /** obtener gifs a la API de Giphy  */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=O7yvsisd1W0OKmyY8tWJAQzIwblErMNi&q=${ encodeURI( category ) }`;
    // obtiene la info y extrae los datos obteniendo solo id, title y url
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url, 
    }))
    
    return  gifs.length < 10 ? gifs : gifs.slice(0,10);
}
