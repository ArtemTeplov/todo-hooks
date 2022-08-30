import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri';

import styles from './TodosActions.module.css';

function TodosActions( {deleteComplited, resetTodos, complitedTodosExist}) {
    return (
        <div className={styles.TodosActionsContainer}>
            <Button title='Reset todos' onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title='Clear completed todos' onClick={deleteComplited} disabled={!complitedTodosExist}><RiDeleteBin2Line/></Button>
        </div>
    )
}

export default TodosActions;