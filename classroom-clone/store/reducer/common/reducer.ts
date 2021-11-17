import { CommonState } from '../../interface/CommonInterface';
import IAction from '../../interface/IAction';
import commonInitialState from '../../initialState/CommonInitialState';
import ActionsEnums from '../../../helpers/enums/ActionEnums';

export default function reducerCommon(
    state: CommonState = commonInitialState,
    action: IAction<ActionsEnums>
): CommonState {
    switch (action.type) {
        case ActionsEnums.LOADING:
            return { ...state, loading: !state.loading };
        case ActionsEnums.SAVING:
            return { ...state, saving: !state.saving };
        case ActionsEnums.PROCESSING:
            return { ...state, processing: !state.processing };
        default:
            return state;
    }
}
