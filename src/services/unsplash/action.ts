const URL = import.meta.env.VITE_UNSPLASH_URL;
const token = import.meta.env.VITE_UNSPLASH_TOKEN;

export const fetchUnsplashImages = async (setModel:any) => {
  try {
    const res = await fetch(URL, {
      headers: {
        Authorization: `Client-ID ${token}`
      }
    })

    const data = await res.json();
    console.log(data.urls.small);
    setModel(data.urls.small);
  } catch (error) {
    console.error(error);
  }
}