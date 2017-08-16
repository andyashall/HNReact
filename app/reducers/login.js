const initialState = {}

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_USER':
			return action.data
		case 'REMOVE_USER': 
			return {}
		default:
			return state
	}
}

export default user