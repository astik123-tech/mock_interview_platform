import Link from 'next/link';
import Image from 'next/image';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="root-layout">
			<nav>
				<Link href="/" className="flex items-center gap-2">
					<Image src={'/logo.svg'} alt="Logo" width={38} height={32} />
				</Link>
				<h2 className="text-primary-100">PrepWise</h2>
			</nav>
			{children}
		</div>
	);
}
