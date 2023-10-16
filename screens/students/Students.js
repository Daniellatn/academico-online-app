import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Button, Text } from "react-native-paper"

const Students = ({navigation}) => {

  const [students, setstudents] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('students').then(result => {
      result = JSON.parse(result) || []
      setstudents(result)
    })
  },[])

  return (
    <>
      <Text>Alunos</Text>
      <Button icon="plus" mode="contained-tonal" onPress={() => navigation.push('form-students')}>
        Novo
      </Button>
      {students.map(item => (
        <Text>{item.name}</Text>
      ))}
    </>
  )
}

export default Students