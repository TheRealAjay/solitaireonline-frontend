const config = {
	api: {
		url: 'http://88.198.105.137:5000',
	}
}

export const debounce = (func, delay = 600, immediate = false) => {
	let timeout
	return function () {
		const context = this
		const args = arguments
		const later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, delay)
		if (callNow) func.apply(context, args)
	}
}

export default config;