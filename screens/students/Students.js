import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from "react-native-paper"

const Students = ({ navigation }) => {

  const [students, setstudents] = useState([])
  const [idstudents, setIdstudents] = useState([])
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    useCallback(() => {
      getStudents()
    }, [])
  )

  function confirm(id) {
    setIdstudents(id)
    showDialog()
  }

  function deleteStudents() {
    students.splice(idstudents, 1)
    AsyncStorage.setItem('students', JSON.stringify(students))
    getStudents()
    hideDialog()
  }

  function getStudents() {
    AsyncStorage.getItem('students').then(result => {
      result = JSON.parse(result) || []
      setstudents(result)
    })
  }

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        {students.map((item, i) => (
          <Card key={i} mode="outlined" style={{ marginBottom: 5 }}>
            <Card.Title
              title={item.name}
              subtitle={"Matrícula: " + item.registration}
              right={(props) =>
                <Card.Actions>
                  <IconButton mode="contained-tonal" containerColor="#FFFF00" icon='pencil' onPress={() => navigation.push('form-students', { id: i, student: item })} />
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
              <Button onPress={deleteStudents}>Sim</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        mode="flat"
        size="small"
        onPress={() => navigation.push('form-students')}
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


export default Students