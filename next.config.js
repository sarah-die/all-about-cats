/** @type {import('next').NextConfig} */
const nextConfig = {};

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix =undefined
let basePath = undefined

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `.`
  basePath = `/${repo}`
}


module.exports = {
  basePath,
  assetPrefix
};
