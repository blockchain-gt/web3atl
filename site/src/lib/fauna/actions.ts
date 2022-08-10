import { client, q, type IEmail } from "./globals";


export interface IEmailResponse {
  data: IEmail[]
}



export const getEmail = async (_email: string) : Promise<IEmailResponse> => {
  const res: IEmailResponse = await client.query(
    q.Map(
      q.Paginate(
        q.Match(q.Index("emailsByEmail"), _email)
      ),
      q.Lambda(
        "email",
        q.Get(q.Var("email"))
      )
    )
  )
  return res
}


export const postEmail = async (_email: string) => {
  client.query(
    q.Create(
      q.Collection('Emails'),
      { data: 
        {
          email: _email
        }
      },
    )
  )
  .then((ret) => console.log(ret))
  .catch((err) => console.error(
    'Error: [%s] %s: %s',
    err.name,
    err.message,
    err.errors()[0].description,
  ))
}