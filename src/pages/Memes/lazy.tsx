import { Suspense, lazy } from "react";
import { MemesType } from ".";
import Loading from "../../components/Loading";
import fakeLoad from "../../utils/fakeLoad";

const Memes = lazy(() => fakeLoad(import(".")));

const LazyMemes: MemesType = (props) => (
	<Suspense fallback={<Loading />}>
		<Memes {...props} />
	</Suspense>
);

export default LazyMemes;
