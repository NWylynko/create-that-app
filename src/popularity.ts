import Axios from "axios"

const axios = Axios.create({
  baseURL: "https://us-central1-create-that-app.cloudfunctions.net/",
  headers: {
    "Content-Type": "application/json",
  }
})

export const report = async (id: string) => {
  return axios.post<{ success: true, id: string }>("/event", { id })
}

export const popularity = async () => {
  const { data: result } = await axios.get<{ [key: string]: number }>("/list")
  return Object.entries(result).map(([id, count]) => ({ id, count }))
}