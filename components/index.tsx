import { NextComponentType } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component: NextComponentType<Props> = (props: any) => (
  <div className={props.className}>Welcome to next.js!</div>
  // <div>Welcome to next.js!</div>
)

const StyledComponent = styled(Component)`
  color: #f00;
`

export default StyledComponent
