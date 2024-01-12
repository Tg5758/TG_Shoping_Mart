import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const StarRating = ({ rating, showRatingText = false }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: rating },
      }}
    >
      <div style={{ display: "flex" }}>
        <Rating name="read-only" value={rating} readOnly />
        {showRatingText && (
          <Typography component="legend">
            <span>({rating})</span>
          </Typography>
        )}
      </div>
    </Box>
  );
};

export default StarRating;
