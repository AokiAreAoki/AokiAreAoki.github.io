import { FC, useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import TabSelector from "../..";
import Flex from "../../../Flex";

declare namespace Tab {
	interface Props {
		value: TabSelector.TabData;
	}
}

interface RootProps {
	active: boolean;
}

const Root = styled(Flex)<RootProps>`
	cursor: pointer;
	z-index: ${(props) => (props.active ? 1 : 0)};

	background-color: var(${(props) => (props.active ? "--highlight" : "--bg")});
	outline: ${(props) => (props.active ? "1px solid white" : "none")};

	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	&:hover > * {
		backdrop-filter: brightness(1.4);
	}
`;

const Content = styled.div`
	padding-inline: 5px;
`;

const Tab: FC<Tab.Props> = ({ value }) => {
	const navigate = useNavigate();
	const onClick = useCallback(() => {
		navigate(`/${value.id}`);
	}, [navigate, value.id]);

	const location = useLocation();
	const active = useMemo(() => {
		const subRoutes = location.pathname.split(/\/+/).filter((s) => !!s);
		const firstSubRoute = subRoutes.at(0);

		return firstSubRoute != null && firstSubRoute.toLowerCase() === value.id;
	}, [location.pathname, value.id]);

	return (
		<Root active={active} onClick={onClick} sizing overflow>
			<Content>{value.title}</Content>
		</Root>
	);
};

export default Tab;
