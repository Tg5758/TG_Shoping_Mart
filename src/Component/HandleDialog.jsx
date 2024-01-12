import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import GetProduct from "./getProduct/delhivery/GetProduct";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HandleDialog = ({ open, setOpen, openByNow, setOpenByNow ,price}) => {
  const [zipCode, setZipCode] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [distance, setDistance] = useState(null);
  console.log("coordinates", coordinates);

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const handleConvert = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?postalcode=${zipCode}&format=json&limit=1`
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates({ lat, lon });

        const coord1 = { lat: 21.31793, lon: 71.03466 };

        const calculatedDistance = haversineDistance(
          coord1.lat,
          coord1.lon,
          lat,
          lon
        );

        setDistance(calculatedDistance.toFixed(2));
      } else {
        console.error("No results found for the given zip code");
      }
    } catch (error) {
      console.error("Error converting zip code:", error);
    }
    setZipCode("");
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Enter Your Location Pincode
          </Typography>

          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              type="text"
              value={zipCode}
              onChange={handleZipCodeChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter Your Pin"
            />
            <button onClick={handleConvert}>Check</button>
          </div>

          {distance !== null && (
            <div>
              <p>
                Estimated Delivery Time:{" "}
                {(distance < 100
                  ? distance * 0.1
                  : (distance * 0.05) / 24
                ).toFixed(0)}{" "}
                Days
              </p>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setOpenByNow(true)}
          >
            Buy Now
          </button>
            </div>
          )}
        </Box>
      </Modal>
      <GetProduct
        setOpenByNow={setOpenByNow}
        openByNow={openByNow}
        style={style}
        price={price}
      />
    </div>
  );
};

export default HandleDialog;
