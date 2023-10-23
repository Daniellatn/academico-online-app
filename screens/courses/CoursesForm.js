import { ScrollView, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import forms from "../../styles/forms"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Formik } from "formik"

const CoursesForm = ({ navigation, route }) => {

  const course = route.params?.course || {}
  const id = route.params?.id

  // const [data, setdata] = useState({})

  // function handleChange(value, input) {
  //   setdata({ ...data, [input]: value })
  // }

  function save(data) {
    AsyncStorage.getItem('courses').then(result => {
      const courses = JSON.parse(result) || []
      if(id >= 0) {
        courses.splice(id, 1, data)
      } else {
        courses.push(data)
      }
      AsyncStorage.setItem('courses', JSON.stringify(courses))
      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>

      <Text style={forms.title}>Formulário de Cursos</Text>

      <Formik
        initialValues={course}
        onSubmit={values => save(values)}
      >
        {({values, handleChange, handleSubmit}) => (
          <View>
            <TextInput
              style={forms.input}
              mode="outlined"
              label='Nome'
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <TextInput
              style={forms.input}
              mode="outlined"
              label='Duração'
              keyboardType="decimal-pad"
              value={values.duration}
              onChangeText={handleChange('duration')}
            />
            <TextInput
              style={forms.input}
              mode="outlined"
              label='Modalidade'
              value={values.modality}
              onChangeText={handleChange('modality')}
            />

            <Button style={forms.button} icon="plus" mode="contained-tonal" onPress={handleSubmit}>
              Salvar
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

export default CoursesForm