import Head from 'next/head'

const SelectMontAndYear = (props) => {
  return (
    <div className="is-groped">
      <Head>
        <link href="/static/datestyles.css" rel="stylesheet" />
      </Head>
      <label> เดือน: </label>
      <select id="Month" name="Month" onChange={props.setMonth} value={props.dateRange.month}>
        <option value="1">มกราคม</option>
        <option value="2">กุมภาพันธ์</option>
        <option value="3">มีนาคม</option>
        <option value="4">เมษายน</option>
        <option value="5">พฤษภาคม</option>
        <option value="6">มิถุนายน</option>
        <option value="7">กรกฎาคม</option>
        <option value="8">สิงหาคม</option>
        <option value="9">กันยายน</option>
        <option value="10">ตุลาคม</option>
        <option value="11">พฤศจิกายน</option>
        <option value="12">ธันวาคม</option>
      </select>
      <label style={{ paddingLeft : '30px' }}> ปี: </label>
      <select id="Month" name="Month" onChange={props.setYear} value={props.dateRange.year}>
        <option value="2015">2558</option>
        <option value="2016">2559</option>
        <option value="2017">2560</option>
        <option value="2018">2561</option>
        <option value="2019">2562</option>
        <option value="2020">2563</option>
        <option value="2021">2564</option>
        <option value="2022">2565</option>
        <option value="2023">2566</option>
      </select>
    </div>
  )
}

export default SelectMontAndYear