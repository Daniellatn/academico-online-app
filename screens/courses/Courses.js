import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Text, Button } from "react-native-paper"

const Courses = ({navigation}) => {

  const [courses, setcourses] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('students').then(result => {
      result = JSON.parse(result) || []
      setcourses(result)
    })
  },[])

  return (
    <>
      <Text>Cursos</Text>
      <Button icon="plus" mode="contained-tonal" onPress={() => navigation.push('form-courses')}>
        Novo
      </Button>
      {courses.map(item => (
        <Text>{item.name}</Text>
      ))}
    </>
  )
}

export default Courses