import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {
  Container,
  ContainerTitle,
  Title,
  Title2,
  Title3,
  ContainerButton,
  Button,
  TextButton,
} from './styles';

import background from '../../assets/background.png';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const titlePosition = useSharedValue(50);
  const title2Position = useSharedValue(50);
  const title3Position = useSharedValue(50);

  useEffect(() => {
    titlePosition.value = withTiming(
      0,
      {
        duration: 1200,
        easing: Easing.bounce,
      },
      () => {
        title2Position.value = withTiming(
          0,
          {
            duration: 1200,
            easing: Easing.bounce,
          },
          () => {
            title3Position.value = withTiming(0, {
              duration: 2000,
              easing: Easing.bounce,
            });
          },
        );
      },
    );
  }, [titlePosition, title2Position, title3Position]);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [50, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const title2Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: title2Position.value}],
      opacity: interpolate(
        title2Position.value,
        [50, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const title3Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: title3Position.value}],
      opacity: interpolate(
        title3Position.value,
        [50, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Container source={background}>
      <ContainerTitle>
        <Title style={[titleStyle]}>Olá Alyne,</Title>
        <Title2 style={[title2Style]}>clique no botão para</Title2>
        <Title3 style={[title3Style]}>visualizar sua mensagem!</Title3>
      </ContainerTitle>

      <ContainerButton>
        <Button onPress={() => navigation.navigate('message')}>
          <TextButton>Começar</TextButton>
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Dashboard;
