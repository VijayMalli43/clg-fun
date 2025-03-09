import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [rollNumber, setRollNumber] = useState("");
    const [collegeEmail, setCollegeEmail] = useState("");
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!rollNumber || !collegeEmail || files.length === 0) {
            setMessage("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append("rollNumber", rollNumber);
        formData.append("collegeEmail", collegeEmail);
        for (let file of files) {
            formData.append("files", file);
        }

        console.log(import.meta.env.VITE_APP_URL)

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_URL}/send-email`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage(res.data.message);
        } catch (error) {
            setMessage("Error sending files");
        }
    };

    return (
        <div>
            <h2>Send Lab Work</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
                <input type="email" placeholder="College Email" value={collegeEmail} onChange={(e) => setCollegeEmail(e.target.value)} />
                <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />
                <button type="submit">Send Files</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;



// import { useState } from "react";
// import axios from "axios";

// const FileUpload = () => {
//   const [rollNumber, setRollNumber] = useState("");
//   const [collegeEmail, setCollegeEmail] = useState("");
//   const [files, setFiles] = useState([]);
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFileNames, setSelectedFileNames] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFiles = [...e.target.files];
//     setFiles(selectedFiles);
//     setSelectedFileNames(selectedFiles.map(file => file.name));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!rollNumber || !collegeEmail || files.length === 0) {
//       setMessage("All fields are required");
//       return;
//     }

//     setIsLoading(true);
//     const formData = new FormData();
//     formData.append("rollNumber", rollNumber);
//     formData.append("collegeEmail", collegeEmail);
//     for (let file of files) {
//       formData.append("files", file);
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/send-email", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setMessage(res.data.message);
//       setRollNumber("");
//       setCollegeEmail("");
//       setFiles([]);
//       setSelectedFileNames([]);
//     } catch (error) {
//       setMessage("Error sending files. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <div className="upload-card">
//         <h2 className="upload-title">Submit Lab Work</h2>
//         <form onSubmit={handleSubmit} className="upload-form">
//           <div className="form-group">
//             <label htmlFor="rollNumber">Roll Number</label>
//             <input
//               type="text"
//               id="rollNumber"
//               value={rollNumber}
//               onChange={(e) => setRollNumber(e.target.value)}
//               placeholder="Enter your roll number"
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="collegeEmail">College Email</label>
//             <input
//               type="email"
//               id="collegeEmail"
//               value={collegeEmail}
//               onChange={(e) => setCollegeEmail(e.target.value)}
//               placeholder="Enter your college email"
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="files">Upload Files</label>
//             <div className="file-input-container">
//               <input
//                 type="file"
//                 id="files"
//                 className="file-input"
//                 multiple
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="files" className="file-input-label">
//                 <span className="file-input-icon">📁</span>
//                 <span>Choose Files</span>
//               </label>
//             </div>
            
//             {selectedFileNames.length > 0 && (
//               <div className="selected-files">
//                 <p>Selected files:</p>
//                 <ul>
//                   {selectedFileNames.map((name, index) => (
//                     <li key={index}>{name}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
          
//           <button type="submit" className="submit-button" disabled={isLoading}>
//             {isLoading ? "Sending..." : "Submit Lab Work"}
//           </button>
//         </form>
        
//         {message && (
//           <div className={`message ${message.includes("Error") ? "error" : "success"}`}>
//             {message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FileUpload;