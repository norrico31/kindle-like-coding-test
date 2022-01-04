import {useState} from 'react';
import './App.css';

function App() {
  const [file, fileSet] = useState<Blob|File|null>();
  const [fileName, fileNameSet] = useState<string>('');
  const showFile = (evt: any) => {
    evt.preventDefault();
    const reader = new FileReader();
    const textFile = /text.*/;
    if (evt.target.files[0].type?.match(textFile)) {
      reader.onload = (e: any) => {
        const text = e.target.result;
        fileSet(text);
      };
      reader.readAsText(evt.target.files[0]);
      fileNameSet(evt.target.files[0].name);
    } else {
      alert('Please select a book')
      fileNameSet('')
      fileSet(null);
    };
  }
  return (
    <div className="App">
      <header className="App-header">
          <input type="file" id='customFile' name='file' onChange={showFile} />
          <h1>{fileName}</h1>
          <p>{file && file}</p>
      </header>
    </div>
  );
}

export default App;
