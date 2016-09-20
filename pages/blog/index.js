import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'

export default class extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
                              ).reverse()
                              sortedPages.forEach((page) => {
                                if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
                                  const title = access(page, 'data.title') || page.path
                                  pageLinks.push(
                                    <li key={page.path} style={style.post}>
                                      <Link style={style.Link} to={prefixLink(page.path)}>
                                        {title}
                                      </Link>
                                      <div style={style.date}>
                                        {moment(page.data.date).calendar()}
                                      </div>
                                      <Summary body={page.data.body} />
                                    </li>
                                  )
                                }
                              })
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
        </div>
      </DocumentTitle>
    )
  }
}
