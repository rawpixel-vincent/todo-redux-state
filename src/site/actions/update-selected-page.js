export const UPDATE_SELECTED_PAGE = 'UPDATE_SELECTED_PAGE';

export default function (newSelectedPage) {
	return (dispatch, getState) => {
		const { selectedPage } = getState();
		if (selectedPage !== newSelectedPage) {
			dispatch({ type: UPDATE_SELECTED_PAGE, selectedPage: newSelectedPage });
		}
	};
}
