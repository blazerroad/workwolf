export interface IReducerSerice<TState> {
    state: TState
    acceptableActions: Array<string>

    isAcceptable(actionName: string): boolean;
    reduce(state: TState, action: any): TState;
}