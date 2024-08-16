import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../views/onboarding/navigation';

export const useAppNavigator = () => {
    return useNavigation<NavigationProp<RootStackParamList>>();
}