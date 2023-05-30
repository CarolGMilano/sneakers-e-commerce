import { Dialog } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeImageDialog } from "@/redux/reducers/imageDialog";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import CloseIcon from "../../public/images/icon-close.svg";

interface IImageDialog {
  image: StaticImageData
}

export default function ImageDialog ({ image }: IImageDialog) {
  const imageDialogStatus = useSelector((state: RootState) => state.imageDialog.isOpen);
  const dispatch = useDispatch();

  return (
    <Dialog 
      open={imageDialogStatus} 
      onClose={() => dispatch(closeImageDialog())}
      className="hidden fixed inset-0 z-10 items-center justify-center lg:flex" 
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-800/70" />
      <div className="z-50 relative">
        <Image 
          src={CloseIcon} 
          alt="Close menu" 
          className="w-[25px] h-auto absolute -top-8 right-0" 
          onClick={() => dispatch(closeImageDialog())} />
        <Image className="z-40 px-1 w-[650px]" src={image} alt="" />
      </div>
    </Dialog>
  )
}