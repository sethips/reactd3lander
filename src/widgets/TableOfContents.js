import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
max-width: 700px;
margin: 7rem auto;
padding: 0 2rem;
hr {
    border: 5px dashed #f77b12;
    width: 40px;
}
.border {
    max-width: 50px;
    margin: 0 auto;
}
h2 {
    font-size: 24px;
}
p {
    font-size: 18px;
}
li {
    font-size: 18px;
}
.header {
    text-align: center;
}
.chapter {
padding: 2rem ;
margin: 1rem 0rem;
border-radius: 20px;
background-color: #fff;
box-shadow: 0 5px 25px 0 
rgba(0,0,0, .25);
}
`

export class TableOfContents extends Component {
  render() {
    return (
      <Wrapper>
        <h1 className='header'>WHAT'S IN THE COURSE</h1>
        <h3 className='header'>Table of contents</h3>
        <div className='border'>
        <hr></hr>
        </div>
        <div className='chapter'>
            <h2>INTRODUCTION</h2>
            <p>Foreword</p>
            <p>Why you should read React + D3v4</p>
            <p>What you need to know How to read this book</p>
            <p>Why React and D3.js</p>
            <p>Buzzword soup explained JSX</p>
        </div>
        <div className='chapter'>
            <h2>VISUALIZING DATA WITH REACT AND D3.JS</h2>
            <p>The basic approach</p>
            <p>Blackbox Components</p>
            <ul>
                <li>A quick blackbox example - a D3 axis</li>
                <li>A quick blackbox example - a React+D3 axis</li>
            </ul>
            <p>A D3 blackbox higher order component – HOC</p>
            <p>Full-feature Integration</p>
            <ul>
                <li>A color scale</li>
            </ul>
            <p>You’re awesome State Handling Architecture</p>
            <ul>
                <li>Basic architecture</li>
                <li>A caveat</li>
            </ul>
            <p>Structuring your React app</p>
            <p>Set up a local environment with create-react-app</p>
            <ul>
                <li>Make sure you have node.js</li>
                <li>Install create-react-app</li>
                <li>Run create-react-app</li>
                <li>What you get</li>
                <li>Install dependencies for this book</li>
            </ul>
        </div>
        <div className='chapter'>
            <h2>A BIG EXAMPLE PROJECT - 176,113 TECH SALARIES VISUALIZED</h2>
            <p>Show a Preloader</p>
            <ul>
                <li>Show a Preloader</li>
                <li>Step 2: Preloader component</li>
                <li>Step 3: Update App</li>
                <li>Step 4: Load Bootstrap styles</li>
            </ul>
            <p>Asynchronously load data</p>
            <ul>
                <li>Step 0: Get the data</li>
                <li>Step 1: Prep App.js</li>
                <li>Step 2: Prep data parsing functions</li>
                <li>Step 3: Load the datasets</li>
                <li>Step 4: Tie the datasets together</li>
            </ul>
            <p>Render a choropleth map of the US</p>
            <ul>
                <li>Step 1: Prep App.js</li>
                <li>Step 2: CountyMap/index.js</li>
                <li>Step 3: CountyMap/CountyMap.js</li>
                <li>Step 4: CountyMap/County.js</li>
            </ul>
            <p>Render a Histogram of salaries</p>
            <ul>
                <li>Step 1: Prep App.js</li>
                <li>Step 2: CSS changes</li>
                <li>Step 3: Histogram component</li>
                <li>Step 4: HistogramBar (sub)component</li>
                <li>Step 5: Axis HOC</li>
            </ul>
            <p>Make it understandable - meta info</p>
            <ul>
                <li>Dynamic title</li>
                <li>Dynamic description</li>
                <li>Median household line</li>
            </ul>
            <p>Add user controls for data slicing and dicing</p>
            <ul>
                <li>Step 1: Update App.js</li>
                <li>Step 2: Build Controls component</li>
                <li>Step 3: Build ControlRow component</li>
                <li>Step 4: Build Toggle component</li>
                <li>Step 5: Add US state and Job Title filters</li>
            </ul>
            <p>A small speed optimization</p>
            <p>Rudimentary routing</p>
            <p>Prep for launch</p>
            <ul>
                <li>Setting up deployment</li>
                <li>Twitter and Facebook cards and SEO</li>
                <li>Full dataset</li>
            </ul>
            <p>Launch!</p>
        </div>
        <div className='chapter'>
            <h2>ANIMATION</h2>
            <p>Using a game loop for rich animation</p>
            <ul>
                <li>A bouncing ball</li>
            </ul>
            <p>Using transitions for simple animation</p>
            <ul>
                <li>Rainbow snake</li>
            </ul>
            <p>Enter/update/exit animation</p>
            <ul>
                <li>Animated alphabet</li>
            </ul>
            <p>Animating with React, Redux, and d3</p>
            <ul>
                <li>Here’s how it works</li>
                <li>3 presentation components</li>
                <li>6 Redux Actions</li>
                <li>1 Container component</li>
                <li>1 Redux Reducer</li>
                <li>What we learned</li>
            </ul>
        </div>
        <div className='chapter'>
            <h2>SPEED OPTIMIZATIONS</h2>
            <p>Using canvas</p>
            <ul>
                <li>Why Canvas</li>
                <li>The trouble with HTML5 Canvas</li>
            </ul>
            <p>Declarative HTML5 Canvas with Konva and react-konva</p>
            <ul>
                <li>A particle generator pushed to 20,000 elements with Canvas</li>
                <li>Billiards simulation with MobX and canvas</li>
            </ul>
            <p>Using a React alternative like Preact or Inferno</p>
            <ul>
                <li>Stress testing with a recursive fractal</li>
                <li>Trying the stress test in Preact and Inferno</li>
            </ul>
        </div>
        <div className='chapter'>
            <h2>CONCLUSION</h2>
            <h2>APPENDIXES</h2>
            <p>Appendix A - roll your own environment</p>
            <p>Appendix B - Browserify-based environment</p>
        </div>
      </Wrapper>
    )
  }
}

export default TableOfContents
