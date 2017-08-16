const initialState = {}

const post = (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_POST':
			return action.data
		case 'REMOVE_POST': 
			return {}
		default:
			return state
	}
}

export default post