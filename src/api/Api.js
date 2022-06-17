import axios from "axios"
const baseURL = "https://62938c037aa3e6af1a0d29ac.mockapi.io/"

export const instance = axios.create({
    baseURL
})
