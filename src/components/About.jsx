import React,{useState} from 'react';

export default function About(props) {
        let myStyle={
            color:props.mode==='light'?'black':'white',
            backgroundColor:props.mode==='dark'?'#284968':'white',
            border:'1px solid',
            borderColor:props.mode==='light'?'grey':'white'
        };
       
  return <div className='container pb-2 my-4' style={myStyle}>
            <h2 className='py-2'>About us</h2>
            <div className="accordion my-2" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and efficiently , Be it word count , character count or
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils is a free character count tool that provides instant character count & word count statistics  for a given text, Textutils reports the number of words and character , Thus it suitable for writing text with word/character limit.                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter work in any web browser such as Chrome , Firefox , Internet Explorer , Safari , Opera . It suits to count characters in facebook blogs ,books , excel document ,pdf document, eassy etc.
                    </div>
                    </div>
                </div>
            </div>
            
        </div>;
}
