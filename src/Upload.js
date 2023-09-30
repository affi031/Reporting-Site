import React, { useState } from 'react';
import './Upload.css';
import * as XLSX from 'xlsx';

function Upload() {
  const [data, setData] = useState([]);
  const [documentUploaded, setDocumentUploaded] = useState(false);
  const [generateClicked, setGenerateClicked] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const fileData = e.target.result;
      const workbook = XLSX.read(fileData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      setDocumentUploaded(true);
      setGenerateClicked(false); // Reset generateClicked when a new file is uploaded
      setDownloadLink(null); // Reset downloadLink when a new file is uploaded
    };
  };

  const handleGenerateClick = () => {
    // Add logic here to handle the generation.
    // For example, you can create a Blob with the data and make it available for download.

    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    setGenerateClicked(true);
  };

  return (
    <div className='upload'>
      <div className='upload--header'>
        <p className='upload--header--text'>FAKE-O_GRAM</p>
        <button className='logout--button'>Logout</button>
      </div>

      <div className='main--text'>
        <p className='upload--header--text'>Easily identify fake accounts with one click</p>
      </div>

      <div className='upload--container '>

        <div className='inputType container'>
          <p className='inputTypeText '>Drop your File Here</p>
          <input
            type='file'
            className='file--input'
            accept='.xlsx, .xls'
            onChange={handleFileUpload}
          />

          {documentUploaded && !generateClicked && (
            <div className='button--section'>
              <button className='generate--button' onClick={handleGenerateClick}>
                Generate
              </button>
            </div>
          )}

          {generateClicked && downloadLink && (
            <div className='button--section'>
              <a href={downloadLink} download='generated_data.json'>
                <button className='download--button'>Download</button>
              </a>
            </div>
          )}
        </div>

        <div className='uploadSection container'>
          <div className='Output--section'>

            {data.length > 0 && (
              <table className='table' >
                <thead>
                  <tr className="table--row">
                    {Object.keys(data[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, 10).map((row, index) => (
                    <tr key={index} className="table--row">
                      {Object.values(row).map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
