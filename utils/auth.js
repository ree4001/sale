import { store } from '../store/index'

export const getAccessToken = () => (
  store.getState().auth.id
)