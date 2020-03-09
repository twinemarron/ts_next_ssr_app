import Link from 'next/link'

type Props = {
  title?: string
}

const linkStyle = {
  marginRight: 15,
}

const Header: React.FC<Props> = props => {
  return (
    <div className="header">
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <Link href="/">
          {
            // <a style={linkStyle}>Home</a>
          }
          <a>Home</a>
        </Link>
        <Link href="/about">
          {
            // <a style={linkStyle}>About</a>
          }
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          font-family: 'Arial';
          color: #ddd;
        }
      `}</style>
    </div>
  )
}
export default Header
