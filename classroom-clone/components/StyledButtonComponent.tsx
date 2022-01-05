import * as React from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';

interface IDefaultProps {
    method: () => void;
    width: number;
    title: string;
}

export default function StyledButtonComponent(props: IDefaultProps) {
    const { method, width, title } = props;
    return (
        <Button
            title={title}
            buttonStyle={{
                backgroundColor: 'grey',
                borderWidth: 2,
                borderRadius: 30
            }}
            containerStyle={{
                width: width,
                marginHorizontal: 50,
                marginVertical: 10
            }}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={() => method()}
        />
    );
}
