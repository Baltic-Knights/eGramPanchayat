import React,{useEffect} from "react";
import { Line } from 'react-chartjs-2';
import {Card } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {literacyFetch} from '../../actions/chartsAction';

const Literacy = () => {
    const dispatch=useDispatch()
    const Record=useSelector((state)=>state.chartsData)
    useEffect(()=>{
            dispatch((literacyFetch()));  
    },[])
    return (
        <Card>
            <Card.Title className="text-center mt-3"><h2>Literacy from last 5 Surveys.</h2></Card.Title>
            <Card.Body className="">
            <Line
                    data={{
                        labels:Record.litYears,
                        datasets: [
                            {
                                data:Record.litMenCount,
                                label: 'Men',
                                borderColor: '#3333ff',
                                fill: true,

                            },
                            {
                                data:Record.litWomenCount,
                                label: 'women',
                                borderColor: 'red',
                                fill: true,

                            }],
                    }}
                />
                </Card.Body>
        </Card>
    );
}

export default Literacy;