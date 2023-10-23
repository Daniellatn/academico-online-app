import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Matters = ({navigation}) => {

  const [matters, setmatters] = useState([])
  const [idmatters, setIdmatters] = useState([])
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    useCallback(() => {
      getMatters()
    }, [])
  )

  function confirm(id) {
    setIdmatters(id)
    showDialog()
  }

  function deleteMatters() {
    matters.splice(idmatters, 1)
    AsyncStorage.setItem('matters', JSON.stringify(matters))
    getMatters()
    hideDialog()
  }

  function getMatters() {
    AsyncStorage.getItem('matters').then(result => {
      result = JSON.parse(result) || []
      setmatters(result)
    })
  }

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        {matters.map((item, i) => (
          <Card key={i} mode="outlined" style={{ marginBottom: 5 }}>
            <Card.Title
              title={item.name}
              subtitle={"Curso: " + item.courses}
              right={(props) =>
                <Card.Actions>
                  <IconButton mode="contained-tonal" containerColor="#FFFF00" icon='pencil' onPress={() => navigation.push('form-matters', { id: i, matter: item })} />
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
              <Button onPress={deleteMatters}>Sim</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        mode="flat"
        size="small"
        onPress={() => navigation.push('form-matters')}
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

export default Matters