import React, { useMemo } from 'react'

const DemoOutput = (props) => {
    console.log("Demo Output")

    return (
        <p>{props.show ? 'This is new!' : ''}</p>
    )
}

export default DemoOutput