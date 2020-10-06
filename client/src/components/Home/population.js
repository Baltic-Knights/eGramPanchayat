import React,{useEffect} from "react";
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {populationFetch} from '../../actions/chartsAction';
const Population = () => {
    const dispatch=useDispatch()
    const Record=useSelector((state)=>state.chartsData)
    useEffect(()=>{
            dispatch((populationFetch()));  
    },[])
    const data = {
        labels: Record.popYears,
        datasets: [
            {
                label: "Men",
                data: Record.popMenCount,
                backgroundColor: "#a6dcef"
            },
            {
                label: "Women",
                data: Record.popWomenCount,
                backgroundColor: "#fe7171"
            },
            {
                label: "Children",
                data: Record.popChildrenCount,
                backgroundColor: "#d2e603"
            }
        ]
    }
    return (
        <Card className="col-md-11">
            <Card.Title className="text-center mt-3"><h2>Population from last 5 Surveys.</h2></Card.Title>
            <Card.Body className="mt-2">
                <Bar
                    data={data}
                    options={
                        {
                            tooltips: { mode: "index" },
                        }
                    } />
            </Card.Body>
        </Card>
    );
}

export default Population;