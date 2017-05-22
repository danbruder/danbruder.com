import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import moment from 'moment'
import '../css/styles.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}>
          <div>
            <img style={{
              borderRadius: "50%",
              width: 100,
              display: "block",
              margin: "0px auto 20px auto",
              border: "2px solid black"
            }} src="/dan.jpg"/>
              <h1> Hey. I'm Dan.  </h1>
            </div>
            </div>
            <div>
            </div>
        </div>
      </DocumentTitle>
    )
  }
}
