import Cookies from 'universal-cookie'

const getcookies = () => {
  const cookies = new Cookies()
  const username = cookies.get('username')
  return (username)
}
export const getcookiesCitizenId = () => {
  const cookies = new Cookies()
  const citizenId = cookies.get('citizenId')
  return (citizenId)
}

export default getcookies