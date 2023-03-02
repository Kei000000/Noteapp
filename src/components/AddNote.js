import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    //値が更新される度に同じように更新される
    const handleChange = (event) => {
        // console.log(event.target.value);    //ここでユーザーが入力した値が入る
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {     //ハンドルが呼び出されるとテキストを渡す 保存
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        };
    };


    return(         //このdiv内にノートコンポーネントを追加できるようにする
        <div calssName='note new' id="note-new">
            <textarea 
                rows='8' 
                cols='10' 
                placeholder='ノートを追加'
                value={noteText}
                onChange={handleChange}
                >
            </textarea>
            <div className='note-footer'>
                {/* ↓文字数カウント */}
                <small>残り{characterLimit - noteText.length}文字</small>
                <button className='save' onClick={handleSaveClick}>保存</button>
            </div>
        </div>
    ); 
};

export default AddNote;