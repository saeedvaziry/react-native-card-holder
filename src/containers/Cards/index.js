import React, { Component } from 'react'
import { Text, Animated, BackHandler, AsyncStorage, View, ActivityIndicator, FlatList, TouchableNativeFeedback, RefreshControl, Image, Share } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import Button from '@components/Button'

import { get } from '@actions/CardAction'

import { bankNames, bankLogos } from '@config/banks'
import { GlobalStyles, Colors } from '@config/styles'
import styles from './styles'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentDidMount = () => {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleBackPress)
    this.props.dispatchGet()
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress)
  }

  _handleBackPress = () => {
    BackHandler.exitApp()
    return true
  }

  _keyExtractor = (item, index) => index.toString()

  _onRefresh = () => {
    this.props.dispatchGet()
  }

  convertToCardFormat = (value) => {
    let result = ''
    let valueArray = value.split('')
    let resultArray = []
    let counter = 0
    let temp = ''
    for (let i = 0; i < valueArray.length; i++) {
      temp += valueArray[i]
      counter++
      if (counter === 4) {
        resultArray.push(temp)
        counter = 0
        temp = ''
      }
    }
    if (counter > 0) {
      resultArray.push(temp)
    }
    for (let i = 0; i < resultArray.length; i++) {
      if (i > 0 && resultArray[i - 1].length === 4) {
        result += ' '
      }
      result += resultArray[i]
    }

    return result
  }

  share = (item) => {
    Share.share({
      message: item.card_number + "\n" + item.name + "\n" + 'بانک ' + bankNames[item.bank],
    }, {
        dialogTitle: 'به اشتراک گذاری شماره کارت',
      }
    )
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <Animated.ScrollView
          contentContainerStyle={[GlobalStyles.content, styles.content]}
          ref={ref => this.scrollView = ref}>
          {
            !this.props.card.loaded && (
              <ActivityIndicator size="large" color={Colors.PRIMARY} />
            )
          }
          {
            this.props.card.loaded && this.props.card.cards.length > 0 && (
              <FlatList
                style={{ position: 'relative' }}
                data={this.props.card.cards}
                keyExtractor={this._keyExtractor}
                renderItem={({ item, index }) =>
                  <View style={styles.card}>
                    <View>
                      <Image source={bankLogos[item.bank]} style={styles.bankLogo} />
                      <Text style={styles.cardNumber}>{this.convertToCardFormat(item.card_number)}</Text>
                    </View>
                    <View>
                      <Text style={styles.cardName}>بانک {bankNames[item.bank]}</Text>
                      <Text style={styles.cardName}>{item.name}</Text>
                      <Icon
                        style={styles.icon}
                        name='md-share'
                        size={20}
                        onPress={() => this.share(item)}
                        color={Colors.SECONDARY} />
                    </View>
                  </View>
                }
              />
            )
          }
          {
            this.props.card.loaded && this.props.card.cards.length == 0 && (
              <View style={[styles.card, styles.noCard]}>
                <Text style={styles.noCard}>هنوز هیچ کارتی ثبت نکرده اید</Text>
              </View>
            )
          }
        </Animated.ScrollView>
        <Button
          submitLoader={false}
          icon="md-add"
          onPress={() => this.props.navigation.navigate('AddCard')}
          text="ثبت کارت جدید"
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  dispatchGet: () => get()
}

const mapStateToProps = state => ({
  card: state.card
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)