import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { cartActions } from "@/services/redux/cart"
import { userInfoActions } from "@/services/redux/userInfo"

const allActions = {
  ...cartActions,
  ...userInfoActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}