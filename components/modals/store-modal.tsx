"use client"

import { Modal } from "../ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"

export const Storemodal =()=>{
const storemodal = useStoreModal()

return(
    
    <Modal
    title="Create Store"
    description="Add a new store to manage products and categories "
    isOpen={storemodal.onOpen}
    onClose={storemodal.onClose}>
        Future Cretae store form 

    </Modal>
)



}