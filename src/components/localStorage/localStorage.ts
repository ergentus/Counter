export const saveStateValue = (key: string, count: string) => {
	localStorage.setItem(key, JSON.stringify(count))
}

export const loadStateValue = (key: string) => {
	const value = localStorage.getItem(key)
	if (value) return JSON.parse(value)
}