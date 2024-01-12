import React, { useState } from "react";
import { Box, Button, Modal, Step, StepLabel, Stepper, Typography } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentDetail from "./PaymentDetail";
import OrderConfirm from "./OrderConfirm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const GetProduct = ({ setOpenByNow, openByNow,price }) => {

  const [activeStep, setActiveStep] = useState(1);
  const [delhiveryDetail, setDelhiveryDetail] = useState({
    Name: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    Phone: "",
    AlternetNumber: "",
  });

  const steps = ["Delhivery Address", "Payment Processing", "Order Fulfilled"];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log("step",activeStep)
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClose = () => setOpenByNow(false);

  return (
    <>
      <Modal
        open={openByNow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography>
                    All steps completed
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography>
                    {activeStep === 0 ? <AddressForm setDelhiveryDetail={setDelhiveryDetail} delhiveryDetail={delhiveryDetail} /> : activeStep === 1 ? <PaymentDetail price={price} /> : <OrderConfirm />}
                  </Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default GetProduct;
