import { useEffect, useState } from "react";
import Flex from "../Flex";

export default function Loading() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prev) => (prev % 3) + 1);
		}, 250);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Flex justify="center" align="center">
			Loading{".".repeat(count)}
		</Flex>
	);
}
