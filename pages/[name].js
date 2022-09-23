import Head from "next/head";

import { useRouter } from "next/router";
import Link from "next/link";
function Name() {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link href="/">
				<a href="">Back to home</a>
			</Link>
			<h1>{router.query.name}</h1>
		</div>
	);
}

export default Name;
