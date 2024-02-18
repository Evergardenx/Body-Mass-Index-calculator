import { FirstSection } from "./pages/FirstSection/FirstSection";
import { SecondSection } from "./pages/SecondSection/SecondSection";
import { ThirdSection } from "./pages/ThirdSection/ThirdSection";
import { FourthSection } from "./pages/FourthSection/FourthSection";

function App() {
  return (
    <div id="app">
      <FirstSection/>
      <img src="/assets/images/pattern-curved-line-left.svg" alt="leftCurvedLine" />
      <SecondSection/>
      <ThirdSection/>
      <img src="/assets/images/pattern-curved-line-right.svg" alt="rightCurvedLine" />
      <FourthSection/>
    </div>
  )
}

export default App
