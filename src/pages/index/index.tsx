import { View, Text } from '@tarojs/components'
import './index.scss'
import { Component } from 'react'

export default class Index extends Component<any> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
