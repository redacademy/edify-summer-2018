import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import OutlinedButton from '../../components/OutlinedButton';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../config/styles';
import ChildInfoForm from '../../components/ChildInfoForm';

const ActionButton = ({ pressed }) => (
  <TouchableOpacity onPress={() => pressed}>
    <Text style={styles.buttonText}>Change Avatar</Text>
  </TouchableOpacity>
);

const ChildInfo = ({
  child,
  editChildInfo,
  showEditInfo,
  updateFormValues,
  setFormValues,
  updateChild,
  updateUser,
  values,
  resetForm,
}) => {
  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView style={styles.root}>
        <View style={styles.buttonContainer}>
          <OutlinedButton
            title={editChildInfo ? 'Done' : 'Edit'}
            color={colors.teal}
            pressed={
              editChildInfo
                ? async () => {
                    parentNames = values.parentName.split(' ');

                    await updateUser({
                      variables: {
                        id: child.parent.id,
                        firstname: parentNames[0],
                        lastname: parentNames[1],
                        phone: values.phone,
                        email: values.email,
                      },
                    });

                    await updateChild({
                      variables: {
                        childId: child.id,
                        childName: values.childName,
                      },
                    });

                    resetForm();
                  }
                : () => showEditInfo()
            }
            titleStyle={{
              paddingHorizontal: 2,
              textAlignVertical: 'center',
            }}
          />
        </View>
        <ProfileCard
          avatar={child.avatar.imageurl}
          action={<ActionButton pressed={() => {}} />}
        />
        <View style={styles.formContainer}>
          {editChildInfo ? (
            <ChildInfoForm
              updateFormValues={updateFormValues}
              child={child}
              setFormValues={setFormValues}
            />
          ) : (
            <View>
              <Text style={styles.title}>Parent Name</Text>
              <Text style={styles.info}>
                {child.parent.firstname} {child.parent.lastname}
              </Text>
              <Text style={styles.title}>Child Name</Text>
              <Text style={styles.info}>{child.name}</Text>
              <Text style={styles.title}>Parent Email</Text>
              <Text style={styles.info}>{child.parent.email}</Text>
              <Text style={styles.title}>Parent Phone</Text>
              <Text style={styles.info}>{child.parent.phone}</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={{ height: 150 }} />
    </KeyboardAvoidingView>
  );
};

ChildInfo.propTypes = {
  child: PropTypes.object.isRequired,
  editChildInfo: PropTypes.bool.isRequired,
  showEditInfo: PropTypes.func.isRequired,
  updateFormValues: PropTypes.func.isRequired,
  setFormValues: PropTypes.func.isRequired,
  updateChild: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  values: PropTypes.shape({
    parentName: PropTypes.string,
    childName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  resetForm: PropTypes.func.isRequired,
};

export default ChildInfo;
