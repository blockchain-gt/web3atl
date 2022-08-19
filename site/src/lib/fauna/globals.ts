import faunadb from 'faunadb'

interface IImportMetaEnv {
  VITE_PUBLIC_FAUNA_KEY: string
}

export interface IFaunaRef {
  ref: {
    "@ref": {
      id: number,
      collection: {
        "@ref": {
          id: string,
          collection: {
            "@ref": {
              id: string
            }
          }
        }
      }
    }
  }
}

// The difference between DBPool and Pool is primarily use of ethers BigNumber
export interface IEmail {
  email: string
}

const env: IImportMetaEnv = {
  VITE_PUBLIC_FAUNA_KEY: import.meta.env.VITE_PUBLIC_FAUNA_KEY
}

export const q = faunadb.query
export const client = new faunadb.Client({
  secret: env.VITE_PUBLIC_FAUNA_KEY,
  domain: "db.fauna.com",
})
