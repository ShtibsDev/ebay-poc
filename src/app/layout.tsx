import '~/styles/globals.scss';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { TRPCReactProvider } from '~/trpc/react';

import logo from '../../public/images/logo.png';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans'
});

export const metadata = {
	title: 'Ebay POC',
	description: 'Ebay like proof of concept',
	icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`font-sans ${inter.variable}`}>
				<TRPCReactProvider cookies={cookies().toString()}>
					<header>
						<Link href="/">
							<Image src={logo} alt="logo" />
						</Link>
					</header>
					{children}
				</TRPCReactProvider>
				<Analytics />
			</body>
		</html>
	);
}
