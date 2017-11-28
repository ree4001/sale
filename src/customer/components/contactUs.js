import React from 'react'

const ContacAs = () => {
  return (
    <div className="contactMap">
      <div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <img style={{ marginTop: "20px" }} src="/static/location.png" />
              </td>
              <td rowSpan="2" width="30%">
                <div style={{ margin: '30px 0px 0px 30px' }}>
                  <p style={{fontSize:"25px", marginTop:"0"}}> Contact Us </p>
                  <p style={{margin:"0"}}> 183 ซอยลาดพร้าว71 แขวงสะพานสอง </p>
                  <p style={{margin:"0"}}>เขตวังทองหลาง กทม. 10310</p>
                  <p style={{marginBottom:"0"}}> แผนกลูกค้าสัมพันธ์ : </p>
                  <p style={{margin:"0"}}> โทร ​(+662) 153 - 9580, (+6697) 240 - 2251 </p>
                  <p> ไลน์ไอทีทีพี: @ittp </p>
                </div>
              </td>
            </tr>
            <tr>
              <td width="70%">
                <iframe allowTransparency="true" frameBorder="0" scrolling="no" style={{ width: "98%", height: "150px", marginTop: "10px", marginBottom: "40px" }} src="//www.weebly.com/weebly/apps/generateMap.php?map=google&amp;elementid=392271394606311815&amp;ineditor=0&amp;control=3&amp;width=auto&amp;height=150px&amp;overviewmap=0&amp;scalecontrol=0&amp;typecontrol=0&amp;zoom=15&amp;long=100.6072877&amp;lat=13.7951737&amp;domain=www&amp;point=1&amp;align=1&amp;reseller=false"></iframe>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ContacAs
