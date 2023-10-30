import { Suspense, lazy } from "react";
import { NewsType } from ".";
import Loading from "../../components/Loading";

const News = lazy(() => import("."));

const LazyNews: NewsType = (props) => (
	<Suspense fallback={<Loading />}>
		<News {...props} />
	</Suspense>
);

export default LazyNews;
