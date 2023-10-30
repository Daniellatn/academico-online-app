import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import forms from '../../styles/forms'

const TeachersForm = ({navigation, route}) => {

  const teacher = route.params?.teacher || {}
  const id = route.params?.id
  const [data, setdata] = useState(teacher)

  function handleChange(value, input) {
    setdata({...data, [input]: value})
  }

  function save() {
    AsyncStorage.getItem('teachers').then(result => {
      const teachers = JSON.parse(result) || []
      if (id >= 0) {
        teachers.splice(id, 1, data)
      } else {
        teachers.push(data)
      }
      AsyncStorage.setItem('teachers', JSON.stringify(teachers))
      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text style={forms.title}>Formulário de Professores</Text>

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
        label='CPF'
        keyboardType="decimal-pad"
        value={data.cpf}
        onChangeText={(value) => handleChange(value, 'cpf')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Matricula'
        keyboardType="decimal-pad"
        value={data.registration}
        onChangeText={(value) => handleChange(value, 'registration')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Salario'
        keyboardType="decimal-pad"
        value={data.salary}
        onChangeText={(value) => handleChange(value, 'salary')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='E-mail'
        value={data.email}
        onChangeText={(value) => handleChange(value, 'email')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Telefone'
        keyboardType="decimal-pad"
        value={data.telephone}
        onChangeText={(value) => handleChange(value, 'telephone')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='CEP'
        keyboardType="decimal-pad"
        value={data.cep}
        onChangeText={(value) => handleChange(value, 'cep')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Logadrouro'
        value={data.street}
        onChangeText={(value) => handleChange(value, 'street')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Complemento'
        value={data.complement}
        onChangeText={(value) => handleChange(value, 'complement')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Número'
        keyboardType="decimal-pad"
        value={data.number}
        onChangeText={(value) => handleChange(value, 'number')}
      />
      <TextInput
        style={forms.input}
        mode="outlined"
        label='Bairro'
        value={data.neighborhood}
        onChangeText={(value) => handleChange(value, 'neighborhood')}
      />

      <Button icon="plus" mode="contained-tonal" onPress={save}>
        Salvar
      </Button>
    </ScrollView>
  )
}

export default TeachersForm