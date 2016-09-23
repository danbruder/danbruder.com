import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import dan from '../images/dan.jpg'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import moment from 'moment'
import '../css/styles.css'

export default class Index extends React.Component {
  render () {
    const pageLinks = []
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date'))
    .filter(page => {
      return access(page, 'file.ext') === 'md' && page.path != "/404.html"
    })
    .reverse()
    .slice(0, 5);

    sortedPages.forEach((page) => {
      const title = access(page, 'data.title') || page.path
      pageLinks.push(
        <div className="blog-list-item" key={page.path} >
          <h3>
            <Link to={prefixLink(page.path)}>
              {title}
            </Link>
          </h3>
          <div >
            {moment(page.data.date).calendar()}
          </div>
          <div >
            {page.data.summary}
          </div>
        </div>
      )
    })
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
              <h3>Here's what I'm writing about:</h3>
              {pageLinks}
              <h3>You can also find me here:</h3>
              <ul>
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
