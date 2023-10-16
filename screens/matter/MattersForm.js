import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import forms from '../../styles/forms'

const MattersForm = ({navigation}) => {

  const [data, setdata] = useState({})

  function handleChange(value, input) {
    setdata({...data, [input]: value})
  }

  function save() {
    AsyncStorage.getItem('matters').then(result => {
      const matters = JSON.parse(result) || []
      matters.push(data)
      AsyncStorage.setItem('matters', JSON.stringify(matters))
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
        label='Curso'
        keyboardType="decimal-pad"
        value={data.courses}
        onChangeText={(value) => handleChange(value, 'courses')}
      />
      <Button icon="plus" mode="contained-tonal" onPress={save}>
        Salvar
      </Button>
    </ScrollView>
  )
}

export default MattersForm