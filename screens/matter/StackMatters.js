import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Matters from "./Matters";
import MattersForm from "./MattersForm";

const Stack = createNativeStackNavigator();

const StackMatters = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list-matters" component={Matters} options={{ title: 'Disciplinas' }} />
      <Stack.Screen name="form-matters" component={MattersForm} options={{ title: 'Cadastro de Disciplinas' }} />
    </Stack.Navigator>
  )
}

export default StackMatters