import {create} from "zustand"


interface useStoreModalStore{
isOpen : boolean;
onOpen: () =>{};
onClose :()=>{}

}


export const useStoreModal = create<useStoreModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
    

}))