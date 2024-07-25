import { post } from "./api"

const baseURL = 'http://localhost:3030/users/login'

export const login = (email, password) => post(baseURL, { email, password });