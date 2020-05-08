import React from 'react';
import './ResultsPage.css';
import Background from './img/croppedBoard.png';


const sectionStyle = {
    width: '100vw',
    height: 'auto',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  

function ResultsPage(){
    return (
        <div style={sectionStyle}>
            <header className = "overlay">
            <div classname = "ResultsPage">
                <header className = "ResultsPage-Title">
                
                    <p className = "Title">
                            Final Results
                    </p>
                </header>


                <div class="boxed">

                    <div class="scores">
                        <p>John Doe's Score: 200 Points</p>
                        <p>Player 2's Score: 150 Points</p>
                        <p>Player 3's Score: 25 Points</p>
                        <p>Player 4's Score: 200 Points</p>
                    </div>
                    <br/>
                    <div class="winner">
                        <p>John Doe Wins!</p>
                    </div>
                </div>



          
            </div>


            </header>
        </div>
    )


}


export default ResultsPage;
