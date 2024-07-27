import type { USER } from '@/lib/types'
import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

export type RouterContext = {
	queryClient: QueryClient
	authentication: {
		user: USER | null
		isAuthenticated: boolean
	}
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => {
		return (
			<main>
				<Outlet />
			</main>
		)
	},
})
