import Header from '../components/Header'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD',
// }
const theme = {
  fontFamily: {
    sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, monospace',
  },
  colors: {
    text: '#ccc',
    background: '#333',
    link: '#1eaaf1',
    linkHover: '#0d8ecf',
    border: '#ddd',
    warning: '#fff3cd',
    success: '#d4edda',
  },
}

const Layout = (props: any) => {
  return (
    // <div style={layoutStyle}>
    <div>
      <div className="Container-root Container-maxWidthMd">
        <Header title="aaaa" />
      </div>
      <div className="Container-root Container-maxWidthMd">
        {props.children}
      </div>
      <style jsx global>{`
        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
        }
        a {
          color: ${theme.colors.link};
        }
        a:hover {
          color: ${theme.colors.linkHover};
        }
        .Container-maxWidthMd {
          max-width: 960px;
        }
        .Container-root {
          width: 100%;
          box-sizing: border-box;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
        }
      `}</style>
    </div>
  )
}
export default Layout
