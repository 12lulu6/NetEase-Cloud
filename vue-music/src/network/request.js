import axios from "axios"

export function request(config){
  const instnace = axios.create({
    baseURL:' http://localhost:3000'
  })
  return instnace(config)
}