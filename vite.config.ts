import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { createHtmlPlugin } from 'vite-plugin-html'
// @ts-ignore
// import html from 'rollup-plugin-html';
import path from 'path'; // 有时候不识别，是因为path是node环境下的，commonJs,vite使用的是es;所有添加npm install @types/node --save-dev
// import typescript from '@rollup/plugin-typescript';


export default defineConfig({
  server: {
    proxy: {
      '/news/api': {
        target: 'https://api.yiikaotong.com', // 目标服务器地址
        changeOrigin: true, // 是否改变源地址
      },
      // 可以添加更多的代理规则...
    }
  },
  plugins: [
    vue(),
    // createHtmlPlugin({
    //   minify: true,
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext', // 支持的JavaScript版本
    outDir: 'dist', // 构建时输出目录
    // assetsDir: 'assets', // 放置生成的静态资源的目录
    minify: 'terser', // 压缩方式
    terserOptions: {
      compress: {
        drop_console: false, // 是否删除所有的console语句
      },
    },
    // 是否为生产环境构建生成source map
    sourcemap: false,
    // 构建后是否进行代码分割
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
      },
    },
  },
  // build: {
  //   // lib: {
  //   //   entry: '/src/main.ts',
  //   //   name: 'iife',
  //   //   formats: ['es']
  //   // },
  //   rollupOptions: {
  //     input: 'src/main.ts',
  //     plugins: [
  //       html({
  //         template: './src/index.html', // HTML模板文件
  //       }),
  //       typescript({
  //         tsconfig: './tsconfig.json', // TypeScript配置文件
  //       }),
  //     ],
  //     // external: ['vue'],
  //     // output: {
  //     //   globals: {
  //     //     vue: 'Vue'
  //     //   }
  //     // }
  //   },
  // },
  base: './',
})
