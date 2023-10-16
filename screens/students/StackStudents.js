import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Students from "./Students";
import StudentsForm from "./StudentsForm";

const Stack = createNativeStackNavigator();

const StackStudents = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list-students" component={Students} options={{ title: 'Alunos' }} />
      <Stack.Screen name="form-students" component={StudentsForm} options={{ title: 'Cadastro de Alunos' }} />
    </Stack.Navigator>
  )
}

export default StackStudents