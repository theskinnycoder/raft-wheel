import axios from 'axios'

const API_URL = 'https://api.raftwheel.com/app/'

const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true,
		Accept: '*/*',
	},
	withCredentials: true,
})

export default api
