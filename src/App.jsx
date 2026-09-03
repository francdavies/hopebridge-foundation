import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import Stories from './pages/Stories'
import Apply from './pages/Apply'
import Support from './pages/Support'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App