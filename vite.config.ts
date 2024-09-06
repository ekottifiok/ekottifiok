import {resolve} from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = process.cwd()
const handleRoot = (path: string) => resolve(process.cwd(), path)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": handleRoot("components"),
      "@public": handleRoot("public"),
    }
  },
  plugins: [react()],
})
