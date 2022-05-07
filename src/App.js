import { lazy, Suspense } from 'react'
const Quiz = lazy(() => import('./Components/Quiz')); 

function App() {
  return (
    <>
    <Suspense fallback={<h2>...loading</h2>}>
      <Quiz />
    </Suspense>
    </>
  )
}

export default App
