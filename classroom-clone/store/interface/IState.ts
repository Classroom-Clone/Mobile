import { AuthState } from './auth';
import { ClassroomState } from './classroom';
import { CommentState } from './comment';

interface IState {
    auth: AuthState;
    classroom: ClassroomState;
    comment: CommentState;
}

export default IState;
