import TrafficLight from '@/components/TrafficLight'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <TrafficLight turnState="go" straightState="go" />
    </main>
  )
}
