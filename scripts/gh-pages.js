/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path')

const ghpages = require('gh-pages')

ghpages.publish(
  path.resolve(__dirname, '../docs-dist'),
  {
    branch: 'main',
    repo: `https://${process.env.GH_TOKEN}@github.com/hjfruit/bailu-doc.git`,
    dest: '0.2.x',
    remove: '0.2.x',
  },
  function (err) {
    if (err) {
      console.log(err)
      throw err
    } else {
      console.log('ok')
    }
  },
)
