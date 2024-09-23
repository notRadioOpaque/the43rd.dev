const URL = import.meta.env.VITE_GITHUB_URL;
const token = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchGithubProfile = async (setModel: any) => {
  try {
    const res = await fetch(URL, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const data = await res.json();
    setModel(data);
  } catch (error) {
    console.error(error);
  }
};
