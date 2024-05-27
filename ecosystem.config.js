module.exports = {
    apps: [
      {
        name: "proteinTokyo",
        script: "node",
        args: "/c npm run start:https",
        env: {
          NODE_ENV: "production",
          HTTPS: "true"
        }
      }
    ]
  }
  