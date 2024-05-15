/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path')

const ghpages = require('gh-pages')

ghpages.publish(
  path.resolve(__dirname, '../docs/.vitepress/dist'),
  function (err) {
    if (err) {
      console.log(err)
      throw err
    } else {
      console.log('ok')
    }
  },
)
