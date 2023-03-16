import React, {useCallback, useEffect, useImperativeHandle} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../constants/colors';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

type BottomSheetProps = {
  onReturn: () => void;
  props: any;
};
export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  props: any;
};

const BottomSheet = React.forwardRef((props: any, ref) => {
  const translateY = useSharedValue(0);

  const context = useSharedValue({
    y: 0,
  });

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
  }, []);

  useImperativeHandle(ref, () => ({scrollTo}), [scrollTo]);

  const MAX_TRANSLATE_Y = -screenHeight ;

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -screenHeight / 2.5) {
        scrollTo(0);
      } else if (translateY.value < -screenHeight / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const reanimatedBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.bottomSheetContainer, reanimatedBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={{height: 350, justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Alphabetically</Text>
          <View style={styles.aplhaType}>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text style={styles.text}>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text style={styles.text}>A-Z</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Price</Text>
          <View style={styles.pricePercentage}>
            <TouchableOpacity style={styles.commonHtL}>
              <Text style={styles.text}>High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtL}>
              <Text style={styles.text}>Low to High</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Percentage</Text>
          <View style={styles.pricePercentage}>
            <TouchableOpacity style={styles.commonHtL}>
              <Text style={styles.text}>High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtL}>
              <Text style={styles.text}>Low to High</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Type</Text>
          <View style={styles.aplhaType}>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text style={styles.text}>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text style={styles.text}>A-Z</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{color: colors.white}}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: screenHeight,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: screenHeight,
    borderRadius: 25,
    padding:20
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  commonTimingView: {
    height: 300,
    width: 120,
    alignItems: 'flex-start',
  },
  commonHtL: {
    borderWidth: 1,
    height: 45,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonHtZ: {
    borderWidth: 1,
    height: 35,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aplhaType: {
    width: 200,
    ...alignment.row_SpaceB,
  },
  pricePercentage: {
    width: 250,
    ...alignment.row_SpaceB,
  },
  submitBtn: {
    width: 300,
    backgroundColor: 'black',
    height: 50,
    alignSelf: 'center',
    marginTop: '30%',
    ...alignment.alignC_justifyC,
  },
  titleText:{
    color:colors.black,
    fontSize:17,
    fontWeight:'bold'
  },
  text:{
    color:colors.black,
    fontSize:15
  }
});

export default BottomSheet;
