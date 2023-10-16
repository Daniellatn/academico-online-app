import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Teachers from "./Teachers";
import TeachersForm from "./TeachersForm";

const Stack = createNativeStackNavigator();

const StackTeachers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list-teachers" component={Teachers} options={{ title: 'Professores' }} />
      <Stack.Screen name="form-teachers" component={TeachersForm} options={{ title: 'Cadastro de Professores' }} />
    </Stack.Navigator>
  )
}

export default StackTeachers