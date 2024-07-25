import { post } from "./api"

const baseURL = 'http://localhost:3030/users'

export const login = (email, password) => post(`${baseURL}/login`, { email, password });

export const register = (email, password) => post(`${baseURL}/register`, { email, password });