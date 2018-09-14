import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import Tag from './../../components/Tag';
import Mood from './../../components/Mood';

const ChildPost = ({ post, navigation }) => {
  console.log('IBIBI', post);
  return (
    <ScrollView>
      <View style={styles.root}>
      
        <Image source={{ uri: post.imageurl }} style={styles.mainImage} />
        <View style={styles.textContainer}>
          <View style={styles.postMeta}>
            <Text style={styles.sideText}>Posted by </Text>
            <TouchableOpacity style={styles.description}
            onPress={() => {
            navigation.navigate("Educator", { id: post.creator.id});
          }}>
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
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => close(true)}
              >
                <Text style={styles.close}>X</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              {...this.props}
              multiline={true}
              // onChangeText={text => this.setState({ text })}
              autoFocus
              // value={this.state.text}
              style={styles.textInput}
            />
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
     
      </View>
    </ScrollView>
  );
};
export default ChildPost;
