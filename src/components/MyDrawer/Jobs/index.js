import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import JobsHeader from '../../ScreensMaterials/Headerss/JobsHeader/JobsHeader';
import JobImg from '../../ScreensMaterials/JobsMaterial/JobsImage/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {widthPercentageToDP as wp} from '../../responsive/responsive';

const JobsScreen = ({navigation}) => {
  const jobDetail = () => {
    navigation.navigate('JobsDetails');
  };
  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <JobsHeader navigation={navigation} />
        <View style={style.mainCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <JobImg />
            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.touchAbleContent}
              onPress={jobDetail}>
              <Text numberOfLines={3} style={style.teXt}>
                Kashif Kashif kashif kashif kashif kashif kashif kashif kashif
                kashif kashif kashif kashif kashif kashif kashifs kashif kashif
                jsaosjoasjoasjoa
              </Text>
            </TouchableOpacity>

            <View style={{paddingBottom: wp('4')}} />
          </ScrollView>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default JobsScreen;
