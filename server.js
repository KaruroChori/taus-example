import { taus } from '@taus-services/taus'

taus({db: {dialect: 'sqlite', storage: './db'}, update:{base:"/update/",protocol:"http"}, storage:{base:"/store/",protocol:"http"}})
