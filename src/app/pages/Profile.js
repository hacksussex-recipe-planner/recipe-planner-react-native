import React from 'react';
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
      <HeaderWrapper>
        <ProfilePic source={{uri: 'https://picsum.photos/200/300'}}>
        </ProfilePic>
        <Header>
          Jane Doe
        </Header>
      </HeaderWrapper>
      <InputsWrapper>
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
      </InputsWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  padding: ${theme.styles.mainPadding};
`;

const HeaderWrapper = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePic = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  margin-bottom: 10px;  
`;

const Header = styled.Text`  

  font-size: ${theme.styles.header};
`;

const InputsWrapper = styled.View`
  padding: 20px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
`;

const InputRow = styled.View`
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const InputWrapper = styled.View`
  flex: 0.6;
`;

const CheckBoxWrapper = styled.View``;

const Picker = styled.Picker`
  font-size: ${theme.styles.fontSize};
  padding: 20px;
  background-color: ${theme.colors.inputBackground};
`;

const TextInput = styled.TextInput`
  background-color: ${theme.colors.inputBackground};
  font-size: ${theme.styles.fontSize};
`;

const Label = styled.Text`
  flex: 0.4;
  font-size: ${theme.styles.fontSize};
`;

const Text = styled.Text`
  color: ${theme.colors.red};
`

export default Profile;
