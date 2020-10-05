import React from "react";
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap'
const Population = () => {
    const data = {
        labels: ["1971", "1981", "1991", "2001", "2011"],
        datasets: [
            {
                label: "Men",
                data: [900, 1012, 1280, 1354, 1500],
                backgroundColor: "#a6dcef"
            },
            {
                label: "Women",
                data: [700, 900, 1100, 1200, 1300],
                backgroundColor: "#fe7171"
            },
            {
                label: "Children",
                data: [550, 600, 700, 800, 900],
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
                            animation: {
                                // duration: 2000,
                                // easing: "easeBounceOut"
                            }
                        }
                    } />
            </Card.Body>
        </Card>
    );
}

export default Population;