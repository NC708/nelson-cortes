export default function typeWrite(textsFinished, setTexts, sound) {
	let currText = 0;
	let currLetter = 0;

	const typingInterval = setInterval(() => {
		setTexts((texts) => {
			if (currLetter >= textsFinished[currText]?.length) {
				currLetter = 0;
				currText++;
			}
			if (currText >= textsFinished.length) {
				clearInterval(typingInterval);
				return texts;
			}
			let copy = { ...texts };
			if (!copy[currText]) copy[currText] = '';
			copy[currText] = copy[currText] + textsFinished[currText][currLetter];
			currLetter++;

			return copy;
		});
	}, 25);
}
