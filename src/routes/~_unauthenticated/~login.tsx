import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useAuthPersistance from '@/lib/auth/use-auth-persistance'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { TbLogin2 } from 'react-icons/tb'
import { toast } from 'sonner'
import { z } from 'zod'

export const Route = createFileRoute('/_unauthenticated/login')({
	component: () => <LoginPage />,
})

const loginSchema = z.object({
	email: z.string().email({
		message: 'Invalid email address',
	}),
	password: z.string().min(1, {
		message: 'Password is required',
	}),
})

type LoginSchemaType = z.infer<typeof loginSchema>

function LoginPage() {
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { setLoggedInUser } = useAuthPersistance()

	function onSubmit(values: LoginSchemaType) {
		const { email, password } = values

		if (email === 'admin@raftwheel.com' && password === 'admin') {
			setLoggedInUser({
				email,
			})
			window.location.href = '/dashboard'
			toast.success('Logged in successfully!')
		}
	}

	return (
		<div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
			{/* Left Section */}
			<div className='bg-dot-black/20 flex items-center justify-center py-12'>
				<Card className='mx-auto w-[380px] border-primary/10 shadow-primary/15 xl:w-96'>
					<CardContent className='grid gap-6 py-12'>
						<div className='grid gap-2 text-center'>
							<h1 className='text-3xl font-bold'>Log in</h1>
							<p className='text-balance text-muted-foreground'>
								Enter the credentials to access the dashboard
							</p>
						</div>

						{/* Form */}
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='grid gap-8'
							>
								{/* Email */}
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem className='grid gap-2'>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder='hi@office.com'
													type='email'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Password */}
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem className='grid gap-2'>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													{...field}
													type='password'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Submit Button */}
								<Button
									type='submit'
									className='flex w-full items-center justify-center gap-1.5'
									size='lg'
								>
									<TbLogin2 className='size-5' />
									<span>Log in</span>
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>

			{/* Right Section */}
			<div className='grid hidden h-screen place-content-center bg-black lg:block'>
				<img
					src='/logo-text.png'
					alt='Raft Wheel'
					className='mx-auto w-5/12'
				/>
			</div>
		</div>
	)
}
