// styles

import "./activatesStatistic.scss"

import React from 'react';

// custom imports

import skiboy from "../../images/skiboy.svg"

const ActivatesStatistic = () => {
    return (
        <div className="wrapper_activity">

            <section className="activity">

                <div className="column" style={{position:"relative"}}>
                    <img src={skiboy} alt="image"/>
                    <div className="activity_image_left">
                        <h2>1st Content Area</h2>
                        <p>Start A New Activity And Improve</p>
                        <p>Your Life</p>
                        <button>
                            get Started
                        </button>
                    </div>

                    {/*<div className="activity_image_right">*/}
                    {/*    */}

                    {/*</div>*/}


                </div>

                <div className="column">
                    <h2>2nd Content Area</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus
                        cum praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores
                        laudantium error vero laborum blanditiis nostrum.</p>
                </div>

            </section>


        </div>
    );
};

export default ActivatesStatistic;