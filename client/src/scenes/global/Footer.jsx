import React from 'react';
import { useTheme, Box, Typography } from '@mui/material';
import {shades} from "../../theme"

const Footer = () => {
    const { palette: { neutral } } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
          <Box
              width="80%"
              margin="auto"
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              rowGap="30px"
              columnGap="clamp(20px, 30px, 40px)"
          >
              <Box width="clamp(20%, 30%, 40%)">
                  <Typography variant="h4" fontWeight="blod" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
                  <div>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</div>
              </Box>
              <Box>
                  <Typography variant="h4" fontWeight="bold" mb="30px">
                      About us
                  </Typography>
                  <Typography mb="30px">Careers</Typography>
                  <Typography mb="30px">Our Stores</Typography>
                  <Typography mb="30px">Terms & Conditions</Typography>
                  <Typography mb="30px">Privacy Policy</Typography>
              </Box>
              <Box>
                  <Typography variant="h4" fontWeight="bold" mb="30px">
                      CUSTOMER CARE
                  </Typography>
                  <Typography mb="30px">Help Center</Typography>
                  <Typography mb="30px">Track YourOrder</Typography>
                  <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                  <Typography mb="30px">Returns & Refunds</Typography>
              </Box>
              <Box width="clamp(20%, 25%, 30%)">
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Contact Us
                </Typography>
                <Typography mb="30px">
                    50 north Whatever Blvd, Washington, DC 10501
                </Typography>
                <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
                    Email: mredwardroh@gmail.com
                </Typography>
                <Typography mb="30px">(222)333-4444</Typography>
            </Box>
          </Box>
    </Box>
  )
}

export default Footer