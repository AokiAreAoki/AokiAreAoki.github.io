import wait from "./wait";

export default async function fakeLoad<T>(promise: Promise<T>) {
	await Promise.all([promise, wait(1337)]);
	return promise;
}
