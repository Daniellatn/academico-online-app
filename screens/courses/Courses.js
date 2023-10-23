import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { Text, Button, Card, IconButton, FAB, Portal, Dialog } from "react-native-paper"

const Courses = ({ navigation }) => {

  const [courses, setcourses] = useState([])
  const [idcourses, setIdcourses] = useState([])
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    useCallback(() => {
      getCourses()
    }, [])
  )

  function confirm(id) {
    setIdcourses(id)
    showDialog()
  }

  function deleteCourses() {
    courses.splice(idcourses, 1)
    AsyncStorage.setItem('courses', JSON.stringify(courses))
    getCourses()
    hideDialog()
  }

  function getCourses() {
    AsyncStorage.getItem('courses').then(result => {
      result = JSON.parse(result) || []
      setcourses(result)
    })
  }

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        {courses.map((item, i) => (
          <Card key={i} mode="outlined" style={{ marginBottom: 5 }}>
            <Card.Title
              title={item.name}
              subtitle={"Modalidade: " + item.modality}
              right={(props) =>
                <Card.Actions>
                  <IconButton mode="contained-tonal" containerColor="#FFFF00" icon='pencil' onPress={() => navigation.push('form-courses', { id: i, course: item })} />
                  <IconButton mode="contained-tonal" containerColor="#FF0000" iconColor="#FFFFFF" icon='delete' onPress={() => confirm(i)} />
                </Card.Actions>
              }
            />
          </Card>
        ))}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Atenção</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancelar</Button>
              <Button onPress={deleteCourses}>Sim</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        mode="flat"
        size="small"
        onPress={() => navigation.push('form-courses')}
      />
    </>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FEC5EA'
  },
})

export default Courses