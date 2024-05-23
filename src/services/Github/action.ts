
const URL = 'https://api.github.com/users/the43rdsensei-0';
const token = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchGithubProfile = async (setModel:any) => {
  try {
    const res = await fetch(URL, {
      headers: {
        Authorization: `token ${token}`
      }
    })

    const data = await res.json();
    setModel(data);
  } catch (error) {
    console.error(error);
  }
}
