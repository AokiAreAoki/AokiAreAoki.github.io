import styled from "@emotion/styled";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMemo, lazy, Suspense } from "react";
import useTabs from "./hooks/useTabs";
import Loading from "./components/Loading";
import Flex from "./components/Flex";
import TabSelector from "./components/Tabs";
import ErrorMessage from "./components/ErrorMessage";
// import LazyNews from "./pages/News";
// import LazyAnotherNews from "./pages/AnotherNews";
// import LazyMemes from "./pages/Memes";
import Footer from "./components/Footer";
import fakeLoad from "./utils/fakeLoad";

const Root = styled(Flex)`
	width: 100vw;
	height: 100vh;

	padding: 50px;

	overflow: hidden;
`;

function App() {
	const { tabs, error } = useTabs();

	const content = useMemo(() => {
		if (error) return <ErrorMessage title="Error!" content={error} />;

		if (tabs) {
			const firstTab = tabs.at(0);

			if (!firstTab) return <ErrorMessage title="Error!" content="No tabs" />;

			return (
				<>
					<TabSelector tabs={tabs} />

					<Routes>
						<Route path="*" element={<Navigate to={`/${firstTab.id}`} />} />
						{/* <Route path="/news" element={<LazyNews />} />
						<Route path="/another-news" element={<LazyAnotherNews />} />
						<Route path="/memes" element={<LazyMemes />} /> */}

						{tabs.map((tab) => {
							const Page = lazy(() => fakeLoad(import(`./pages/${tab.path}/index.tsx`)));

							return (
								<Route
									key={tab.id}
									path={`/${tab.id}`}
									element={
										<Suspense fallback={<Loading />}>
											<Page />
										</Suspense>
									}
								/>
							);
						})}
					</Routes>
				</>
			);
		}

		return <Loading />;
	}, [tabs, error]);

	return (
		<Root sizing justify="stretch" align="center" gap="10px">
			<Flex grow>
				<Flex grow align="stretch">
					{content}
				</Flex>

				<Footer>* Loading time is artificially extended for demonstration purposes</Footer>
			</Flex>
		</Root>
	);
}

export default App;
