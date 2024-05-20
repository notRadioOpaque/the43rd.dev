
const token = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchGithubProfile = async (setModel: (data: any) => void) => {
  try {
    const response = await fetch(`https://api.github.com/users/the43rdsensei-0`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    setModel(data);
  } catch (error: any) {
    console.log(error.message);
  }
};