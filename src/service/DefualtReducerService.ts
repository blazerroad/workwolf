import { IReducerSerice } from './IReducerSerice';

export class DefualtReducerService<TState> implements IReducerSerice<TState> {

    state: TState
    acceptableActions: Array<string>

    constructor(state: TState, acceptableActions: Array<string>) {
        this.state = state;
        this.acceptableActions = acceptableActions;
    }


    isAcceptable(actionName: string): boolean {
        return this.acceptableActions.some(t => t === actionName);
    }

    reduce(state: TState = this.state, action: any): TState {
        if (!action || !this.isAcceptable(action.typegit)) return state;
        return { ...state, [action.type]: action.entity }
    }

}