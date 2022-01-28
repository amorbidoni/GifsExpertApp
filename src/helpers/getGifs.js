export const getGifs = async (category) => {
  // usamos encodeURI() mandando como argumento a catergoria para eliminar los posiblies espacios de la category que puede traer errores en la url. reemplaza los espacios por %.

  const _url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=ApC76ENLa8UQXuK7oT61Nlaa6Gp61Fvt`;
  const resp = await fetch(_url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
