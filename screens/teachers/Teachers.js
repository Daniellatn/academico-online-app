import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Button, Text } from "react-native-paper"

const Teachers = ({navigation}) => {

  const [teachers, setteachers] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('teachers').then(result => {
      result = JSON.parse(result) || []
      setteachers(result)
    })
  },[])

  return (
    <>
      <Text>Professores</Text>
      <Button icon="plus" mode="contained-tonal" onPress={() => navigation.push('form-teachers')}>
        Novo
      </Button>
      {teachers.map(item => (
        <Text>{item.name}</Text>
      ))}
    </>
  )
}

export default Teachers