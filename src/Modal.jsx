import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, mystyle }) => {
	if ( !(isOpen.isopen) ) return null;
	return (
			<div className='modal-overlay' onClick={onClose} style={{zIndex:10}}>
				<div style={mystyle} className='modal-content' onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		);
};

export default Modal;
