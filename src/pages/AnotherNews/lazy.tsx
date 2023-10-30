import { Suspense, lazy } from "react";
import { AnotherNewsType } from ".";
import Loading from "../../components/Loading";

const AnotherNews = lazy(() => import("."));

const LazyAnotherNews: AnotherNewsType = (props) => (
	<Suspense fallback={<Loading />}>
		<AnotherNews {...props} />
	</Suspense>
);

export default LazyAnotherNews;
