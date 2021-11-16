interface IAction<T = any, P = any> {
    type: T;
    payload: P;
}

export default IAction;
