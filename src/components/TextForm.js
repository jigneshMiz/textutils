import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const handleUpperCaseClick = () => {
        const uppercaseText = text.toLocaleUpperCase();
        setUndoStack([...undoStack, text]);
        setRedoStack([]);
        setText(uppercaseText);
        props.showAlert("Converted to UpperCase!!",'success');
    };

    const handleLowerCaseClick = () => {
        const lowercaseText = text.toLocaleLowerCase();
        setUndoStack([...undoStack, text]);
        setRedoStack([]);
        setText(lowercaseText);
        props.showAlert("Converted to LowerCase!!",'success');
    };

    const handleClearText = () => {
        setUndoStack([...undoStack, text]);
        setRedoStack([]);
        setText('');
        props.showAlert("Teaxt Cleared!!",'success');
    };

    const handleTextChange = (event) => {
        setUndoStack([...undoStack, text]);
        setRedoStack([]);
        setText(event.target.value);
    };

    const handleUndo = () => {
        if (undoStack.length > 0) {
            const lastText = undoStack[undoStack.length - 1];
            setRedoStack([...redoStack, text]);
            setUndoStack(undoStack.slice(0, undoStack.length - 1));
            setText(lastText);
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextText = redoStack[redoStack.length - 1];
            setUndoStack([...undoStack, text]);
            setRedoStack(redoStack.slice(0, redoStack.length - 1));
            setText(nextText);
        }
    };

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Texts are copied!!",'success');
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces has been removed",'success');
    }
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleTextChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpperCaseClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerCaseClick}>Convert to LoweCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleUndo}>Undo</button>
            <button className="btn btn-primary mx-2" onClick={handleRedo}>Redo</button>
        </div>
        <div className='container'>
            <h2>Your text summary</h2>
            <p>{text.length > 0 ? text.split(" ").length : '0'} words and {text.length} chars</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}