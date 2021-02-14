import axios from 'axios'
const baseUrl = '/memes'

const getRecent = () => {
    const promise = axios.get(baseUrl)
    return promise.then(response => response.data)
}

const getById = (id) => {
    const promise = axios.get(`${baseUrl}/${id}`)
    return promise.then(response => response.data)
}

const create = newObject => {
    const promise  = axios.post(baseUrl, newObject)
    return promise.then(response => response.data)
}

const service = { getRecent, getById, create}

export default service

