import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing } from 'react-native';
import { StarIcon } from '../Icons/StarIcon';
import styles from './styles';
import PropTypes from 'prop-types';
import moment from 'moment';
import UserContext from '../../context/UserContext';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.duration = 250;
    this.delay = 250;
    this.state = {
      fade: new Animated.Value(0),
      height: null,
      maxHeight: null,
      minHeight: 130,
    };
  }

  _expandNote = () => {
    Animated.parallel([
      Animated.timing(this.state.height, {
        toValue: this.state.maxHeight,
        easing: Easing.inOut(Easing.ease),
        duration: this.duration,
      }),
      Animated.timing(this.state.fade, {
        toValue: 1,
        delay: this.delay,
        easing: Easing.inOut(Easing.ease),
        duration: this.duration,
      }),
    ]).start();
    this.setState({ expanded: true });
  };

  _shrinkNote = () => {
    Animated.parallel([
      Animated.timing(this.state.height, {
        toValue: this.state.minHeight,
        easing: Easing.inOut(Easing.ease),
        delay: this.delay,
        duration: this.duration,
      }),
      Animated.timing(this.state.fade, {
        toValue: 0,
        duration: this.duration,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
    this.setState({ expanded: false });
  };

  _setHeights = ({ height }) => {
    if (height >= this.state.height) {
      if (height <= this.state.minHeight) {
        this.setState(
          {
            maxHeight: this.state.minHeight,
            height: new Animated.Value(height),
          },
          () => this._expandNote(),
        );
      } else {
        this.setState({
          maxHeight: height,
          height: new Animated.Value(this.state.minHeight),
        });
      }
    }
  };

  render() {
    const { item } = this.props;
    const message = item.message.split(' ').reduce(
      (acc, word, index) => {
        if (index <= 30) {
          acc.message += `${word} `;
        }
        if (index > 30) {
          acc.animatedMessage += `${word} `;
        }
        return acc;
      },
      {
        message: '',
        animatedMessage: '',
      },
    );

    return (
      <Animated.View
        key={item.id}
        style={[styles.note, { height: this.state.height }]}
        onLayout={event => this._setHeights(event.nativeEvent.layout)}
      >
        <UserContext.Consumer>
          {values => (
            <View style={styles.container}>
              <Text style={styles.noteTitle}>
                Posted by{' '}
                {item.creator.firstname === this.props.child.parent.firstname
                  ? 'you'
                  : item.creator.firstname}{' '}
                -- {moment(item.createdAt).format('MMMM Do YYYY')}
              </Text>

              <StarIcon important={item.starred} />
            </View>
          )}
        </UserContext.Consumer>
        <TouchableOpacity
          onPress={this.state.expanded ? this._shrinkNote : this._expandNote}
          activeOpacity={0.8}
        >
          <Text style={styles.text}>
            {message.message}
            {!this.state.expanded &&
              message.animatedMessage.length > 0 &&
              '...'}
            <Animated.Text style={{ opacity: this.state.fade }}>
              {message.animatedMessage}
            </Animated.Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Note.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
    }),
    createdAt: PropTypes.string.isRequired,
    starred: PropTypes.bool.isRequired,
  }),
  child: PropTypes.object.isRequired,
};
