import { auth, signOut } from '@/auth';

export default async function BoardsPage()
{
  const session = await auth()
  return (
    <div>
      <h1>Hello Boards Page</h1>
      <p>
        {JSON.stringify(session)}
      </p>


      <form action={async () =>
      {
        "use server"
        await signOut()
      }}>
        <button type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
}