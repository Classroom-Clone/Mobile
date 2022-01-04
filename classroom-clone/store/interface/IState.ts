import { AuthState } from './auth';
import { ClassroomState } from './classroom';

interface IState {
    auth: AuthState;
    classroom: ClassroomState;
}

export default IState;
