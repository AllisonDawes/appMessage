import React, {useEffect, useCallback, useState} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import TrackPlayer from 'react-native-track-player';

import backgroundMessage from '../../assets/background-message.jpg';
import foto1 from '../../assets/foto1.png';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';
import foto4 from '../../assets/foto4.png';
import foto5 from '../../assets/foto5.png';
import foto6 from '../../assets/foto6.png';
import foto7 from '../../assets/foto7.png';
import foto8 from '../../assets/foto8.png';
import foto9 from '../../assets/foto9.png';
import foto10 from '../../assets/foto10.png';
import heart from '../../assets/coracao.png';
import baloes from '../../assets/baloes.png';

import {
  Container,
  Baloes,
  Baloes2,
  ContainerMessage,
  MessageTo,
  Heart,
  ContainerImage,
  ImageFoto,
} from './styles';

const Message: React.FC = () => {
  const [time, setTime] = useState(10000);
  const [timeBaloesUp, setTimeBalesUp] = useState(25000);
  const [timeBaloesDown, setTimeBalesDown] = useState(3);

  const message1Position = useSharedValue(710);
  const img1Position = useSharedValue(710);
  const img2Position = useSharedValue(710);
  const img3Position = useSharedValue(710);
  const img4Position = useSharedValue(710);
  const img5Position = useSharedValue(710);
  const img6Position = useSharedValue(710);
  const img7Position = useSharedValue(710);
  const img8Position = useSharedValue(710);
  const img9Position = useSharedValue(710);
  const img10Position = useSharedValue(710);
  const heartPosition = useSharedValue(50);
  const baloesPosition = useSharedValue(500);
  const baloes2Position = useSharedValue(500);

  const songs = {
    id: 'track1',
    url: require('../../data/ser-humano-ou-anjo.mp3'),
    title: 'Track title1',
    artist: 'Track',
  };

  const playMusic = useCallback(async () => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({stopWithApp: true});
    await TrackPlayer.add(songs);
    await TrackPlayer.play();
    console.log('audio tocando...');
  }, [songs]);

  useEffect(() => {
    playMusic();
  }, [playMusic]);

  useEffect(() => {
    message1Position.value = withTiming(
      0,
      {
        duration: 55000,
      },
      () => {
        img1Position.value = withTiming(
          0,
          {
            duration: time,
          },
          () => {
            img2Position.value = withTiming(
              0,
              {
                duration: time,
              },
              () => {
                img3Position.value = withTiming(
                  0,
                  {
                    duration: time,
                  },
                  () => {
                    img4Position.value = withTiming(
                      0,
                      {
                        duration: time,
                      },
                      () => {
                        img5Position.value = withTiming(
                          0,
                          {
                            duration: time,
                          },
                          () => {
                            img6Position.value = withTiming(
                              0,
                              {
                                duration: time,
                              },
                              () => {
                                img7Position.value = withTiming(
                                  0,
                                  {
                                    duration: time,
                                  },
                                  () => {
                                    img8Position.value = withTiming(
                                      0,
                                      {
                                        duration: time,
                                      },
                                      () => {
                                        img9Position.value = withTiming(
                                          0,
                                          {
                                            duration: time,
                                          },
                                          () => {
                                            img10Position.value = withTiming(
                                              0,
                                              {
                                                duration: time,
                                              },
                                              () => {
                                                heartPosition.value = withTiming(
                                                  0,
                                                  {
                                                    duration: time,
                                                  },
                                                );
                                              },
                                            );
                                          },
                                        );
                                      },
                                    );
                                  },
                                );
                              },
                            );
                          },
                        );
                      },
                    );
                  },
                );
              },
            );
          },
        );
      },
    );
  }, [
    message1Position,
    img1Position,
    img2Position,
    img3Position,
    img4Position,
    img5Position,
    img6Position,
    img7Position,
    img8Position,
    img9Position,
    img10Position,
    heartPosition,
    time,
  ]);

  useEffect(() => {
    baloesPosition.value = withSequence(
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
      withTiming(-420, {
        duration: timeBaloesUp,
      }),
      withTiming(500, {
        duration: timeBaloesDown,
      }),
    );
  }, [baloesPosition, timeBaloesUp, timeBaloesDown]);

  useEffect(() => {
    baloes2Position.value = withDelay(
      2000,
      withSequence(
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
        withTiming(-420, {
          duration: timeBaloesUp,
        }),
        withTiming(500, {
          duration: timeBaloesDown,
        }),
      ),
    );
  }, [baloes2Position, timeBaloesUp, timeBaloesDown]);

  const baloesStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: baloesPosition.value}],
    };
  });

  const baloes2Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: baloes2Position.value}],
    };
  });

  const message1Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: message1Position.value}],
    };
  });

  const img1Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img1Position.value}],
    };
  });

  const img2Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img2Position.value}],
    };
  });

  const img3Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img3Position.value}],
    };
  });

  const img4Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img4Position.value}],
    };
  });

  const img5Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img5Position.value}],
    };
  });

  const img6Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img6Position.value}],
    };
  });

  const img7Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img7Position.value}],
    };
  });

  const img8Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img8Position.value}],
    };
  });

  const img9Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img9Position.value}],
    };
  });

  const img10Style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: img10Position.value}],
    };
  });

  const heartStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: heartPosition.value}],
      opacity: interpolate(
        heartPosition.value,
        [10, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      height: interpolate(
        heartPosition.value,
        [50, 0],
        [150, 120],
        Extrapolate.CLAMP,
      ),
      width: interpolate(
        heartPosition.value,
        [50, 0],
        [150, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Container source={backgroundMessage}>
      <Baloes style={baloesStyle} source={baloes} />
      <Baloes2 style={baloes2Style} source={baloes} />

      <ContainerMessage>
        <MessageTo style={[message1Style]}>
          Minha linda, nosso primeiro ano juntos se passou, e nele tivemos
          muitos momentos maravilhosos de paz, companherismo e amor! Nos
          conhecemos e evoluimos lentamente, e cada dia foi incrível ficar ao
          seu lado e poder compartilhar as conversas e sorrisos. Tudo que desejo
          para nós, é que daqui pra frente tenhamos mais desses momentos e que
          fiquemos juntos essa vida toda! Te amo Alyne Dias😍❤!!!
        </MessageTo>
      </ContainerMessage>

      <ContainerImage>
        <ImageFoto style={[img1Style]} source={foto1} />
        <ImageFoto style={[img2Style]} source={foto2} />
        <ImageFoto style={[img3Style]} source={foto3} />
        <ImageFoto style={[img4Style]} source={foto4} />
        <ImageFoto style={[img5Style]} source={foto5} />
        <ImageFoto style={[img6Style]} source={foto6} />
        <ImageFoto style={[img7Style]} source={foto7} />
        <ImageFoto style={[img8Style]} source={foto8} />
        <ImageFoto style={[img9Style]} source={foto9} />
        <ImageFoto style={[img10Style]} source={foto10} />
      </ContainerImage>

      <Heart style={[heartStyle]} source={heart} />
    </Container>
  );
};

export default Message;
