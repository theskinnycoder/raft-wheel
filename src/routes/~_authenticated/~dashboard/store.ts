import { create } from 'zustand'

type TRIP_TYPE = 'login' | 'logout'

type Store = {
	tripType: TRIP_TYPE
	setTripType: (value: TRIP_TYPE) => void

	office: string
	setOffice: (value: string) => void

	date: string
	setDate: (value: Date) => void
}

const useFiltersStore = create<Store>(set => ({
	tripType: 'login',
	setTripType: (value: TRIP_TYPE) => set({ tripType: value }),

	office: 'Durgam Cheruvu',
	setOffice: (value: string) => set({ office: value }),

	date: new Date().toISOString(),
	setDate: (value: Date) => set({ date: value.toISOString() }),
}))

export default useFiltersStore
