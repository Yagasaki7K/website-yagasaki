const calculateReadingTime = (text: string, wordsPerMinute = 200): number => {
	const words = text.split(/\s+/).length;
	const readingTime = Math.ceil(words / wordsPerMinute);
	return readingTime;
};

export default calculateReadingTime;
