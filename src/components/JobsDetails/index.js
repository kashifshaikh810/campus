import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import DetailsHeader from '../ScreensMaterials/JobsDetailsMaterial/DetailsHeader/index';
// import DetailsImage from '../ScreensMaterials/JobsDetailsMaterial/DetailsImage/index';
import DetailsButton from '../ScreensMaterials/JobsDetailsMaterial/DetailsButton/index';

const JobsDetails = ({navigation}) => {
  return (
    <View style={style.container}>
      <DetailsHeader navigation={navigation} />
      <View style={style.containerTwo}>
        <View>
          <Text style={style.num}>1.</Text>
        </View>
        <View>
          <Text style={style.jobTitle}>Job Title :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.text}>
            This is Jobs Titlefsdafsafdsafsadfsadfsafdsadadasddsdsdsdsd
            fakjfadjfadkojfadkojfdapojfdapojfdaojfdapojfadoijfdpoijfadoijfdsaoijfdoifjdsojfdojf
          </Text>
        </View>
      </View>

      <View style={style.containerThree}>
        <View>
          <Text style={style.numTwo}>2.</Text>
        </View>
        <View>
          <Text style={style.salaryPkg}>Salary Package :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.tiTle}>
            This is Jobs Titlefskfjnaosjgosajgosaijgpoasijgoasijg
            lajfa;djnfosdjfosdjfosjdfosjdfosjdfoijsdfojsdfojosdjfosjfosjdpoifjsdoijfsdpojfo
          </Text>
        </View>
      </View>

      <View style={style.containerFour}>
        <View>
          <Text style={style.numThree}>3.</Text>
        </View>
        <View>
          <Text style={style.myRequire}>Requirement :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.requireTitle}>
            This is Jobs Title
            fojds;lofjsdojfsoijfspoaijfo[isajfiOIJFOIJfpoiJFOIJF[pijdfiojdafijf]]gsljogosajgoajgkglokg;oakgsk;lgk
          </Text>
        </View>
      </View>

      <View style={style.containerFive}>
        <View>
          <Text style={style.numFour}>4.</Text>
        </View>
        <View>
          <Text style={style.expe}>Experience :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.expeTitle}>
            This is Jobs Title
            ;dlfkjfl;ojfpsdojfposadijfsapoijfpaosifhsoi9pyfg08w7ytfgiusdfhbiFGHIOUFHGOFJGPOSJGFPJAPOIJFSDFJSDFOSDJGLKJGALOKJGF
          </Text>
        </View>
      </View>

      <View style={style.containerSix}>
        <View>
          <Text style={style.numSix}>5.</Text>
        </View>
        <View>
          <Text style={style.resigSt}>Resignation :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.resigTitle}>
            This is Jobs Title
            G;SLFJNGSILKGHSIDHUGHUISAFHGUIAGHUIAGYUAVB;LAVN;HGISJNVISADOUFYSGFIUYSAGFUAYGFUISAYGFUASHFBGUASGFUASFGIKFHSAIGHISUHGIOAUHGIOAUHGLSKGHAIGHAOIGHFAIO
          </Text>
        </View>
      </View>

      <View style={style.containerSaven}>
        <View>
          <Text style={style.numSaven}>6.</Text>
        </View>
        <View>
          <Text style={style.desc}>Description :-</Text>
        </View>
        <View>
          <Text numberOfLines={5} style={style.descTitle}>
            This is Jobs Title
            FDA;FKS;DLOFKJNAOPFJHISLOFHAFGASUIFGYISU8YFGUSDYFGSUIFGYUIYQHFPWUEH
          </Text>
        </View>
      </View>
      <DetailsButton navigation={navigation} />
    </View>
  );
};

export default JobsDetails;
