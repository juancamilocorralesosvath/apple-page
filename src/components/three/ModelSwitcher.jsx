// rendering both mascbooks, animating transitions, presentation controls
import { PresentationControls } from '@react-three/drei'
import React, { useRef } from 'react'

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef()
    const largeMacbookRef = useRef()

    const showLargeMacbook = scale === 0.08 || scale === 0.05
  return (
    <>
        <PresentationControls>
            <group ref={largeMacbookRef}>
                <MacbookModel16
            </group>
        </PresentationControls>
    </>
  )
}

export default ModelSwitcher