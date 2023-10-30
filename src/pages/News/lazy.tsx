import { Suspense, lazy } from "react";
import { NewsType } from ".";
import Loading from "../../components/Loading";
import fakeLoad from "../../utils/fakeLoad";

const News = lazy(() => fakeLoad(import(".")));

const LazyNews: NewsType = (props) => (
	<Suspense fallback={<Loading />}>
		<News {...props} />
	</Suspense>
);

export default LazyNews;
