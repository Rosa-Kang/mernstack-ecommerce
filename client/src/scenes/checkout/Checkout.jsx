import { useSelector } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from "yup";
import { shades } from "../../theme";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSumbit = async (value, actions) => {
    setActiveStep(activeStep + 1);
  }

  async function makePayment(value) {

  }

  return (
    <Box width="80%" m="100px auto">
      <Stepper active=></Stepper>
    </Box>
  )
}

export default Checkout