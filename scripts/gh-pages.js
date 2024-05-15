/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path')

const ghpages = require('gh-pages')

ghpages.publish(
  path.resolve(__dirname, '../docs/.vitepress/dist'),
  {
    repo: `https://${process.env.GH_TOKEN}@github.com/Limoer96/pack-template.git`,
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
