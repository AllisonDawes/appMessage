import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 15px;

  justify-content: flex-end;
`;

export const ContainerTitle = styled.View`
  justify-content: flex-end;
  background: #f86b57;
  opacity: 0.5;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 8px;
`;

export const Title = styled(Animated.Text)`
  font-family: 'MarckScript-Regular';
  font-size: 22px;
  font-weight: bold;
  color: #000;

  align-self: center;
`;

export const Title2 = styled(Animated.Text)`
  font-size: 22px;
  font-weight: bold;
  color: #000;

  align-self: center;
`;

export const Title3 = styled(Animated.Text)`
  font-size: 22px;
  font-weight: bold;
  color: #000;

  align-self: center;
`;

export const ContainerButton = styled.View`
  justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: #fcc540;
  height: 70px;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: 'MarckScript-Regular';
  font-size: 24px;
  font-weight: bold;
  color: #aa2517;

  align-self: center;
`;
