import React from "react";
import { MdClose } from "react-icons/md";

interface CustomModalProps {
  Content: React.ComponentType;
  title: string;
  closeModal: () => void;
}

const CustomModal = ({ Content, title, closeModal }: CustomModalProps) => {
  return (
    <div className="fixed w-full top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[99]">
      <div className="modal-overlay absolute w-full h-full bg-secondary opacity-45" />
      <div className="modal-content text-white w-[480px] z-[99] bg-secondary rounded-[8px] border border-stroke">
        <div className="modal-header flex items-center justify-between py-[16px] border-b border-stroke px-[24px]">
          <h2 className="text-lg font-[500]"> {title} </h2>

          <MdClose className="cursor-pointer" onClick={closeModal} />
        </div>
        <div className="modal-body py-[16px] px-[24px]">
          {Content && <Content />}
        </div>
        <div className="modal-footer py-[16px] px-[24px] border-t border-stroke">
          <div className="flex items-center justify-end gap-3">
            <button
              className="text-sm py-[8px] px-[16px] bg-primary rounded-[4px] text-black"
              onClick={closeModal}
            >
              <span> Close </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
