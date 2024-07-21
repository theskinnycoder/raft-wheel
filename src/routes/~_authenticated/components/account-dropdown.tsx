import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useAuthPersistance from '@/lib/auth/use-auth-persistance'
import { cn } from '@/lib/utils'
import { TbLogout2 } from 'react-icons/tb'

export function AccountDropdown() {
	const { getLoggedInUser, removeLoggedInUser } = useAuthPersistance()
	const { email } = getLoggedInUser()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
				>
					<Avatar>
						<AvatarImage src='#' />
						<AvatarFallback>{email?.[0]?.toUpperCase()}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='mr-6 min-w-64'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<span className='px-2 text-sm'>
					Email : <span className='ml-0.5 font-medium'>{email}</span>
				</span>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<Button
						onClick={() => {
							removeLoggedInUser()
							window.location.href = '/login'
						}}
						variant='destructive'
						size='lg'
						className={cn(
							'flex w-full items-center gap-1.5',
							'hover:!bg-destructive/90 hover:!text-destructive-foreground focus:!bg-destructive/90 focus:!text-destructive-foreground',
						)}
					>
						<TbLogout2 className='size-5' />
						<span>Log out</span>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
