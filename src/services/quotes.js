import axios from "axios";

const baseUrl = "https://type.fit/api/quotes";

const getAll = async () => {
  const res = await axios.get(baseUrl) 
  return res.data
}

export default getAll