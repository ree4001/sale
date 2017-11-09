const CalculateCommission = (extraApp, noEextraApp) => {
  let commissionNonExtra = 0
  let commissionExtra = 0
  if (extraApp < 0) { 
    commissionExtra = 0 
  } else commissionExtra = extraApp * 500
  if (noEextraApp < 0) { 
    commissionNonExtra = 0 
  } else if (noEextraApp <= 40) {
    commissionNonExtra = noEextraApp * 300
  } else if (noEextraApp <= 80) {
    commissionNonExtra = ((40 * 300) + ((noEextraApp - 40) * 350))
  } else {
    commissionNonExtra = ((40 * 300) + (40 * 350) + (((noEextraApp - 40) * 400)))
  }
  return (commissionNonExtra + commissionExtra)
}

export const AddCommaToNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default CalculateCommission