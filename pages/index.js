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
              I'm a developer at <a href="https://rapiddg.com">Rapid Development Group</a>. But you already knew that, didn't you? I like to learn. I like to program. I like to play guitar. I have a wife and two kids. 
              <br/>
              <br/>
              Tell me something about yourself. <a href="https://twitter.com/messages/compose?recipient_id=40870431">Go on, click here.</a>
              <br/>
              <br/>
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
