//Menu
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

//Tela do Sobre
import Sobre from './telas/sobre';

//Configuração do menu
const Tab = createBottomTabNavigator();

//Cria a estrutura do menu
function Menu() {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === "Sobre") {
          iconName = focused
            ? 'book'
            : 'book-outline';
        } else if(route.name === "Lista") {
          iconName = focused
            ? 'list'
            : 'list-outline';
        } else if(route.name === "Perfil") {
          iconName = focused
            ? 'person'
            : 'person-outline';
        }

        return <Ionicons name={iconName} size={24} color='brown' />
      },
      headerShown: false,
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name='Sobre' component={Sobre} />
    <Tab.Screen name='Lista' component={Sobre} />
    <Tab.Screen name='Perfil' component={Sobre} />
  </Tab.Navigator>
}

export default function App() {

  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
