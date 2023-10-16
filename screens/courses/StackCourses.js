import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Courses from './Courses';
import CoursesForm from './CoursesForm';

const Stack = createNativeStackNavigator();

const StackCourses = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list-courses" component={Courses} options={{ title: 'Cursos' }} />
      <Stack.Screen name="form-courses" component={CoursesForm} options={{ title: 'Cadastro de Turmas' }} />
    </Stack.Navigator>
  )
}

export default StackCourses