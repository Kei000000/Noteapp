import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/header';


const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "初めてのノート",
    date: "2022/04/20"
  },
  {
    id: nanoid(),
    text: "二番目のノート",
    date: "2022/04/25"
  },
  {
    id: nanoid(),
    text: "三番目のノート",
    date: "2022/04/28"
  },
  {
    id: nanoid(),
    text: "新しいノート！",
    date: "2022/04/30"
  },
]);   //メモを配列に保存 配列内の各項目には日付やノートの内容を保持

const [searchText, setSearchText] = useState('');     //テキスト検索

const [darkMode, setDarkMode] = useState(false);      //useStateに初期値のfalseをいれるのはダークモードなのかそうじゃないのかの二択だから

//最初のロードの時にノートを取得するため↓
useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')      //設定時にデータを文字列として保存することを覚えているからison.parseと等しくなる
    );
    
    if(savedNotes){             //savednotesが空か値が無い場合は設定されない、スキップされる
        setNotes(savedNotes);
    }

}, [])

useEffect(() => {                 //特定の値が変更されたときに定義される(ノートが更新されたら毎回発動する)
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes)      //メモがローカルストレージに保存される
    );
}, [notes]);

//addNote関数をコンポーネントのツリーに渡すのは、
//app.jsで定義し、NoteList.jsのコンポーネントを介して、最後の一行<AddNote handleAddNote=...でaddNoteコンポーネントに渡す！
const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
};

//削除ボタン 新しいノートにもidが生成されるからidも消す？
const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
}


  //↓ノートアプリをレスポンシブにするのに役立つ
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
            <Header handleToggleDarkMode={setDarkMode}/>
            <Search handleSearchNote={setSearchText} />
            <NotesList 
                notes={notes.filter((note)=> 
                  note.text.toLowerCase().includes(searchText)
            )} 
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
        />
    </div>
    </div>
  );
};

export default App;