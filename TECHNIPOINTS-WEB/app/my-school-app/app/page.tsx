import AuthComponent from '../components/auth-component'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <AuthComponent />
    </main>
  )
}

