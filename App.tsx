//Menu
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Tela do Sobre
import Sobre from './telas/sobre';

//Configuração do menu
const Tab = createBottomTabNavigator();

//Cria a estrutura do menu
function Menu() {
  return <Tab.Navigator>
    <Tab.Screen name='Sobre' component={Sobre} />
  </Tab.Navigator>
}

export default function App() {

  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
