import { useEffect, useState } from "react";
import Joi from "joi";
import fakeLoad from "../utils/fakeLoad";

const URL = `/tabs.json`;

interface Tab {
	id: string;
	title: string;
	order: number;
	path: string;
}

const schema = Joi.array().items(
	Joi.object({
		id: Joi.string().required(),
		title: Joi.string().required(),
		order: Joi.number().required(),
		path: Joi.string().required(),
	}).required(),
);

export default function useTabs() {
	const [tabs, setTabs] = useState<Tab[] | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		fakeLoad(fetch(URL, { signal: controller.signal }))
			.then((response) => response.json() as Promise<Tab[]>)
			.then((json) => {
				const result = schema.validate(json);

				if (result.warning) console.warn(result.warning);
				if (result.error) throw result.error;

				setTabs(json.sort((a, b) => a.order - b.order));
			})
			// eslint-disable-next-line no-shadow
			.catch((error) => {
				if (error.name !== "AbortError") setError(error.stack);
			});

		return () => {
			controller.abort();
		};
	}, []);

	return { tabs, error };
}
