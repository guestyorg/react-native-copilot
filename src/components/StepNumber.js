// @flow
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

type Props = {
  currentStepNumber: number,
};

const StepNumber = ({
  currentStepNumber,
  isLastStep,
  isFirstStep,
}: Props) => (
    currentStepNumber > 1 ?

      <View style={styles.stepNumber}>
        <Text style={[styles.stepNumberText]}>{currentStepNumber}</Text>
      </View> :

      isLastStep !== isFirstStep ?
        <View style={styles.stepNumber}>
          <Text style={[styles.stepNumberText]}>{currentStepNumber}</Text>
        </View> :

        null
  );

export default StepNumber;
