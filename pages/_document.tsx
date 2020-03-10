import Document, { DocumentContext } from 'next/document'
import DefaultLayout from '../layouts'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return <DefaultLayout />
  }
}

export default MyDocument
