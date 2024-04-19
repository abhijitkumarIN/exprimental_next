import { useSession, signIn, signOut } from "next-auth/react"

export default function Buttons() {
  const { data: session } = useSession()
  console.log(session , 'sesisonn f ff')
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('credentials',
      {
        email:'elnwopper@gmail.ocm',
        password:'4900400404',
        callbackUrl: `${window.location.origin}/account_page`, 
        redirect: false,
      }
    )}>Sign in</button>
    </>
  )
}