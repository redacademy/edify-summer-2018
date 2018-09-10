import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import OutlinedButton from '../../components/OutlinedButton';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../config/styles';
import ChildInfoForm from '../../components/ChildInfoForm';

const Button = ({ pressed }) => (
  <TouchableOpacity onPress={() => pressed}>
    <Text style={styles.buttonText}>Change Avatar</Text>
  </TouchableOpacity>
);

const ChildInfo = ({
  child,
  editChildInfo,
  showEditInfo,
  updateChildInfo,
  updateFormValues,
}) => {
  const { info } = child;
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <OutlinedButton
            title={editChildInfo ? 'Done' : 'Edit'}
            color={colors.teal}
            pressed={
              editChildInfo ? () => updateChildInfo() : () => showEditInfo()
            }
            titleStyle={{
              marginTop: -5,
              marginBottom: -7,
              paddingHorizontal: 6,
            }}
          />
        </View>
        <ProfileCard
          avatar={child.avatar}
          action={<Button pressed={() => {}} />}
        />
        <View style={styles.formContainer}>
          {editChildInfo ? (
            <ChildInfoForm
              updateFormValues={updateFormValues}
              child={child.info}
            />
          ) : (
            <View>
              <Text style={styles.title}>Parent Name</Text>
              <Text style={styles.info}>{info.parentName}</Text>
              <Text style={styles.title}>Child Name</Text>
              <Text style={styles.info}>{info.childName}</Text>
              <Text style={styles.title}>Parent Email</Text>
              <Text style={styles.info}>{info.parentEmail}</Text>
              <Text style={styles.title}>Parent Phone</Text>
              <Text style={styles.info}>{info.parentPhone}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

ChildInfo.propTypes = {
  child: PropTypes.object.isRequired,
  editChildInfo: PropTypes.bool.isRequired,
  showEditInfo: PropTypes.func.isRequired,
  updateChildInfo: PropTypes.func.isRequired,
  updateFormValues: PropTypes.func.isRequired,
};

export default ChildInfo;
