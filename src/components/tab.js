/* eslint-disable jsx-a11y/no-static-element-interactions */
// To allow onClick on <li>
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Link  from 'next/link'
import cx from 'classnames'


const Tab = ({ tabs, ui, updateUI}) => (
  <div style={{ display: 'inline-block'}}>
    <Head>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <div className="statusmenu" style={{ display: 'inline' }}>
      <ul>
        {tabs.map((tab, index) => {
          const key = tab.key ? tab.key : index
          return (
            <li
              key={key}
              className={cx({
                'is-active': key === ui.activeTab,
              })}
              onClick={() => updateUI('activeTab', key)}
            >
              {tab.linkTo
                ? <Link href={tab.linkTo}>{tab.label}</Link>
                : <a>{tab.label}</a>
              } 
            </li>
          )
        })}
      </ul>
    </div>
    {tabs.map((tab, index) => (
      <div key={index} style={{ display: ui.activeTab === index ? 'block' : 'none' }}>
        {tab.content}
      </div>
    ))}
  </div>
)

// Tab.propTypes = {
//   // tabs: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   //     label: PropTypes.string.isRequired,
//   //     content: PropTypes.node,
//   //     style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   //   }),
//   // ),
//   tabs: PropTypes.arrayOf(PropTypes.object),
//   ui: PropTypes.shape({
//     activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   }),
//   updateUI: PropTypes.func.isRequired,
//   inlineStyle: PropTypes.bool,
// }

Tab.defaultProps = {
  inlineStyle: false,
}

export default Tab
