import type { USER } from '@/lib/types'

export const STORAGE_NAME = 'raft_wheel_user_'

export function setLoggedInUser(user: USER) {
	localStorage.setItem(STORAGE_NAME, JSON.stringify(user))
}

export function removeLoggedInUser() {
	localStorage.removeItem(STORAGE_NAME)
}

export function getLoggedInUser() {
	const user = JSON.parse(localStorage.getItem(STORAGE_NAME) ?? '{}') as USER
	return user
}

export function isLoggedIn() {
	return !!localStorage.getItem(STORAGE_NAME)
}
