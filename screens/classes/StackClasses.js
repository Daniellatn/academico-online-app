import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Classes from "./Classes";
import ClassesForm from "./ClassesForm";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const StackClasses = (props) => {
  
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', (e) => {

      props.navigation.setOptions({
        tabBarIcon: () => (
          <MaterialCommunityIcons name="account-group" size={26} />
        ),
      })
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="list-classes" component={Classes} options={{ title: 'Turmas' }} />
      <Stack.Screen name="form-classes" component={ClassesForm} options={{ title: 'Cadastro de Turmas' }} />
    </Stack.Navigator>
  )
}

export default StackClasses