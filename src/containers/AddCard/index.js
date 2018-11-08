import React, { Component } from 'react'
import { Animated, BackHandler, View, Picker, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'

import Button from '@components/Button'
import Input from '@components/Input'

import { add } from '@actions/CardAction'

import { bankNames } from '@config/banks'

import { GlobalStyles } from '@config/styles'
import styles from './styles'

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add: {
        bank: null,
        name: null,
        card_number: null
      }
    }
  }

  componentDidMount = () => {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleBackPress)
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress)
  }

  _handleBackPress = () => {
    const { goBack } = this.props.navigation
    goBack()
    return true
  }

  _onChangeBank = (key, value) => {
    let add = { ...this.state.add }
    add.bank = key
    this.setState({ add })
  }

  _onChangeName = (key, value) => {
    let add = { ...this.state.add }
    add.name = value
    this.setState({ add })
  }

  _onChangeCardNumber = (key, value) => {
    let add = { ...this.state.add }
    add.card_number = value
    this.setState({ add })
  }

  addCard = () => {
    if (!this.state.add.bank) {
      ToastAndroid.show('بانک انتخاب نشده است', ToastAndroid.SHORT)
      return
    }
    if (!this.state.add.name) {
      ToastAndroid.show('نام صاحب کارت وارد نشده است', ToastAndroid.SHORT)
      return
    }
    if (!this.state.add.card_number) {
      ToastAndroid.show('شماره کارت وارد نشده است', ToastAndroid.SHORT)
      return
    }
    if (this.state.add.card_number.length != 16) {
      ToastAndroid.show('طول شماره کارت باید 16 رقم باشد', ToastAndroid.SHORT)
      return
    }
    let cards = this.props.card.cards
    cards.push(this.state.add)
    this.setState({
      add: {
        bank: null,
        name: null,
        card_number: null
      }
    })
    this.props.dispatchAdd(cards)
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <Animated.ScrollView
          contentContainerStyle={[GlobalStyles.content, styles.content]}
          keyboardShouldPersistTaps='always'
          ref={ref => this.scrollView = ref}
          showsVerticalScrollIndicator={false}>
          <Picker
            selectedValue={this.state.add.bank}
            style={styles.picker}
            onValueChange={this._onChangeBank}>
            <Picker.Item label="انتخاب بانک" value="" />
            {Object.keys(bankNames).map((k, i) => (<Picker.Item key={i} label={bankNames[k]} value={k} />))}
          </Picker>
          <Input
            placeholder='نام صاحب کارت'
            onChangeText={this._onChangeName}
            value={this.state.add.name}
          />
          <Input
            placeholder='شماره کارت'
            keyboardType='numeric'
            onChangeText={this._onChangeCardNumber}
            value={this.state.add.card_number}
            maxLength={16}
          />
          <Button
            submitLoader={this.props.card.adding}
            icon="md-add"
            onPress={() => this.addCard()}
            text="ثبت کارت جدید"
          />
        </Animated.ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  dispatchAdd: (cards) => add(cards)
}

const mapStateToProps = state => ({
  card: state.card
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)