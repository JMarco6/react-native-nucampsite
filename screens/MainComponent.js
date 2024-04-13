import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampsiteId] = useState();

    return (
        <View style={{ flex: 1 }}>
             <DirectoryScreen 
                campsites={campsites} 
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
             />
             <CampsiteInfoScreen
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            />
        </View>
       
    )
};


export default Main;