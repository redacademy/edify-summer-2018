import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';
import { colors } from '../../config/styles';
import PropTypes from 'prop-types';

const Circle = ({ isLight, selected }) => {
  const circleStyle = { ...styles.circle };
  if (isLight) {
    circleStyle.backgroundColor = selected ? '#35367B' : '#D8D8D8';
  }

  return <View style={circleStyle} />;
};

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};
const Subtitle = props => {
  return <Text style={styles.subTitle}>{props.subtitle}</Text>;
};

const Skip = ({ pressed }) => {
  return (
    <TouchableOpacity
      style={styles.skipButton}
      title={'Done'}
      onPress={pressed}
    >
      <Text style={styles.skip}>Skip</Text>
    </TouchableOpacity>
  );
};

let deviceWidth = Dimensions.get('window').width;

const OnboardingPage = ({ navigation, toggleOnboarding }) => {
  return (
    <View style={styles.root}>
      <Onboarding
        bottomBarHighlight={false}
        showNext={false}
        showDone={true}
        onDone={() => {
          toggleOnboarding();
          navigation.navigate('Profile');
        }}
        imageContainerStyles={{
          width: deviceWidth,
        }}
        bottomBarHeight={100}
        flatlistProps={{
          width: deviceWidth,
        }}
        DotComponent={Circle}
        SkipButtonComponent={() => (
          <Skip
            pressed={() => {
              toggleOnboarding();
              navigation.navigate('Profile');
            }}
          />
        )}
        pages={[
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/images/onboarding/group.png')}
              />
            ),
            title: <Title title="View updates on your child" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/images/onboarding/avatar.png')}
              />
            ),
            title: <Title title="Set up a personalized profile" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/images/onboarding/provider.png')}
              />
            ),

            title: <Title title="Learn about your provider" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/images/onboarding/onboarding-logo.png')}
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

OnboardingPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  toggleOnboarding: PropTypes.func.isRequired,
};

export default OnboardingPage;
