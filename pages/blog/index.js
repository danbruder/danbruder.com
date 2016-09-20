import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import moment from 'moment'

export default class extends React.Component {
  render () {
    const pageLinks = []
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && page.path != "/404.html") {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <div key={page.path} >
            <Link to={prefixLink(page.path)}>
              {title}
            </Link>
            <div >
              {moment(page.data.date).calendar()}
            </div>
            <div >
              {page.data.summary}
            </div>
          </div>
        )
      }
    })
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          {pageLinks}
        </div>
      </DocumentTitle>
    )
  }
}
