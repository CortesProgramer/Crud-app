import { types } from "../actions/crudActions"

export const initialDb = [
    {
        id: 1,
        name: "luffy",
        nickname: "sombrero de paja"
    },
    {
        id: 2,
        name: "zoro",
        nickname: "cazador de piratas"
    },
    {
        id: 3,
        name: "nami",
        nickname: "gata ladrona"
    },
    {
        id: 4,
        name: "sanji",
        nickname: "pierna negra"
    },
    {
        id: 5,
        name: "usopp",
        nickname: "el mentiroso"
    },
    {
        id: 6,
        name: "tony chopper",
        nickname: "amante de algodon de azucar"
    },
    {
        id: 7,
        name: "nico robin",
        nickname: "mujer demonio"
    },
    {
        id: 8,
        name: "franky",
        nickname: "cyborg"
    },
    {
        id: 9,
        name: "brook",
        nickname: "el musico"
    }

]

export const initialState = {
    db: initialDb,
    dataToEdit: null
}

export function reducer(state, action) {
    switch(action.type) {
        case types.create:
            return {...state, db: [...state.db, action.payload]}
        case types.update:
            return {...state, db: state.db.map(element => element.id === action.payload.id ? action.payload : element)}
        case types.delete:
            const isDelete = window.confirm("estas seguro de eliminarlo?") 
                if(isDelete) {
                    return {...state, db: state.db.filter(element => element.id !== action.payload)}
                } else {
                    return state;
                }

        default:
            return state;
    }
}