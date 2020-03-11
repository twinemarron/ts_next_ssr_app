import { NextPage } from 'next'
import Layout from '../components/Layout'
import Idx from '../components/index'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <Idx />
  </Layout>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
