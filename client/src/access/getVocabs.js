import axios from "axios";

async function getVocabs() {
    const { data } = await axios.get("https://mern-pedro.elasistefan.repl.co/getVocabs")
    return data
}

export default getVocabs