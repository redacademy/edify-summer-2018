import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import { Form, Field, Fragment } from 'react-final-form';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import Tag from './../../components/Tag';
import Mood from './../../components/Mood';
import PropTypes from 'prop-types';

const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $userId: ID!, $text: String!) {
    createComment(postId: $postId, userId: $userId, text: $text) {
      id
      text
      user {
        firstname
      }
      post {
        description
      }
      createdAt
    }
  }
`;

class ChildPost extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const post = this.props.post;

    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={80}>
        <ScrollView>
          <View style={styles.root}>
            <Image source={{ uri: post.imageurl }} style={styles.mainImage} />
            <View style={styles.textContainer}>
              <View style={styles.postMeta}>
                <Text style={styles.sideText}>Posted by </Text>
                <TouchableOpacity
                  style={styles.description}
                  onPress={() => {
                    this.props.navigation.navigate('Educator', {
                      id: post.creator.id,
                    });
                  }}
                >
                  <Text style={styles.creator}>{post.creator.firstname} </Text>
                </TouchableOpacity>
                <Text style={styles.sideText}>
                  &mdash; {moment(post.createdAt).format('MMMM Do YYYY')}
                </Text>
              </View>

              <Text style={styles.description}>{post.description}</Text>

              <View style={styles.tagsContainer}>
                {post.tag.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </View>
              <View style={styles.moodStats}>
                <Text style={styles.sideText}>Feeling:</Text>
                <View style={styles.moodType}>
                  <Mood mood={post.mood.imageurl} />
                  <Text style={styles.moodDescription}>
                    {post.mood.description}
                  </Text>
                </View>
              </View>

              <View style={styles.header}>
                <Text style={styles.title}>Comments</Text>
                <View style={styles.divider} />
              </View>

              {post.comment.map((comment, index) => (
                <View key={index} style={styles.comment}>
                  <Text style={styles.commenter}>{comment.user.firstname}</Text>
                  <Text style={styles.commentText}>{comment.text}</Text>
                  <Text style={styles.commentTime}>
                    {moment(comment.createdAt)
                      .startOf('hour')
                      .fromNow()}
                  </Text>
                </View>
              ))}

              <Mutation
                mutation={CREATE_COMMENT}
                refetchQueries={[
                  {
                    query: this.props.query,
                    variables: { id: this.props.navigation.getParam('postId') },
                  },
                ]}
              >
                {(createComment, { data }) => (
                  <Form
                    onSubmit={values => console.log(values)} //on submit prop is needed. get an error without it.
                    render={({ pristine, values, form }) => (
                      <Field
                        name="comment"
                        render={({ input, meta }) => (
                          <View>
                            <TextInput />
                            <TextInput
                              {...input}
                              multiline={true}
                              style={styles.textInput}
                            />
                            <TouchableOpacity
                              style={styles.button}
                              disabled={pristine}
                              onPress={() =>
                                createComment({
                                  variables: {
                                    postId: post.id,
                                    userId: post.child.parent.id,
                                    text: values.comment,
                                  },
                                }).then(form.reset())
                              }
                            >
                              <Text style={styles.submit}>Submit</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    )}
                  />
                )}
              </Mutation>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
export default ChildPost;
