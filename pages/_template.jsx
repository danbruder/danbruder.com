import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Container
          style={{
            maxWidth: 960,
            paddingTop: 0,
          }}
          className="content-wrapper"
        >
        <div className="content">
          {this.props.children}
        </div>
        </Container>
      </div>
    )
  },
})
