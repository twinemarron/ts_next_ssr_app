import { useSelector, useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { increment, decrement } from '../store/counter/actions'

console.log('useSelector: ', useSelector)

export default function Counter() {
  const dispatch = useDispatch()
  console.log('dispatch: ', dispatch)
  const currentCount = useSelector((state: any) => {
    return state.counter
  })
  return (
    <Layout>
      <p onClick={() => dispatch(decrement())}>This is the Counter page</p>
      <p
        onClick={() => {
          console.log('click')
          dispatch(increment())
        }}
      >
        {currentCount.count}
      </p>
    </Layout>
  )
}
