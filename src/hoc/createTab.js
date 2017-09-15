import ui from 'redux-ui'
import Tab from '../components/tab'

const createTab = (key, activeTab = 0) => ui({
  key,
  state: {
    activeTab,
  },
})(Tab)

export default createTab
