import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps({ params }) {
	console.log(params);
	return {
		props: {
			coffeeStore: coffeeStoresData.find((coffeestore) => {
				return coffeestore.id.toString() === params.id;
			}),
		},
	};
}
export function getStaticPaths() {
	return {
		paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
		fallback: false,
	};
}
function CoffeeStore(props) {
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
			<p>{props.coffeeStore.address}</p>
			<p>{props.coffeeStore.name}</p>
		</div>
	);
}

export default CoffeeStore;
