import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {carsService} from "../../services/car.service";


const initialState = {
    cars: [],
    carForUpdate: null,
    deleteCar: null,
    visibility: null,
    errors: null,
    isLoading: false

};
// console.log(current(initialState.carForUpdate))

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
            // console.log(data)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.update(id, car)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)

const createNewCar = createAsyncThunk(
    'carSlice/createNewCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carsService.deleteById((id))
            return id
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: ((state, action) => {
            state.carForUpdate = action.payload
        }),
        setVisibility: ((state, action) => {
            state.visibility = action.payload
        })
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.pending, state => {
                state.isLoading = true
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
                state.isLoading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(currentCar, action.payload)
                state.carForUpdate = null
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                const index = state.cars.findIndex(value => value.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(createNewCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1)
                // console.log(type)
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })

});

const {reducer: carReducer, actions: {setCarForUpdate, setVisibility}} = carSlice;
const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    createNewCar,
    setVisibility,
    deleteById,

};

export {carReducer, carActions}

