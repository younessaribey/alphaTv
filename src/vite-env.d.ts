/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_SHEETS_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
