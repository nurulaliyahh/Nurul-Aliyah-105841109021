import { View, ImageBackground } from 'react-native';
import React from 'react';
import ButtonCustom from '../component/Button/Button';
import CustomText from '../component/text/text';
import { useNavigation } from '@react-navigation/native';

const VisualSearch = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/bgvisual.png')} style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <CustomText text="Search for an outfit by taking a photo or uploading an image" fontSize={25} color={"white"} />
                <ButtonCustom 
                    color="red" 
                    text="Take a photo" 
                    onPress={() => navigation.navigate('Home')}
                    borderColor="white"
                    borderWidth={2}
                />
                <ButtonCustom 
                    color="transparent" 
                    text="Upload An Image"
                    borderColor="white"
                    borderWidth={2}
                />
            </View>
        </ImageBackground>
    );
}

export default VisualSearch;
