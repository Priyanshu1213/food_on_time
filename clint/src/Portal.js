import React from 'react'

import ReactDom from 'react-dom'

const MODAL_STYLES = {

position: 'fixed',

top: '50%',

left: '50%',

backgroundColor: 'gray',

transform: 'translate(-50%,-50%)',

zIndex: 1000,

height: '90%',

width: '90%',

// overflowY: 'auto',
overflowY: 'scroll', // Scroll enabled
scrollbarWidth: 'none', // Firefox
msOverflowStyle: 'none', // IE and Edge


borderRadius: '10px', 
boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',


}

const OVERLAY_STYLES = {

position: 'fixed',

top: 0,

left: 0,

right: 0,

bottom: 0,

backgroundColor: "rgba (theta, theta, theta, 0.7)",

zIndex: 1000



}

export default function Portal({ children, onClose }) {

    return ReactDom.createPortal(
    
    <>
    
    <div style={OVERLAY_STYLES} />
    
    <div style={MODAL_STYLES}  >

         <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
    
    
    <button className='btn bg-danger fs-4' style={{position: "absolute", top: "0", right: "0"}} onClick={onClose}> X</button>
    {children}
    </div>
    </>,
    document.getElementById('cart-root')
    
    )
    
}
