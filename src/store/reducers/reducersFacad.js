import { ReducerServices } from './services/ReducerService'

export const playerReducer = (state, action) => {
    return ReducerServices.instance().playerReducer.reduce(state, action)
}