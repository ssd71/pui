import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Title from './Title';
import moment from 'moment';

import io from 'socket.io-client';


const socket = io('http://localhost:4000');

// Generate Sales Data
function createData(efficiency, cpu, load) {
    return { efficiency, cpu, load };
}

const fakeData = [
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),
    createData(3 + Math.random(), 1 + Math.random(), 2 + Math.random()),

];

for (let i = 0; i < fakeData.length; i++) {
    fakeData[i]['time'] = moment().format('LTS');
}

function dispatch(curData, newDataPoint) {
    const newData = [...curData, {...newDataPoint, time: moment().format('LTS')}]
    return newData.slice(1);
}

export default function Chart(props) {
    const theme = useTheme();
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [data, addData] = React.useReducer(dispatch, fakeData)

    useEffect(() => {
        console.log("useEffect");
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('tick', (dataPoint) => {
            addData(dataPoint);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('tick');
        };
    }, []);

    return (
        <React.Fragment>
            <Title>Metrics</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 5,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="time"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                        label={{
                            value: "Time",
                            dy: 20,
                            position:"insideBottomRight"
                        }}
                    >
                    </XAxis>
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        {}
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="efficiency"
                        stroke={theme.palette.primary.main}
                        dot={false}
                        fill={theme.palette.primary.main}
                        fillOpacity={0.7}
                        name="Efficiency"
                    />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="cpu"
                        stroke={theme.palette.secondary.main}
                        dot={false}
                        fill={theme.palette.secondary.main}
                        fillOpacity={0.7}
                        name="CPU Usage"
                    />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="load"
                        stroke={theme.palette.success.main}
                        dot={false}
                        fill={theme.palette.success.main}
                        fillOpacity={0.7}
                        name="Load average"
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}