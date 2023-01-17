/* eslint-disable @typescript-eslint/no-var-requires */
require('esbuild').build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  outfile: './dist/output.js',
  minify: true,
  platform: 'node'
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1))
