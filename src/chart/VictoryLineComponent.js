import React from 'react';
import {
    VictoryLine,
    VictoryLabel
} from "victory-native";

const VictoryLineComponent = props => {
    const {
        victoryLabel,
        style,
    } = props;
    console.log('[props]: ' + JSON.stringify(data));
    const data = [
        { x: '1', y: 99 },
        { x: '2', y: 5 },
        { x: '3', y: 4 },
        { x: '4', y: 7 },
        { x: '5', y: 7 },
        { x: '6', y: 7 },
        { x: '7', y: 3 },
        { x: '8', y: 5 },
        { x: '9', y: 4 },
        { x: '10', y: 7 },
        { x: '11', y: 7 },
        { x: '12', y: 7 },
        { x: '13', y: 7 },
        { x: '14', y: 7 },
        { x: '15', y: 7 },
        { x: '16', y: 99 },
        { x: '17', y: 100 },
        { x: '18', y: 7 },
        { x: '19', y: 7 },
        { x: '20', y: 7 },
        { x: '21', y: 7 },
        { x: '22', y: 7 },
        { x: '23', y: 7 },
        { x: '24', y: 16 },
        { x: '25', y: 7 },
        { x: '26', y: 7 },
        { x: '27', y: 7 },
        { x: '28', y: 7 },
        { x: '29', y: 7 },
        { x: '30', y: 7 }
    ]
    return (
        <VictoryLine
            labels={({ datum }) => datum.y}
            labelComponent={
                <VictoryLabel
                    dy={victoryLabel.dy} />}

            style={style}
            data={data}
        />
    );
};


export default VictoryLineComponent;