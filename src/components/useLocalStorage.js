import React from "react";

const initialState =  ( { initialValue } ) => ({
	sincronizedItem: true,
	loading: true,
	error: false,
	item: initialValue
});

const actionTypes = {
	ERROR: 'ERROR',
	SUCCESS: 'SUCCESS',
	SAVE: 'SAVE',
	SINCRONIZE: 'SINCRONIZE',
}

const reducerObject = ( state, payload ) => ({
	[actionTypes.ERROR]: {
		...state, 
		error: true
	},
	[actionTypes.SUCCESS]: {
		...state, 
		loading: false,
		error: false,
		sincronizedItem: true,
		item: payload
	},
	[actionTypes.SINCRONIZE]: {
		...state, 
		loading: true,
		sincronizedItem: false,
	},
	[actionTypes.SAVE]: {
		...state, 
		item: payload
	}
});

const reducer = (state, action) => {
	return reducerObject( state, action.payload )[action.type] || state;
}

function useLocalStorage( itemName, initialValue) {

	const [ state, dispatch ] = React.useReducer( reducer, initialState({ initialValue }) );
	const {
		sincronizedItem,
		loading,
		error,
		item
	} = state;

	// ACTION CREATORS
	const onError = (error) => dispatch( { type: actionTypes.ERROR, payload: error });
	const onSuccess = (item) => dispatch( { type: actionTypes.SUCCESS, payload: item });
	const onSave = (item) => dispatch( { type: actionTypes.SAVE, payload: item });
	const onSincronize = () => dispatch( { type: actionTypes.SINCRONIZE });

	React.useEffect( () => {
		setTimeout( () => { 
			try{
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if(!localStorageItem) {
					localStorage.setItem( itemName, JSON.stringify(initialValue) );
					parsedItem = [];
				} else {
					parsedItem = JSON.parse(localStorageItem);

				}
				onSuccess(parsedItem)
			} catch(error) {
				onError( error );
			}
		}, 3000);
	},[sincronizedItem])

	const saveItem = (newItem) => {
		try{
		localStorage.setItem( itemName, JSON.stringify(newItem) );
		onSave(newItem)
		//setItem(newItem);
		}catch( error) {
			onError( error );
		}
	}

	const sincronizeItems = () => {
		onSincronize();
	}

	return {
		item,
		saveItem,
		loading,
		error,
		sincronizeItems
	}
}

export {useLocalStorage};