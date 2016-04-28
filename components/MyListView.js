import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

class RNPlayground extends Component {

  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4'])
    }
  }

  renderRow(rowData) {
    <Text style={styles.listContent}>{rowData}</Text>
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow()}
      />
    )
  }
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
      borderColor: '#0099AA',
      borderWidth: 5,
      marginTop: 30
    },
    listContent: {
      flex: 1,
      borderColor: '#AA0099',
      borderWidth: 2,
      textAlign: 'center',
      fontSize: 24,
    },
    row: {
      flex: 1,
      fontSize: 24,
      padding: 42,
      borderWidth: 1,
      borderColor: '#DDDDDD'
    }
})

module.exports = RNPlayground
