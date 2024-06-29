import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigate } from './routes';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate/>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}