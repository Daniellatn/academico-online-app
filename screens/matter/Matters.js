import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'

const Matters = ({navigation}) => {

  const [matters, setmatters] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('matters').then(result => {
      result = JSON.parse(result) || []
      setmatters(result)
    })
  },[])

  return (
    <>
      <Text>Disciplinas</Text>
      <Button icon="plus" mode="contained-tonal" onPress={() => navigation.push('form-matters')}>
        Novo
      </Button>
      {matters.map(item => (
        <Text>{item.name}</Text>
      ))}
    </>
  )
}

export default Matters