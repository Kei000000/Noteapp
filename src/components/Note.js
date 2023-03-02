
import { MdDeleteForever } from 'react-icons/md'  //アイコンの名前

// Note関数をつくる
const Note = ({ id, text, date, handleDeleteNote }) => {
    return(
        <div className="note">
            {/* このnotedivがnoteコンポーネントの親divとして機能するようにする。このおかげでスタイル設定(メモの配置など)がしやすくなる。 */}
            <span>{text}</span>
            {/* メモフッターのクラス名を指定するフッターのdivを追加 */}
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id)} 
                className='delete-icon' 
                size='1.3em' 
                />
            </div>
        </div>
    )
};

export default Note;

// これがメモの基本構造