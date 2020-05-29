import React from 'react';
import './ResultsPage.css';


const headerStyle = {
    height: '100vh',
    width: 'auto',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
  };

function ResultsPage(){
    return (
        <div className='backgroundImage'>
            <div className = {'resultsPage'}>
             <header className = {headerStyle}>
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



          


            </header>

            </div>

        </div>
    )


}


export default ResultsPage;
