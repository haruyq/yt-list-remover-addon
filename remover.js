(() => {
	const HOSTS = new Set(['youtu.be', 'www.youtu.be']);

	const Logger = (...args) => {
		console.info('[yt-list-remover]', ...args);
	};

	const stripListParameter = (text) => {
		if (!text || !text.includes('list=')) {
			return text;
		}

		const trimmed = text.trim();
		if (!trimmed) {
			return text;
		}

		try {
			const url = new URL(trimmed, window.location.href);

			const host = url.hostname.toLowerCase();
			if (!HOSTS.has(host)) {
				return text;
			}

			if (!url.searchParams.has('list')) {
				return text;
			}

			url.searchParams.delete('list');

			if (!url.searchParams.has('list') && url.searchParams.has('index')) {
				url.searchParams.delete('index');
			}

			return url.toString();
		} catch (error) {
			Logger('Failed to parse URL, leaving text untouched.', { text, error });
			return text;
		}
	};

	const handleCopyEvent = (ev) => {
		setTimeout(async () => {
			if (!navigator.clipboard?.readText || !navigator.clipboard?.writeText) {
				return;
			}

			try {
				const clipboardText = await navigator.clipboard.readText();

				const cleanedText = stripListParameter(clipboardText);
				if (!cleanedText || cleanedText === clipboardText) {
					return;
				}

				await navigator.clipboard.writeText(cleanedText);
				Logger('Clipboard data updated.', { cleanedText });
			} catch (error) {
				Logger('failed to read or write clipboard data.', { error });
			}
		}, 0);
	};

	document.addEventListener('copy', handleCopyEvent, true);
})();
