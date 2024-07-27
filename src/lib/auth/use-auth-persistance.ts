import type { USER } from '@/lib/types'
import { STORAGE_NAME } from './service'

export default function useAuthPersistance() {
	function setLoggedInUser(user: USER) {
		localStorage.setItem(STORAGE_NAME, JSON.stringify(user))
	}

	function removeLoggedInUser() {
		localStorage.removeItem(STORAGE_NAME)
	}

	function getLoggedInUser() {
		const user = JSON.parse(localStorage.getItem(STORAGE_NAME) ?? '{}') as USER
		return user
	}

	function isLoggedIn() {
		return !!localStorage.getItem(STORAGE_NAME)
	}

	return { setLoggedInUser, removeLoggedInUser, getLoggedInUser, isLoggedIn }
}
