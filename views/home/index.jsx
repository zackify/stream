import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import items from 'items'

class Index extends React.Component{
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    let socket = io.connect(process.env.HOST);
    socket.on('activity', item => this.setState({ items: [item, ...this.state.items]}))
  }

  render() {
    console.log(this.state.items)
    return (
      <div style={styles.container}>
        {this.state.items.map((item, index) => React.createElement(items[item.component], {key: item.id || index, ...item}))}
      </div>
    )
  }
}

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 720,
    padding: '1em'
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))