import React,{useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function TextForm(props) {
    const HandleUpperCase = ()=>
    {
        // console.log("You Clicked on Uppercase");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert('converted to uppercase','success');
    };
    const HandleLowerCase = ()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert('converted to lowercase','success');
    }
    const HandleSentenceCase = ()=>
    {
        let first=text.toUpperCase();
        let upper=first.charAt(0);
        let lower=text.toLowerCase();
        let remain=lower.slice(1);
        setText(upper+remain);
        props.showAlert('converted to sentencecase','success');
    }
    const HandleRemoveSpace =()=>
    {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert('extra space removed','success');
    }
    const HandleCapitalize = ()=>
    {
        let str = text.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        let newtext=str.join(' ');
        setText(newtext);
        props.showAlert('capitalized','success');
    }
    const HandleClearText = ()=>
    {
        setText("");
        props.showAlert('text cleared!','success');
    }
    const Copyalert = ()=>
    {
        props.showAlert('copied!','success');
    }
    const HandleOnChange = (event)=>
    {
        // console.log("You change Onchange");
        setText(event.target.value)
    }
    const [text,setText]=useState("");
    
  return <div className="container mb-3 my-3" >
         <h3 style={{color:props.mode==='light'?'#2C3E50':'white'}}>{props.Heading}</h3>
         <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#2C3E50':'white',color:props.mode==='light'?'#2C3E50':'white'}} value={text} onChange={HandleOnChange}  rows="8" placeholder='Type or paste your content here'></textarea>
         <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={HandleUpperCase}>Convert To UpperCase</button>
         <button disabled={text.length===0} className='btn btn-dark mx-2 my-2' onClick={HandleLowerCase}>Convert To LowerCase</button>
         <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={HandleSentenceCase}>Sentence Case</button>
         <button disabled={text.length===0} className='btn btn-warning mx-2 my-2' onClick={HandleCapitalize}>Capitalize Text</button>
         <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={HandleRemoveSpace}>Remove Extra Spaces</button>
         <button disabled={text.length===0} className='btn btn-danger mx-2 my-2' onClick={HandleClearText}>Clear Text</button>
         <CopyToClipboard text={text} className="btn btn-success mx-2 my-2">
             <button disabled={text.length===0} onClick={Copyalert}>CopyText</button>
         </CopyToClipboard>
      
         <div className='container my-2' >
            <div className="alert alert-success" role="alert">
            <h2>Your Text Summery</h2>
             {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters
             {/* <p>Expected Read Time {0.008 * text.split(" ").length} Minites</p> */}
            </div>
             <div className="alert alert-warning" role="alert">
             <h2 className='my-2'>Preview</h2>
             {text.length>0?text:"Enter something in above textbox to preview it here"}
             </div>
             
         </div>
         </div>
         ;
}
TextForm.defaultProps={Heading:"Enter Text"}
