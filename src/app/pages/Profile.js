import React from 'react';
import { CheckBox } from 'react-native';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';

// import assets from '@assets';
import theme from '@theme';

const Profile = () => {
  const profile = useStoreState(state => state.profile.data);
  const updateProfileData = useStoreActions(actions => actions.profile.updateProfileData);

  trueIfGender = (gender) => {
    return profile.gender == gender;
  }

  setGender = (gender) => {
    updateProfileData(['gender', gender])
  }

  return (
    <MainContainer>
      <InputRow>
        <Label>Gender</Label>
        <InputWrapper>
          <Picker
            selectedValue={profile.gender}
            onValueChange={(itemValue, itemIndex) =>
              updateProfileData(['gender', itemValue])
            }
          >
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </InputWrapper>
      </InputRow>

      <InputRow>
        <Label>Weight</Label>
        <InputWrapper>
          <TextInput
            value={profile.weight}
            onChangeText={text => updateProfileData(['weight', text])}
          />
        </InputWrapper>
      </InputRow>

      <InputRow>
        <Label>Height</Label>
        <InputWrapper>
          <TextInput
            value={profile.height}
            onChangeText={text => updateProfileData(['height', text])}
          />
        </InputWrapper>
      </InputRow>

      <InputRow>
        <Label>Age</Label>
        <InputWrapper>
          <TextInput
            value={profile.age}
            onChangeText={text => updateProfileData(['age', text])}
          />
        </InputWrapper>
      </InputRow>

      <InputRow>
        <Label>Diet type</Label>
        <InputWrapper>
          <Picker
            selectedValue={profile.preferences.dietType}
            onValueChange={(itemValue, itemIndex) =>
              updateProfileData(['dietType', itemValue])
            }
          >
            <Picker.Item label="Normal" value="normal" />
            <Picker.Item label="Bulk" value="bulk" />
            <Picker.Item label="Weight loss" value="weightloss" />
          </Picker>
        </InputWrapper>
      </InputRow>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const InputRow = styled.View`
  flex-direction: row;
`;

const InputWrapper = styled.View`
  flex: 0.5;
`;


const CheckBoxWrapper = styled.View``;

const Picker = styled.Picker``;

const TextInput = styled.TextInput``;

const Label = styled.Text`
  flex: 0.5;
`;

const Text = styled.Text`
  color: ${theme.RED};
`

export default Profile;
