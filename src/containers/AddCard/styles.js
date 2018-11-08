import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '@config/styles'

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10
  },
  picker: {
    height: 45,
    marginBottom: 15,
    alignSelf: 'stretch',
    margin: 20,
  }
});

export default styles;