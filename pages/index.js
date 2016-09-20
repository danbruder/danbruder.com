import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import dan from '../images/dan.jpg'
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
          }}>
            <div style={{
              marginRight: "20px"
            }}>
                <img style={{borderRadius: "50%", width: 100}} src={dan}/>
              </div>
              <div>
                <h1>
                  Hey. I'm Dan. 
                </h1>
              </div>
            </div>
            <div>
              <h3>Here's some links:</h3>
              <ul>
                <li><Link to="/blog/">Blog</Link></li>
                <li><a href="https://twitter.com/danbruder">Twitter</a></li>
                <li><a href="https://github.com/danbruder">Github</a></li>
                <li><a href="https://rapiddg.com">Rapid Development Group</a></li>
              </ul>
            </div>
        </div>
      </DocumentTitle>
    )
  }
}
