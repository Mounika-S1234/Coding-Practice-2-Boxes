// index.js

const Box = props => {
  const {size, backgroundColor} = props

  return (
    <div
      className='box'
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
      }}
    />
  )
}

const App = () => {
  return (
    <div className='app'>
      <h1 className='app-heading'>Boxes Page</h1>
      <div className='boxes-container'>
        <Box size='200px' backgroundColor='#fbbf24' />
        <Box size='150px' backgroundColor='#38bdf8' />
        <Box size='100px' backgroundColor='#ec4899' />
        <Box size='75px' backgroundColor='#0f172a' />
        <Box size='50px' backgroundColor='#ffffff' />
      </div>
    </div>
  )
}

const element = <App />

ReactDOM.render(element, document.getElementById('root'))
