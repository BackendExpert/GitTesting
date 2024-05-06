import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddFile from "./comportments/FileUpload/AddFile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddFile />} />
      </Routes>
    </BrowserRouter>
  )
}