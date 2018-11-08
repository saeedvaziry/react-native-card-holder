import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '@config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    overflow: 'hidden'
  },
  text: {
    fontFamily: 'Samim',
    padding: 15,
    textAlign: 'center',
    fontSize: 15,
    color: Colors.WHITE
  },
  indicator: {
    padding: 9,
  }
});

export default styles