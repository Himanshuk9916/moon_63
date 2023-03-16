import React, {useCallback, useEffect, useImperativeHandle} from 'react';
import {View, Text, StyleSheet, Dimensions,Button} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

type BottomSheetProps = {
    onReturn:()=>void
    props:any
};
export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  props:any
};

const BottomSheet = React.forwardRef(
  (props:any, ref) => {
    console.log(props)
    const translateY = useSharedValue(0);

    const context = useSharedValue({
      y: 0,
    });

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      translateY.value = withSpring(destination, {damping: 50});
    }, []);

    useImperativeHandle(ref, () => ({scrollTo}), [scrollTo]);

    const MAX_TRANSLATE_Y = -screenHeight + 50;

    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translateY.value};
      })
      .onUpdate(event => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -screenHeight / 3) {
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
          <Button title="Press" onPress={()=>props.onReturn('Hello from Child')}/>
          {props.children}
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: screenHeight,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: screenHeight,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;
