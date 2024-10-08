import React from 'react'
import Headers from './components/Headers' // export default
import { Footer } from './components/Footers' // named export
import Data, { Body } from './components/UseJS_InReact+MultipleComponentInSingleFile'  // data default and body named export
import Looping from './components/Looping'
import PropsSend from './components/PropsSend'
import ConditionalRendering from './components/ConditionalRendering'
import { Profile } from './components/Passing_JSX_AsProps'
import ConditionalStylingInReact from './components/ConditionalStyling_InReact'
import EventHandling from './components/EventHandling'
import PassEventHandlersAsProps from './components/PassEventHandlers_AsProps'
import EventPropagation from './components/EventPropagation'
import UseState from './components/Hooks/UseState'
import DerivedState from './components/Hooks/DerivedState'
import ListTheStateUp from './components/Hooks/ListTheStateUp'
import ToggleSwitch from './components/MiniProjects/ToggleSwitch_useState'
import TodoApp from './components/MiniProjects/TodoApp_useState'
import AdvancedCounterUsing_UseState from './components/MiniProjects/AdvancedCounter_UseState'
import AdvaFormSubmituseState from './components/MiniProjects/Adva_FormSubmit_useState'
import UseEffect from './components/Hooks/UseEffect'
import FetchAPIUsingUseEffect from '../src/components/Hooks/FetchAPI_UsingUseEffect'
import UseRef from '../src/components/Hooks/UseRef'
import UseId from '../src/components/Hooks/UseId'
import PropsDribbling from './components/PropsDribbling _WithSolution/PropsDribbling'
import {BioContextProvider} from './components/PropsDribbling _WithSolution/UseContext_Hook_SolutonPropsDribbling/BioContext'
import BioDetails from './components/PropsDribbling _WithSolution/UseContext_Hook_SolutonPropsDribbling/GetBioDetails'
import UpdateBio from './components/PropsDribbling _WithSolution/UseContext_Hook_SolutonPropsDribbling/UpdateBio'
export default function App() {

    return (
        <>


            <Headers />
            <Data />
            <Body />
            <ConditionalRendering />
            <Looping />
            <PropsSend />
            <Profile />
            <ConditionalStylingInReact /> 
            <EventHandling />
            <PassEventHandlersAsProps />
            <EventPropagation />
            <UseState />
            <DerivedState />
            <ListTheStateUp />
            <ToggleSwitch />
            <TodoApp />
            <AdvancedCounterUsing_UseState />
            <AdvaFormSubmituseState />
            <UseEffect />
            <FetchAPIUsingUseEffect />
            <UseRef />
            <UseId />
            <PropsDribbling />

            <BioContextProvider>
                <div>
                    <h1>Solution of the Props Dribbling</h1>
                    <h1>Welcome to the BioContext App</h1>
                    <BioDetails />
                    <UpdateBio />
                </div>
            </BioContextProvider>
            <Footer />

        </>
    )
}


