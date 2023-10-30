import { Suspense, lazy } from "react";
import { AnotherNewsType } from ".";
import Loading from "../../components/Loading";
import fakeLoad from "../../utils/fakeLoad";

const AnotherNews = lazy(() => fakeLoad(import(".")));

const LazyAnotherNews: AnotherNewsType = (props) => (
	<Suspense fallback={<Loading />}>
		<AnotherNews {...props} />
	</Suspense>
);

export default LazyAnotherNews;
