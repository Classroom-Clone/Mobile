import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import { Store } from './store';
import React from 'react';
import ThemeProvider from 'react-native-elements/dist/config/ThemeProvider';
import MyStack from './navigation/router';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const theme = {
        Button: {
            titleStyle: {
                color: 'red',
            },
        },
    };

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            // <Provider store={Store}>
                <ThemeProvider theme={theme}>
                    <SafeAreaProvider>
                        <MyStack/>
                    </SafeAreaProvider>
                </ThemeProvider>
            // </Provider>
        );
    }
}
