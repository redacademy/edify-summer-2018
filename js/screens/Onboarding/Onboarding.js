import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const Circle = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#35367B' : '#D8D8D8';
  }
  return (
    <View
      style={{
        width: 18,
        height: 18,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 9,
      }}
    />
  );
};

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};
const Subtitle = props => {
  return <Text style={styles.subTitle}>{props.subtitle}</Text>;
};

const Skip = () => {
  return (
    <TouchableOpacity
      style={styles.skipButton}
      title={'Done'}
      onPress={() => Alert.alert('Skipped')}
    >
      <Text style={styles.skip}>Skip</Text>
    </TouchableOpacity>
  );
};

let deviceWidth = Dimensions.get('window').width;

const OnboardingPage = () => {
  return (
    <View>
      <Onboarding
        bottomBarHighlight={false}
        imageContainerStyles={{
          width: deviceWidth,
          paddingBottom: 40,
          paddingTop: 70,
          justifyContent: 'flex-start',
        }}
        bottomBarHeight={100}
        flatlistProps={{
          marginHorizontal: 60,
          width: deviceWidth,
        }}
        DotComponent={Circle}
        SkipButtonComponent={Skip}
        pages={[
          {
            backgroundColor: '#76D2D1',
            image: (
              <Image
                style={{ height: 219, width: 219 }}
                source={require('../../assets/login/tutorial.png')}
              />
            ),
            title: <Title title="View updates on your child" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
            bottomBarHeight: 100,
          },
          {
            backgroundColor: '#76D2D1',
            image: (
              <Image
                style={{ height: 219, width: 219 }}
                source={require('../../assets/login/fox.png')}
              />
            ),
            title: <Title title="Set up a personalized profile" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: '#76D2D1',
            image: (
              <Image
                style={{ height: 219, width: 219 }}
                source={require('../../assets/login/provider.png')}
              />
            ),

            title: <Title title="Learn about your provider" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: '#76D2D1',
            image: (
              <Image
                style={{ height: 219, width: 219 }}
                source={require('../../assets/login/onboarding.png')}
              />
            ),

            title: <Title title="Read about Edify" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingPage;
