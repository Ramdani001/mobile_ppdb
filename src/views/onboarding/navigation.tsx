import Login from "./Login";
import Register from "./Register";

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};

export type OnboardingStackParamList = {
    Login: undefined;
    Register: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
    return(
        <OnboardingStack.Navigator>
            <OnboardingStack.Screen name="Login" component={Login} />
            <OnboardingStack.Screen name="Register" component={Register} />
        </OnboardingStack.Navigator>
    )
}

export const RootNavigator = () => {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
        </RootStack.Navigator>
    )
}

