import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html-transformer'
import Pages from 'vite-plugin-pages'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const filenamePath =
    process.env.VITE_MODE === 'production'
      ? '../layout/index.ejs'
      : 'index.html'
  const templatePath =
    process.env.VITE_MODE === 'production'
      ? 'templates/index_prod.html'
      : 'templates/index.html'

  return defineConfig({
    build: {
      outDir: 'source',
      assetsDir: 'static',
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            let extType = assetInfo.name.split('.').at(1)
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            }
            return `static/${extType}/[hash][extname]`
          },
          chunkFileNames: 'static/js/[hash].js',
          entryFileNames: 'static/js/[hash].js'
        },
        plugins: []
      }
    },
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom insert position
         * @default: body-last
         */
        // inject: 'body-last' | 'body-first',

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__'
      }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.ts',
        filename: filenamePath,
        template: templatePath
      }),
      vue(),
      Pages({})
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000/api',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        },
        '/assets': {
          target: 'http://localhost:4000/assets',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/assets/, '')
        },
        '/ImageUrl': {
          target: 'https://www.dmoe.cc/random.php',
          changeOrigin: true,
          pathRewrite: { '^/ImageUrl': '' },
          secure: false,
          onProxyReq: (proxyReq, req, res) => {
            console.log('代理转发路径:', proxyReq.path) // 验证路径
          },
          onProxyRes: proxyRes => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*' // 强制跨域
          }
        },
        '/wallpaper': {
          target: 'https://v2.xxapi.cn/api/random4kPic?',
          changeOrigin: true,
          pathRewrite: { '^/ImageUrl': '' },
          secure: false,
          onProxyReq: (proxyReq, req, res) => {
            console.log('代理转发路径:', proxyReq.path) // 验证路径
          },
          onProxyRes: proxyRes => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*' // 强制跨域
          }
        }
      }
    }
  })
}
