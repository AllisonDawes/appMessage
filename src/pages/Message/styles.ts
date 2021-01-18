import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 15px;

  justify-content: center;
`;

export const Baloes = styled(Animated.Image)`
  position: absolute;
  height: 180px;
  width: 120px;
  margin-left: 5px;
`;

export const Baloes2 = styled(Animated.Image)`
  position: absolute;
  height: 180px;
  width: 120px;
  align-self: flex-end;
`;

export const ContainerMessage = styled.View`
  flex: 1;
`;

export const MessageTo = styled(Animated.Text)`
  font-size: 22px;
  font-weight: 500;
  align-self: stretch;
`;

export const Heart = styled(Animated.Image)`
  position: absolute;
  height: 120px;
  width: 120px;

  align-self: center;
`;

export const ContainerImage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageFoto = styled(Animated.Image)`
  position: absolute;
  width: 100%;
  height: 340px;
  margin-top: 20px;
  border-radius: 8px;
`;
