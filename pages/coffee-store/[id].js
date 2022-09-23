import { useRouter } from "next/router";
import Link from "next/link";
function CoffeeStore() {
	const router = useRouter();
	return (
		<div>
			<Link href="/">
				<a href="">Back to home</a>
			</Link>
			<h1>Coffee store page and id is - {router.query.id}</h1>
			<Link href="/coffee-store/dynamic">
				<a href="">Goto dynamic route</a>
			</Link>
		</div>
	);
}

export default CoffeeStore;
