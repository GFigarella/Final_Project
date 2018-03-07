import { TabNavigator, TabBarBottom } from 'react-navigation';

import SignIn from './SignIn'
import SignUp from './SignUp'

const config = {
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp }
}

export default TabNavigator({
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
    })
