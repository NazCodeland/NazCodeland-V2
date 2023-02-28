const wait = (amount: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, amount);
	});

export default wait;
