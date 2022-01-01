import axios from "axios";

const apiUri = "https://api.github.com/users/";

async function fetcdata(username) {
  try {
    const { data } = await axios.get(apiUri + username);
    return data
  } catch (error) {
    console.log(error + " we have some problem");
  }
}

export { fetcdata };
