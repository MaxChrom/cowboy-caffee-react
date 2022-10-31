import React from 'react';
import "../style/Story.scss"
import Counter from '../components/ImagesFetch/Counter';
import Form from '../components/Forms/Form';

function Story() {
    return (
        <section className="story">
            <div className="story_img">
               <Counter img = "story"/>
            </div>
            <div className="story_text">
                <h2>Our story</h2>
                <p>GHC started as a project of two friends and passionate baristas, John & Don in 2010.
                    Believing as much in the hand of an educated barista as in the innovative equipment of the our
                    ever-growing industry, GHC offers a full spectrum of brewing opportunities – from pour overs to syphon
                    pots to finely executed espresso beverages. Each cup of coffee is made with love, precision and care.
                </p>
            </div>
            <div className="story_owners">
               <Counter img = "owner1"/>
               <Counter img = "owner2"/>
            </div>
            <div className="story_names">
                <p>Jhon Snow</p>
                <p>Don Wong</p>
            </div>
            <div className="story_form">
               <Form />
            </div>
        </section>
    );
}

export default Story;