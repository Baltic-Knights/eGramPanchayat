import React from "react";
import { Line } from 'react-chartjs-2';
import {Card } from 'react-bootstrap';
const Literacy = () => {
    return (
        <Card>
            <Card.Title className="text-center mt-3"><h2>Literacy from last 5 Surveys.</h2></Card.Title>
            <Card.Body className="">
            <Line
                    data={{
                        labels: ["1971","1981","1991","2001","2011"],
                        datasets: [
                            {
                                data:[30,40,50,60,65,68],
                                label: 'Men',
                                borderColor: '#3333ff',
                                fill: true,

                            },
                            {
                                data:[15,20,24,27,30],
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