import { GetServerSideProps } from 'next'
import { prisma } from '../core/services/prisma'

export default function Home({ users }: any) {
  return (
    <>
      <main>
        {users.map((user: any) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany()

  console.log('users', users)
  return {
    props: {
      users
    }
  }
}
