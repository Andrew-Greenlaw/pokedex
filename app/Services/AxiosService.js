// @ts-ignore
export const PokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 2500
})
// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 2500
})
