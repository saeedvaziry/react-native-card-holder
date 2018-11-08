import { StyleSheet, Dimensions } from 'react-native'

export const Colors = {
  WHITE: '#FFFFFF',
  PRIMARY: '#691A67',
  SECONDARY: '#b9b9b9',
  GRAY: '#F1EEFC',
  DARK_GRAY: '#d8d5e2',
}

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    justifyContent: 'flex-start'
  },
  content: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: Colors.WHITE,
    padding: 30,
    margin: 30,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Samim',
    marginBottom: 10
  },
  input: {
    fontFamily: 'Samim',
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 20,
    borderColor: Colors.DARK_GRAY,
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8
  },
  header: {
    backgroundColor: Colors.PRIMARY,
  },
  headerTitle: {
    color: Colors.WHITE,
    fontFamily: 'Samim',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500'
  },
  navigatorLabel: {
    fontFamily: 'Samim',
    textAlign: 'center',
    justifyContent: 'center'
  },
  indicator: {
    width: Dimensions.get('window').width,
    padding: 9,
  }
})