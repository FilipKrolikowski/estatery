import { Slide } from "@mui/material";
import { useState, forwardRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { TransitionProps } from "@mui/material/transitions";
import { IoMdClose } from "react-icons/io";
import { navItems } from "@/static/data";
import { CustomButton } from "@/components";
import useIsMobile from "@/hooks/useIsMobile";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const MobileMenuModal = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      handleClose();
    }
  }, [isMobile]);

  return (
    <div className="block lg:hidden">
      <div role="button" className="cursor-pointer" onClick={() => setOpen(true)}>
        <GiHamburgerMenu size={25} />
      </div>

      <Dialog
        open={open}
        slots={{ transition: Transition }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullScreen
      >
        <DialogContent className="flex flex-col">
          <div className="flex flex-col gap-8">
            <div className="ml-auto cursor-pointer" onClick={handleClose}>
              <IoMdClose size={30} />
            </div>
            {navItems.map((i) => (
              <div key={i} className="font-medium text-2xl">
                {i}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 mt-auto mb-8">
            <CustomButton text="Login" variant="secondary" />
            <CustomButton text="Sign up" variant="primary" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileMenuModal;
