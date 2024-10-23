//import { background } from "native-base/lib/typescript/theme/styled-system";
//import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "./Perfil";
import Principal from "./Principal";
import QRcode from './QRcode';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle:{
        backgroundColor:"#001489"
    },
    tabBarActiveTintColor:"#339cff",
    tabBarInactiveTintColor:"#FFF"
}

const tabs = [
    {
      name: 'Principal',
      component: Principal,
      icon: 'home'
    },
    {
        name: 'QRcode',
        component: QRcode,
        icon: 'camera'
      },
    {
      name: 'Perfil',
      component: Perfil,
      icon: 'person'
    },
  ]

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((tab) => (
        <Tab.Screen
        key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <FontAwesome6 name="person-dress" size={24} color="white" />
            )
        }}
        />
    ))
}
        </Tab.Navigator>
    )
}
