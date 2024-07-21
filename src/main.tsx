import { getLoggedInUser, isLoggedIn } from '@/lib/auth/service'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from './components/ui/sonner'
import './index.css'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient()

const router = createRouter({
	routeTree,
	context: {
		queryClient,
		authentication: {
			user: getLoggedInUser(),
			isAuthenticated: isLoggedIn(),
		},
	},
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/router-devtools').then(res => ({
					default: res.TanStackRouterDevtools,
				})),
			)

const TanstackQueryDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/react-query-devtools').then(res => ({
					default: res.ReactQueryDevtools,
				})),
			)

const targetElement = document.getElementById('root') as HTMLElement

if (!targetElement.innerHTML) {
	const rootElement = createRoot(targetElement)

	rootElement.render(
		<StrictMode>
			<Toaster />
			<QueryClientProvider client={queryClient}>
				<RouterProvider
					router={router}
					context={{
						queryClient,
						authentication: {
							user: getLoggedInUser(),
							isAuthenticated: isLoggedIn(),
						},
					}}
				/>
				<Suspense>
					<TanStackRouterDevtools router={router} />
				</Suspense>
				<Suspense>
					<TanstackQueryDevtools initialIsOpen={false} />
				</Suspense>
			</QueryClientProvider>
		</StrictMode>,
	)
}
