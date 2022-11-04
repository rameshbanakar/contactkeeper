import React from 'react'

export const Spinner = () => {
  return (
    <React.Fragment>
        <div className="spinner-border" role="status" style={{
            marginTop:"30%",
            marginLeft:"50%"
        }}>
            <span className="sr-only" ></span>
        </div>
    </React.Fragment>
  )
}