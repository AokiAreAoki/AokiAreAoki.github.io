import { Suspense, lazy } from "react";
import { MemesType } from ".";
import Loading from "../../components/Loading";

const Memes = lazy(() => import("."));

const LazyMemes: MemesType = (props) => (
	<Suspense fallback={<Loading />}>
		<Memes {...props} />
	</Suspense>
);

export default LazyMemes;
