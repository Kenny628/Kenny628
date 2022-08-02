import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FloatingAction} from 'react-native-floating-action';
let common = require('../../CommonData.js');
let SQLite = require('react-native-sqlite-storage');
const actions = [
  {
    text: 'Add',
     icon: require('../../icons/add_icon.png'),
    name: 'add',
    position: 1,
  },
];
export default class HomeScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     students: [],
  //   };
  //   this._query = this._query.bind(this);
  //   this.db = SQLite.openDatabase(
  //     {name: 'studentdb', createFromLocation: '~db.sqlite'},
  //     this.openCallback,
  //     this.errorCallback,
  //   );
  // }
  // componentDidMount() {
  //   this._query();
  // }
  // _query() {
  //   this.db.transaction(tx =>
  //     tx.executeSql('SELECT * FROM students ORDER BY name', [], (tx, results) =>
  //       this.setState({students: results.rows.raw()}),
  //     ),
  //   );
  // }
  // openCallback() {
  //   console.log('database open success');
  // }
  // errorCallback(err) {
  //   console.log('Error in opening the database: ' + err);
  // }



constructor(props){
        super(props)
        this.state = {
            booking : [],
        };
        
        this.db = SQLite.openDatabase({name : 'booking', createFromLocation : '~db.sqlite'}, this.openCallback, this.errorCallback);
        this._query = this._query.bind(this),
        this.openCallback = this.openCallback.bind(this),
        this.errorCallback = this.errorCallback.bind(this)
    }
        componentDidMount(){
            this._query()
        }

        openCallback(){
            console.log("database opened successfully.");
        }

        errorCallback(err){
            console.log(err);
        }

        _query(){
            this.db.transaction(tx=>tx.executeSql('SELECT * FROM booking ORDER BY movie', [], (tx,results) => {console.log(results)}))
    }
  render() {
    return (
      
      <View style={styles.container}>
        <Text>asj</Text>
        {/* <FlatList
          data={this.state.students}
          extraData={this.state}
          showsVerticalScrollIndicator={true}
          renderItem={({item}) => (
            <TouchableHighlight
              underlayColor="pink"
              onPress={() => {
                this.props.navigation.navigate('ViewScreen', {
                  id: item.id,
                  headerTitle: item.name,
                  refresh: this._query,
                });
              }}>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>
                  {common.getValue(common.states, item.state)}
                </Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={item => {
            item.id.toString();
          }}
        />
        <FloatingAction
          actions={actions}
          overrideWithAction={true}
          color={'#a80000'}
          onPressItem={() => {
            this.props.navigation.navigate('CreateScreen', {
              refresh: this._query,
            });
          }}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  item: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 18,
  },
});