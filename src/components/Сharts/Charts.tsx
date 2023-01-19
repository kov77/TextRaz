import { TextTable } from "../Table/TextTable";
import classes from './charts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Label, LabelList, Legend, Pie, PieChart,
    RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {AppStateType} from "../../App/store";


export const Charts = () => {
    const textArr = useSelector((state: AppStateType) => state.fileInput.textArr)

    const dispatch = useDispatch()

    const data = [
        {name: 'Page A', uv: 400, pv: 220, amt: 2400},
        {name: 'Page B', uv: 500, pv: 400, amt: 2400},
        {name: 'Page B', uv: 600, pv: 290, amt: 2400},
        {name: 'Page D', uv: 200, pv: 340, amt: 2400},
        {name: 'Page E', uv: 800, pv: 500, amt: 2400},
        {name: 'Page G', uv: 300, pv: 160, amt: 2400},
    ];

    const data02 = [
        {
            "name": "Group A",
            "value": 2400,
            "label": "GrupeA"
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    const barData = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    if(textArr) {
        return (
            <div className={classes.chartsContainer}>
                <TextTable/>
                <div className={classes.chartsWrapper}>
                    <AreaChart width={550} height={400} data={data}
                               margin={{ top: 0, right: 30, left: 0, bottom: 0 }} className={classes.areaChart}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    <PieChart width={500} height={400}>
                        <Pie data={data02} dataKey="value" nameKey="label" cx="50%" cy="50%" innerRadius={0} outerRadius={140} fill="#82ca9d">     <LabelList className={classes.pieLabel} offset={20} dataKey="name" position="outside" />
                        </Pie>
                    </PieChart>
                    <BarChart className={classes.barChart} width={730} height={250} data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>



            </div>
        )
    } else {
        return <div>

        </div>
    }


}
