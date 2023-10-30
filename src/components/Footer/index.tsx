import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import Flex from "../Flex";

declare namespace Footer {
	interface Props extends Flex.Props, PropsWithChildren {}
}

const Root = styled(Flex)`
	border-top: 1px solid white;
	padding-top: 5px;
`;

const Footer: FC<Footer.Props> = ({ children, ...props }) => <Root {...props}>{children}</Root>;

export default Footer;
