import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackStudents from './screens/students/StackStudents';
import StackClasses from './screens/classes/StackClasses';
import StackCourses from './screens/courses/StackCourses';
import StackMatters from './screens/matter/StackMatters';
import StackTeachers from './screens/teachers/StackTeachers';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="students"
          activeColor="#FF007F"
          barStyle={{ backgroundColor: '#FEC5EA' }}
          shifting={true}
        >
          <Tab.Screen
            name="classes"
            component={StackClasses}
            options={{
              tabBarLabel: 'Turmas',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-group-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="courses"
            component={StackCourses}
            options={{
              tabBarLabel: 'Cursos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book-account-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="students"
            component={StackStudents}
            options={{
              tabBarLabel: 'Alunos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="matters"
            component={StackMatters}
            options={{
              tabBarLabel: 'Disciplinas',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book-open-variant" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="teachers"
            component={StackTeachers}
            options={{
              tabBarLabel: 'Professores',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-tie" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}