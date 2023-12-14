import PropsClass from "./day4/PropsClass";
import Propsfunction from "./day4/Propsfunction";
import Propsfunctionex from "./day4/Propsfunctionex";
import './App.css';
import PropsArrow from "./day4/PropsArrow";
import StateClassCom from "./day4/StateClassCom";
import Statefunction from "./day4/Statefunction";
import StateHoldObjects from "./day4/StateHoldObjects";
import Parent from "./day4/ParentChildCommunication";
import DynamicRendering from "./day4/DynamicRendering";
import TwoWayBinding from "./day4/TwoWayBinding";
import DefaultProps from "./day4/DefaultProps";
 export default function App(){
  
  return(
    <div>
      <Propsfunction name="Aalisha"></Propsfunction>
      <PropsClass college="SKCT"></PropsClass>
      <Propsfunctionex college="SKCT" place="Coimbatore"></Propsfunctionex>
      <PropsArrow place="Switzerland"></PropsArrow>
      <StateClassCom/>
      <Statefunction></Statefunction>
      <StateHoldObjects></StateHoldObjects>
      <Parent/>
      <DynamicRendering/>
      <TwoWayBinding/>
      <DefaultProps/>
    </div>
  )
} 
