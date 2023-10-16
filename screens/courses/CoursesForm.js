import { ScrollView } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import forms from "../../styles/forms"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const CoursesForm = ({navigation}) => {

  const [data, setdata] = useState({})

  function handleChange(value, input) {
    setdata({...data, [input]: value})
  }

  function save() {
    AsyncStorage.getItem('courses').then(result => {
      const courses = JSON.parse(result) || []
      courses.push(data)
      AsyncStorage.setItem('courses', JSON.stringify(courses))
      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>

      <Text style={forms.title}>Formulário de Cursos</Text>

      <TextInput
        style={forms.input}
        mode="outlined"
        label='Nome'
        value={data.name}
        onChangeText={(value) => handleChange(value, 'name')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Duração'
        keyboardType="decimal-pad"
        value={data.duration}
        onChangeText={(value) => handleChange(value, 'duration')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Modalidade'
        value={data.modality}
        onChangeText={(value) => handleChange(value, 'modality')}
      />

      <Button icon="plus" mode="contained-tonal" onPress={save}>
        Salvar
      </Button>
    </ScrollView>
  )
}

export default CoursesForm