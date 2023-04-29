export const saveStateValue = (key: string, count: string) => {
	localStorage.setItem(key, count)
}

export const loadStateValue = (key: string) => {
	const value = localStorage.getItem(key)
	if (value) return value
}