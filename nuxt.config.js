export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-awado.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,500,700' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '@/plugins/antd-variables.less', lang: 'less' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@bazzite/nuxt-netlify',
    '@nuxtjs/eslint-module',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'French',
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'fr'
      }
    ]
  ],
  env: {
    apiUrl: process.env.API_URL
  },
  netlify: {
    mergeSecurityHeaders: true,
    redirects: [{
      from: '/*',
      to: '/index.html',
      status: 200
    }]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend: function (config, {isDev, isClient}) {
      config.node = {
          fs: "empty"
      };
    },
    babel: {
      plugins: [['import', { libraryName: 'ant-design-vue' }, 'ant-design-vue'], 'istanbul']
    },
    loaders: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
