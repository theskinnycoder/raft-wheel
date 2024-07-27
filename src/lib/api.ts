import axios from 'axios'

const API_URL = 'http://dev-alb-2083065786.eu-north-1.elb.amazonaws.com:80/'

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
