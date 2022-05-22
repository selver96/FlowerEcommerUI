import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionsCreators from '../redux/Actions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreators, dispatch);
}