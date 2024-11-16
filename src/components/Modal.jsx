import modals from "../modals";
import {  Dialog, DialogPanel,  Transition } from '@headlessui/react'
import { Fragment,useState } from 'react'
import { modalClose } from "../utils";

const Modal = ({ name, data }) => {
  const currentModal = modals.find(m => m.name === name);

  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(modalClose(), 200);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog>
       <div>
        <div>
          <DialogPanel>
            <currentModal.element close={closeModal} data={data} />
          </DialogPanel>
        </div>
       </div>
      </Dialog>
    </Transition>
  )
}

export default Modal