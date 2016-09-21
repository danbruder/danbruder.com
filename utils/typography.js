import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'
import lawtonTheme from 'typography-theme-lawton'

lawtonTheme.baseFontSize = '18px'
lawtonTheme.googleFonts = lawtonTheme.googleFonts.concat([
  {
    name: 'Alex Brush',
    styles: [
      '400',
    ],
  },
])

const typography = new Typography(lawtonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
