import { FC } from "react";
import styled from "@emotion/styled";

declare namespace ErrorMessage {
	interface Props {
		title: string;
		content: string;
	}
}

const Frame = styled.div`
	border: 5px solid rgb(200, 0, 0);
	border-radius: 15px;

	background-color: rgb(200, 0, 0, 0.3);

	padding: 15px;
	gap: 15px;
`;

const ErrorMessage: FC<ErrorMessage.Props> = ({ title, content }) => (
	<Frame>
		<div>
			<b>{title}</b>
		</div>
		<div>{content}</div>
	</Frame>
);

export default ErrorMessage;
