'use client';

import React, { ReactNode, useRef } from "react";

interface DialogModalProps {
  id: string; 
  title: string;
  description?: string;
  children?: ReactNode; 
}

export const Modal: React.FC<DialogModalProps> = ({
  id,
  title,
  description,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      {/* Expose open button or you can call openModal() elsewhere */}
      <button className="btn" onClick={openModal}>
        Open {title}
      </button>

      <dialog ref={dialogRef} id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          {description && <p className="py-4">{description}</p>}

          <div className="modal-action flex gap-2">
            {children ? (
              // If custom buttons are passed
              children
            ) : (
              // Default close button
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};
