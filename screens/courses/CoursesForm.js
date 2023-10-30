import { ScrollView, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import forms from "../../styles/forms"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Formik } from "formik"
import * as Yup from 'yup';
import { Colors } from "react-native/Libraries/NewAppScreen"

const CoursesForm = ({ navigation, route }) => {

  const course = route.params?.course || {}
  const id = route.params?.id

  function save(data) {
    AsyncStorage.getItem('courses').then(result => {
      const courses = JSON.parse(result) || []
      if (id >= 0) {
        courses.splice(id, 1, data)
      } else {
        courses.push(data)
      }
      AsyncStorage.setItem('courses', JSON.stringify(courses))
      navigation.goBack()
    })
  }

  const courseSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Valor muito curto')
      .max(50, 'Valor muito grande')
      .required('* Campo obrigatório'),
    duration: Yup.number(),
    modality: Yup.string()
  })

  return (
    <ScrollView style={{ margin: 15 }}>

      <Text style={forms.title}>Formulário de Cursos</Text>

      <Formik
        initialValues={course}
        validationSchema={courseSchema}
        onSubmit={values => save(values)}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <View>
            <TextInput
              style={forms.input}
              mode="outlined"
              label='Nome'
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {(errors.name && touched.name) &&
              <Text style={{ color: 'red', marginTop: 5 }}>{errors.name}</Text>
            }

            <TextInput
              style={forms.input}
              mode="outlined"
              label='Duração'
              keyboardType="decimal-pad"
              value={values.duration}
              onChangeText={handleChange('duration')}
            />
            {(errors.duration && touched.duration) &&
              <Text style={{ color: 'red', marginTop: 5 }}>{errors.duration}</Text>
            }

            <TextInput
              style={forms.input}
              mode="outlined"
              label='Modalidade'
              value={values.modality}
              onChangeText={handleChange('modality')}
            />
            {(errors.duration && touched.duration) &&
              <Text style={{ color: 'red', marginTop: 5 }}>{errors.duration}</Text>
            }

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