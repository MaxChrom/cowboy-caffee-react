import React from 'react';
import "../style/Story.scss"

function Story() {
    return (
        <section class="story">
            <div class="story_img">
                <img src="/img/coffee-story.jpg" alt="coffe_story"></img>
            </div>
            <div class="story_text">
                <h2>Our story</h2>
                <p>GHC started as a project of two friends and passionate baristas, John & Don in 2010.
                    Believing as much in the hand of an educated barista as in the innovative equipment of the our
                    ever-growing industry, GHC offers a full spectrum of brewing opportunities – from pour overs to syphon
                    pots to finely executed espresso beverages. Each cup of coffee is made with love, precision and care.
                </p>
            </div>
            <div class="story_owners">
                <img src="/img/owner1.jpeg" alt="Don"></img>
                <img src="/img/owner2.jpeg" alt="Jhon"></img>
            </div>
            <div class="story_names">
                <p>Jhon Snow</p>
                <p>Don Wong</p>
            </div>
            <div class="story_form">
                <form action="action_page.php">

                    <label for="fname">FIRST NAME</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name"/>

                    <label for="lname">LAST NAME</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name"/>

                    <label for="lname">E-MAIL ADDRESS</label>
                    <input type="text" id="email" name="email" placeholder="Your e-mail address"/>


                    <label for="subject">SUBJECT</label>
                    
                    
                    <textarea id="subject" name="subject" placeholder="Your message"></textarea>
                    {/* height:200px */}
                    <input type="submit" value="Submit"/>

                </form>
            </div>
        </section>
    );
}

export default Story;