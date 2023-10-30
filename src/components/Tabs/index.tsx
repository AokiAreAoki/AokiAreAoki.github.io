import React, { FC } from "react";
import styled from "@emotion/styled";
import Flex from "../Flex";
import Tab from "./components/Tab";

declare namespace TabSelector {
	interface TabData {
		id: React.Key;
		title: string;
	}

	type Value = TabData["id"];

	interface Props {
		tabs: TabData[];
	}
}

const Root = styled(Flex)`
	border-bottom: 1px solid white;
`;

const TabSelector: FC<TabSelector.Props> = ({ tabs }) => (
	<Root dir="row">{tabs?.map((tab) => <Tab key={tab.id} value={tab} />)}</Root>
);

export default TabSelector;
