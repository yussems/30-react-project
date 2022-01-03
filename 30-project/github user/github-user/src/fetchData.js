import axios from "axios";

const apiUri = "https://api.github.com/users/";

async function fetcdata(username) {
 
    const datas = await axios.get(apiUri + username);
    const {data} = datas
    return data;
}

export { fetcdata };
